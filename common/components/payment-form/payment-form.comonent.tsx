import { FormEvent, useState } from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";

import {
    selectCartTotal,
    selectCartItems,
} from "../../store/cart/cart.selector";
import { selectUser } from "../../store/user/user.selector";
import Spinner from "../spinner";
import { setUser } from "@/common/store/user/user.store";
import { updateOrderForUser } from "@/common/utils/firebase/firestore.functions";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
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
                console.table(currentUser)
                updateOrderForUser(currentUser,cartItems)
                alert("Payment Successful");
            }
        }
    };

    return (
        <div>
            <form onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                {isProcessingPayment ? <Spinner /> : <button>Pay now</button>}
            </form>
        </div>
    );
};

export default PaymentForm;
