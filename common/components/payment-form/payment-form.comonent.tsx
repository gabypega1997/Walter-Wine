import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import {
    CardElement,
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";

import {
    selectCartTotal,
    selectCartItems,
} from "../../store/cart/cart.selector";
import { selectUser } from "../../store/user/user.selector";
import Spinner from "../spinner";
import { updateOrderForUser } from "@/common/utils/firebase/firestore.functions";
import { clearCart } from "@/common/store/cart/cart.reducer";
import Button from "../button/button.component";

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

                // ******************* Store orders to redux *************

                // dispatch(
                //     setUser({
                //         ...currentUser,
                //         orders: [...currentUser.orders, cartItems],
                //     })
                // );

                router.push("/confirmation");
                dispatch(clearCart());
            }
        }
    };

    return (
        <div>
            <form onSubmit={paymentHandler} className="flex flex-col items-center">
                <h2>Credit Card Payment: </h2>

                <CardElement className="p-5 text-2xl w-full" />

                <Button type="purchase">
                    {isProcessingPayment ? <Spinner /> : "Pay now"}
                </Button>
            </form>
        </div>
    );
};

export default PaymentForm;
