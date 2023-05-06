import { useSelector } from "react-redux";

import {
    selectCartItems,
    selectCartTotal,
} from "@/common/store/cart/cart.selector";
import { CartItem, Wine } from "@/common/types/wine.types";
import Image from "next/image";
import { selectUser } from "@/common/store/user/user.selector";
import Payment from "../payment-form";
import Link from "next/link";
import CartCard from "./cart-card.component";

const CartCheckout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const currentUser = useSelector(selectUser);

    return (
        <div className="min-h-screen">
            {/* Images component */}

            <h1 className="p-3 text-2xl font-bold text-center text-white bg-gray-dark">
                Checkout
            </h1>
            <div className="rounded-br-[250px] h-96 bg-gray-dark flex max-w-full overflow-scroll drop-shadow-2xl">
                {!cartItems.length && (
                    <div className="text-white text-xl p-5">
                        Your cart is empty
                    </div>
                )}
                {cartItems &&
                    cartItems.map((item: CartItem) => (
                        <CartCard cartItem={item} key={item.id} />
                    ))}
            </div>

            {/*   Price compoentn   */}
            <div className="p-6  font-semibold">
                {cartItems &&
                    cartItems.map((item: CartItem) => (
                        <div key={item.id} className="">
                            <div className="flex py-1">
                                <div className="w-3/5">
                                    {item.title}
                                    {":"}
                                </div>
                                <div className="w-1/5">
                                    {item.price}${" x "}
                                    {item.quantity}
                                </div>
                                <div className="w-1/5 pl-4">
                                    {" $"}
                                    {item.price * item.quantity!}{" "}
                                </div>
                            </div>
                        </div>
                    ))}

                {cartTotal > 0 && (
                    <>
                        <hr />

                        <div className="flex justify-between pt-2 ">
                            <span>Total:</span> <span>${cartTotal}</span>
                        </div>
                    </>
                )}
            </div>

            {/* LogIn Component */}
            {currentUser ? (
                <Payment />
            ) : (
                <div className="text-lg p-16">
                    You need to be{" "}
                    <Link href="auth" className="text-wine font-bold">
                        registred
                    </Link>{" "}
                    to use Payments
                </div>
            )}
        </div>
    );
};

export default CartCheckout;
