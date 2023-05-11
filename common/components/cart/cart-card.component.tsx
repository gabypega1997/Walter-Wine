import { useDispatch } from "react-redux";

import { FC } from "react";

import { CartItem } from "@/common/types/wine.types";
import {
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart,
} from "@/common/store/cart/cart.reducer";

type CartCardProps = {
    cartItem: CartItem;
};

const CartCard: FC<CartCardProps> = ({ cartItem }) => {
    const dispatch = useDispatch();
    const handleIncreaseProduct = () => {
        dispatch(addItemToCart(cartItem));
    };
    const handleDecreaseProduct = () => {
        dispatch(removeItemFromCart(cartItem));
    };
    const handleEraseProduct = () => {
        dispatch(clearItemFromCart(cartItem));
    };
    return (
        <div className="w-32  h-72 mx-8 rounded-2xl">
            <div className="bg-yellow h-52 w-32 m-auto rounded-2xl">
                <button
                    className="absolute ml-[100px] p-1 font-bold"
                    onClick={handleEraseProduct}
                >
                    X
                </button>

                <span className="">Image</span>
            </div>
            <div className="font-semibold text-white py-1 text-center">
                <h3 className="text-lg py-1">{cartItem.title}</h3>
                <div className="flex justify-center items-center">
                    <span
                        className="text-2xl bg-gray-light px-2 rounded-full "
                        onClick={handleDecreaseProduct}
                    >
                        {" "}
                        &#8722;
                    </span>
                    <span className="px-3">{cartItem.quantity}</span>
                    <span
                        className="text-2xl bg-gray-light px-2 rounded-full"
                        onClick={handleIncreaseProduct}
                    >
                        &#43;
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
