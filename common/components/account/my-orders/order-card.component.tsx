import { CartItem, Wine } from "@/common/types/wine.types";
import { FC } from "react";

type OrderCardType = {
    items: CartItem[];
    index: number;
};

const OrderCard: FC<OrderCardType> = ({ items, index }) => {
    const numberOfOrder = index + 1;

    return (
        <div>
            <h2>Order {numberOfOrder}</h2>
            <br/>
            {items.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

export default OrderCard;
