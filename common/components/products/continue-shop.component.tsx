import { FC, useState } from "react";
import Button from "../button/button.component";
import ConfirmationCircle from "../confirmation-circle/confirmation-circle.component";
import { useRouter } from "next/router";
import Modal from "../modal/modal.component";

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
        <Modal>
            <div className="h-[230px] w-[300px] bg-white rounded-2xl shadow-md">
                <div className="flex flex-col items-center justify-center">
                    <p className="px-12 py-4 text-lg font-semibold">
                        This item was added to your shopping cart
                    </p>
                    <ConfirmationCircle
                        className="w-16 h-16 mb-3"
                        color="green"
                    />
                </div>
                <div className="flex items-center justify-evenly">
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
        </Modal>
    );
};

export default ContinueShoping;
