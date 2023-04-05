import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "@/common/store/cart/cart.selector";
import { CartItem, Wine } from "@/common/types/wine.types";
import Image from "next/image";

const CartCheckout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <div>
            {/* Images component */}

                <h1 className="p-3 text-2xl font-bold text-center text-white bg-slate-400">Checkout</h1>
            <div className="rounded-br-[250px] h-96 bg-slate-400 flex max-w-full overflow-scroll">
                {cartItems &&
                    cartItems.map((item: Wine) => (
                        <div
                            key={item.id}
                            className="flex p-5 m-5 overflow-scroll bg-yellow-200 h-52 rounded-3xl min-w-fit"
                        >
                            <Image
                                src="/wine1.png"
                                width={80}
                                height={30}
                                alt="fsa"
                            ></Image>
                        </div>
                    ))}
            </div>

            {/*   Price compoentn   */}
            <div>
                {cartItems &&
                    cartItems.map((item: CartItem) => (
                        <div key={item.id}>
                            <div>
                                {item.title}
                                {": x"}
                                {item.quantity}
                                {" $"}
                                {item.price}{" "}
                            </div>
                        </div>
                    ))}
                    <p>Total: {cartTotal}$</p>
            </div>
        </div>
    );
};

export default CartCheckout;
