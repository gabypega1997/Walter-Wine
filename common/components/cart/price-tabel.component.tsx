import { CartItem } from "@/common/types/wine.types";
import { FC } from "react";

type PriceTabelProps = {
    cartItem: CartItem;
};
const PriceTabel: FC<PriceTabelProps> = ({ cartItem }) => {
    return (
        <div className="flex py-1">
            <div className="w-3/5">
                {cartItem.title}
                {":"}
            </div>
            <div className="w-1/5">
                {cartItem.price}${" x "}
                {cartItem.quantity}
            </div>
            <div className="w-1/5 pl-4">
                {" $"}
                {cartItem.price * cartItem.quantity!}{" "}
            </div>
        </div>
    );
};

export default PriceTabel;
