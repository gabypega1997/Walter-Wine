import { FC, ReactNode } from "react";

type ButtonChangeQuantityProps = {
    children: ReactNode;
    handlerFc: () => void;
};

const ButtonChangeQuantity: FC<ButtonChangeQuantityProps> = ({
    children,
    handlerFc,
}) => {
    return (
        <button
            className="text-2xl bg-gray-light h-8 w-8 rounded-full aspect-square cursor-pointer	hover:opacity-80 "
            onClick={handlerFc}
        >
            {children}
        </button>
    );
};

export default ButtonChangeQuantity;
