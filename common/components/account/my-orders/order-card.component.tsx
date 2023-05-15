import { CartItem, Wine } from "@/common/types/wine.types";
import { FC } from "react";

type OrderCardType = {
    items: CartItem[];
    index: number;
};

const OrderCard: FC<OrderCardType> = ({ items, index }) => {
    const numberOfOrder = index + 1;
    const total = items.reduce((acc, item) => {
        return acc + item.quantity! * item.price;
    }, 0);
    return (
        <div className="bg-gray-dark w-11/12 m-auto p-5">
            <h2 className="pl-10 text-lg font-semibold">
                Order {numberOfOrder}
            </h2>
            <br />
            {items.map((item) => (
                <div key={item.id} className="flex">
                    <p className="w-2/4">{item.title} :</p>
                    <p className="w-1/4">x{item.quantity}</p>
                    <p>${item.price}.00 </p>
                </div>
            ))}
            <div className="flex pt-3 text-lg font-semibold">
                <p className="w-3/4">Total :</p>
                <p>${total}</p>
            </div>
        </div>
    );
};

export default OrderCard;
