import { FC,  useState } from "react";
import { useDispatch } from "react-redux";

import { Wine } from "@/common/types/wine.types";
import Image from "next/image";
import { addItemToCart } from "@/common/store/cart/cart.reducer";

import ProductButton from "./product-button.component";

import ProductAbout from "./product-about.component";

import ContinueShoping from "./continue-shop.component";

type ProductCardProps = {
    item: Wine;
    index: number;
};

const ProductCart: FC<ProductCardProps> = ({ item, index }) => {
    const [showContinueShopping, setShowContinueShopping] = useState(false);

    const dispatch = useDispatch();

    const handleAddProductToCart = () => {
        dispatch(addItemToCart(item));
        setShowContinueShopping(true);
    };
    const handleCloseContinueShopping = () => {
        setShowContinueShopping(false);
    };
    return (
        <div
            className={`" flex h-56 max-w-sm m-1 my-2 bg-gray-light even:flex-row-reverse sm:even:flex-row hover:bg-gray-light/80  "`}
        >
            {showContinueShopping && (
                <ContinueShoping
                    handleCloseContinueShoppingFC={handleCloseContinueShopping}
                />
            )}
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
                                className="hover:-rotate-6"
                            />
                        </ProductButton>

                        <Image
                            className="absolute "
                            src={item.imageUrl}
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
