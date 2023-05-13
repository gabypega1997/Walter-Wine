import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";

import { Wine } from "@/common/types/wine.types";
import Image from "next/image";
import { addItemToCart } from "@/common/store/cart/cart.reducer";

import StarsRating from "./stars-rating.component";
import ProductButton from "./product-button.component";
import { threeDiferiteElements } from "@/common/utils/functions/general.functions";
import ProductAbout from "./product-about.component";

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
            className={`" flex h-56 max-w-sm m-1 my-2 bg-gray-light even:flex-row-reverse sm:even:flex-row  "`}
        >
            <div className="flex justify-center w-2/5">
                <div className="flex flex-col justify-end h-full bg-yellow-200 w-28">
                    <div className="flex items-end justify-center h-12 gap-3">
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
            <ProductAbout index={index} item={item} />
        </div>
    );
};

export default ProductCart;
