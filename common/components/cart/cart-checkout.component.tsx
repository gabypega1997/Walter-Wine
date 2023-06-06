import { useSelector } from "react-redux";

import {
    selectCartItems,
    selectCartTotal,
} from "@/common/store/cart/cart.selector";
import { CartItem } from "@/common/types/wine.types";
import { selectUser } from "@/common/store/user/user.selector";
import Payment from "../payment-form";
import Link from "next/link";
import CartCard from "./cart-card.component";
import PriceTabel from "./price-tabel.component";

const CartCheckout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const currentUser = useSelector(selectUser);

    return (
        <div>
            {/* Images component */}

            <div className="rounded-br-[250px] h-96 bg-gray-dark flex max-w-full justify-center  drop-shadow-2xl pt-10 md:rounded-b-[250px] overflow-auto">
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
            <div className="p-6  font-semibold mx-auto md:w-3/6 md:py-12 lg:w-2/6 lg:py-20">
                {cartItems &&
                    cartItems.map((item: CartItem) => (
                        <PriceTabel key={item.id} cartItem={item} />
                    ))}

                {cartTotal > 0 && (
                    <>
                        <hr />
                        <div className="flex pt-2 justify-around text-lg ">
                            <span>Total:</span>{" "}
                            <span className="">${cartTotal}</span>
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
