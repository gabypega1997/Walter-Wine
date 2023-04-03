import { FC } from "react";
import { ReactNode } from "react";
import { Wine } from "@/common/types/wine.types";

type ProductCardProps = {
    item: Wine;
};

const ProductCart: FC<ProductCardProps> = ({ item }) => {
    return (
        <>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
        </>
    );
};

export default ProductCart;
