import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";

import { Wine } from "@/common/types/wine.types";
import Image from "next/image";
import { addItemToCart } from "@/common/store/cart/cart.reducer";

import StarsRating from "./stars-rating.component";
import ProductButton from "./product-button.component";
import { threeDiferiteElements } from "@/common/utils/functions/general.functions";

type ProductCardProps = {
    item: Wine;
    index: number;
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
                        <ProductButton>
                            <Image
                                src="/images/shop/share.png"
                                height={20}
                                width={40}
                                alt="share"
                            />
                        </ProductButton>
                        <ProductButton handler={handleAddProductToCart}>
                            <Image
                                src="/images/shop/cart.png"
                                height={30}
                                width={30}
                                alt="share"
                            />
                        </ProductButton>

                        <Image
                            className="absolute"
                            src={`/images/shop/${threeDiferiteElements(
                                index,
                                "WineYellow.png",
                                "WineRed.png",
                                "WineBrown.png"
                            )}`}
                            width={118}
                            height={200}
                            alt={item.title}
                        />
                    </div>
                </div>
            </div>

            <div className="w-3/5 mr-2 text-center">
                <h1
                    className={`" py-2 text-2xl font-bold "${threeDiferiteElements(
                        index,
                        " text-yellow ",
                        " text-brown ",
                        " text-[#4A3328] "
                    )}`}
                >
                    {item.title}
                </h1>

                <p className="text-md leading-5 text-white text-start h-36 mx-3">
                    {item.description}
                </p>

                <div className="ml-auto w-20">
                    <StarsRating rating={item.rating} />
                </div>
            </div>
        </div>
    );
};
// " text-[#4A3328] "

// threeDiferiteElements(index,"WineYellow.png","WineRed.png","WineBrown.png")
export default ProductCart;
