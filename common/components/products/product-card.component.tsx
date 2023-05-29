import { FC, ReactNode, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { Wine } from "@/common/types/wine.types";
import Image from "next/image";
import { addItemToCart } from "@/common/store/cart/cart.reducer";

import ProductButton from "./product-button.component";
import { threeDiferiteElements } from "@/common/utils/functions/general.functions";
import ProductAbout from "./product-about.component";
import Button from "../button/button.component";
import ConfirmationCircle from "../confirmation-circle/confirmation-circle.component";

type ProductCardProps = {
    item: Wine;
    index: number;
};

const ProductCart: FC<ProductCardProps> = ({ item, index }) => {
    const [showContinueShopping, setShowContinueShopping] = useState(false);

    const dispatch = useDispatch();
    const router = useRouter();

    const handleAddProductToCart = () => {
        dispatch(addItemToCart(item));
        setShowContinueShopping(true);
    };

    const handleRouteCart = () => {
        router.push("/cart");
    };

    const handleCloseContinueShopping = () => {
        setShowContinueShopping(false);
    };
    return (
        <div
            className={`" flex h-56 max-w-sm m-1 my-2 bg-gray-light even:flex-row-reverse sm:even:flex-row  "`}
        >
            {showContinueShopping && (
                <div className="bg-white/20 absolute z-50 top-0 left-0 h-screen w-screen flex justify-center items-center">
                    <div className="h-[230px] w-[300px] bg-white rounded-2xl shadow-md">
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-semibold px-12 py-4 text-lg">
                                This item was added to your shopping cart
                            </p>
                            <ConfirmationCircle
                                className="w-16 h-16 mb-3"
                                color="green"
                            />
                        </div>
                        <div className="flex justify-evenly items-center">
                            <Button
                                shape="continue"
                                onClick={handleCloseContinueShopping}
                            >
                                Continue
                                <br />
                                Shopping
                            </Button>
                            <Button shape="join" onClick={handleRouteCart}>
                                Shoping<br></br> Cart
                            </Button>
                        </div>
                    </div>
                </div>
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
