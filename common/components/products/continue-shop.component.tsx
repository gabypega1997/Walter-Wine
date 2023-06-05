import { FC, useState } from "react";
import Button from "../button/button.component";
import ConfirmationCircle from "../confirmation-circle/confirmation-circle.component";
import { useRouter } from "next/router";

type ContinueShopingProps = {
    handleCloseContinueShoppingFC: () => void;
};

const ContinueShoping: FC<ContinueShopingProps> = ({
    handleCloseContinueShoppingFC,
}) => {
    const router = useRouter();

    const handleRouteCart = () => {
        router.push("/cart");
    };

    return (
        <div className="bg-white/20 absolute z-50 top-0 left-0 h-full w-screen flex justify-center items-center">
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
                        onClick={handleCloseContinueShoppingFC}
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
    );
};

export default ContinueShoping;
