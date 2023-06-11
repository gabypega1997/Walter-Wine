import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";

import {
    selectCartTotal,
    selectCartItems,
} from "../../store/cart/cart.selector";
import { selectUser } from "../../store/user/user.selector";
import Spinner from "../spinner/spinner.component";
import { updateOrderForUser } from "@/common/utils/firebase/firestore.functions";
import { clearCart } from "@/common/store/cart/cart.reducer";
import Button from "../button/button.component";
import Image from "next/image";
import Checkbox from "./checkbox.component";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();
    const dispatch = useDispatch();

    const amount = useSelector(selectCartTotal);
    const cartItems = useSelector(selectCartItems);
    const currentUser = useSelector(selectUser);

    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsProcessingPayment(true);
        const response = await fetch("/api/stripe/payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: amount * 100 }),
        }).then((res) => res.json());

        const { clientSecret } = response;
        

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)!,
                billing_details: {
                    name: currentUser ? currentUser.displayName : "guest",
                },
            },
        });
        setIsProcessingPayment(false);
        if (paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                updateOrderForUser(currentUser, cartItems);

                router.push("/confirmation");
                dispatch(clearCart());
            }
        }
    };

    return (
        <div>
            <form
                onSubmit={paymentHandler}
                className="flex flex-col items-center"
            >
                <h2>Credit Card Payment: </h2>
                <div className="flex gap-7 py-4">
                    <Image
                        src="/images/cart/visa.png"
                        width={40}
                        height={80}
                        alt="visa"
                    />
                    <Image
                        src="/images/cart/maestro.png"
                        width={50}
                        height={80}
                        alt="visa"
                    />
                    <Image
                        src="/images/cart/mastercard.png"
                        width={40}
                        height={80}
                        alt="visa"
                    />
                </div>
                <CardElement className="p-5 text-2xl w-full md:w-3/6 lg:w-2/6" />
                <div className="flex flex-col pt-5 pb-8">
                    <Checkbox checkboxFor="conditions">
                        I agree to terms & conditions
                    </Checkbox>

                    <Checkbox checkboxFor="newsletter">
                        Sign up to our newsletter
                    </Checkbox>
                </div>
                <div className="pb-16">
                    <Button shape="purchase">
                        {isProcessingPayment ? <Spinner otherClasses="mx-auto fill-wine w-12 h-12"/> : "Pay now"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;
