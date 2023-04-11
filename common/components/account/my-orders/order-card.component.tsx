import { CartItem, Wine } from "@/common/types/wine.types";
import { FC } from "react";

type OrderCardType = {
    order: CartItem;
    index: number;
};

const OrderCard: FC<OrderCardType> = ({ order, index }) => {
    return <>Order</>;
};

export default OrderCard;
