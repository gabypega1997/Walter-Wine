import { useDispatch } from "react-redux";

import { FC } from "react";

import { CartItem } from "@/common/types/wine.types";
import {
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart,
} from "@/common/store/cart/cart.reducer";
import ButtonChangeQuantity from "./buttons-change-quantity.component";
import Image from "next/image";

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
            <div className={` h-[241px] w-[127px] m-auto rounded-2xl relative`}>
                <Image
                    src={cartItem.imageUrl}
                    width={120}
                    height={100}
                    alt={cartItem.title}
                    className="rounded-2xl "
                />
                <button
                    className="absolute top-1 right-4 p-1 font-bold text-gray-900 "
                    onClick={handleEraseProduct}
                >
                    &#10006;
                </button>
            </div>
            <div className="font-semibold text-white py-1 text-center">
                <h3 className="text-lg py-1">{cartItem.title}</h3>
                <div className="flex justify-center items-center">
                    <ButtonChangeQuantity handlerFc={handleDecreaseProduct}>
                        &#8722;
                    </ButtonChangeQuantity>

                    <span className="px-3	">{cartItem.quantity}</span>

                    <ButtonChangeQuantity handlerFc={handleIncreaseProduct}>
                        &#43;
                    </ButtonChangeQuantity>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
