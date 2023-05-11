import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";

import { Wine } from "@/common/types/wine.types";
import Image from "next/image";
import { addItemToCart } from "@/common/store/cart/cart.reducer";

import StarsRating from "./stars-rating.component";

type ProductCardProps = {
    item: Wine;
    index: number;
};

type ProductButton = {
    children: ReactNode;
};

const ProductButton: FC<ProductButton> = ({ children }) => {
    return (
        <button className=" text-white rounded-sm h-9 w-9 bg-gray-light">
            {children}
        </button>
    );
};

const ProductCart: FC<ProductCardProps> = ({ item, index }) => {
    const dispatch = useDispatch();

    const handleAddProductToCart = () => {
        dispatch(addItemToCart(item));
    };
    return (
        <div
            className={`" flex h-56 max-w-sm m-1 my-2 bg-gray-light even:flex-row-reverse  "`}
        >
            <div className="flex justify-center w-2/5">
                <div className="flex flex-col justify-end h-full bg-yellow-200 w-28">
                    <div className="flex items-end justify-center h-12 gap-3 bg-yellow-400">
                        <button className="z-20 text-white rounded-sm h-9 w-9 bg-gray-light">
                            <Image src="/images/shop/share.png" height={20} width={30} alt="share"/>
                        </button>

                        <button
                            onClick={handleAddProductToCart}
                            className="z-20 text-white rounded-sm h-9 w-9 bg-gray-light"
                        >
                            <Image src="/images/shop/cart.png" height={30} width={25} alt="share"/>
                        </button>

                        <Image
                            className="absolute bg-yellow"
                            src="/images/shop/WineYellow.png"
                            width={118}
                            height={200}
                            alt={item.title}
                        />
                    </div>
                </div>
            </div>

            <div className="w-3/5 mr-2 text-center">
                <h1
                    className={`"py-3 text-2xl font-bold "${
                        (index + 1) % 3 === 0
                            ? " text-[#4A3328] "
                            : (index + 1) % 3 === 2
                            ? " text-brown "
                            : " text-yellow "
                    }`}
                >
                    {item.title}
                </h1>

                <p className="text-md leading-5 text-white text-start h-36">
                    {item.description}
                </p>

                <div className="ml-auto w-20">
                    <StarsRating rating={item.rating} />
                </div>
            </div>
        </div>
    );
};

export default ProductCart;
