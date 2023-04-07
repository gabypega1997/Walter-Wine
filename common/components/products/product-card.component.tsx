import { FC, ReactNode, use } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Wine } from "@/common/types/wine.types";
import Image from "next/image";
import { addItemToCart } from "@/common/store/cart/cart.reducer";
import {
    selectCartCount,
    selectCartItems,
} from "@/common/store/cart/cart.selector";

type ProductCardProps = {
    item: Wine;
};

type ProductButton = {
    children: ReactNode;
};

const ProductButton: FC<ProductButton> = ({ children }) => {
    return (
        <button className="z-20 text-white rounded-sm h-9 w-9 bg-slate-500">
            {children}
        </button>
    );
};

const ProductCart: FC<ProductCardProps> = ({ item }) => {
    const dispatch = useDispatch();

    const handleAddProductToCart = () => {
        dispatch(addItemToCart(item));
    };
    return (
        <div className="flex h-56 max-w-sm m-2 bg-gray-600">
            <div className="flex justify-center w-2/5">
                <div className="flex flex-col justify-end h-full bg-yellow-200 w-28">
                    <div className="flex items-end justify-center h-12 gap-3 bg-yellow-400">
                        <button className="z-20 text-white rounded-sm h-9 w-9 bg-slate-500">
                            Share
                        </button>
                        <button
                            onClick={handleAddProductToCart}
                            className="z-20 text-white rounded-sm h-9 w-9 bg-slate-500"
                        >
                            Buy
                        </button>
                        <Image
                            className="absolute"
                            src="/wine1.png"
                            width={80}
                            height={150}
                            alt={item.title}
                        />
                    </div>
                </div>
            </div>
            <div className="w-3/5 mr-2 text-center">
                <h1 className="p-2 text-2xl font-bold text-yellow-200">
                    {item.title}
                </h1>
                <h3 className="text-xl leading-5 text-white text-start">
                    {item.description}
                </h3>
                <div className="w-20 h-5 m-3 ml-auto bg-yellow-300">Stars</div>
            </div>
        </div>
    );
};

export default ProductCart;
