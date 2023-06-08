import { FC, ReactNode } from "react";

type ProductButton = {
    children: ReactNode;
    handler?: () => void;
};

const ProductButton: FC<ProductButton> = ({ children, handler }) => {
    return (
        <button
            className=" text-white  z-10 rounded-sm h-9 w-9 bg-gray-light hover:bg-gray-dark"
            onClick={handler}
        >
            {children}
        </button>
    );
};

export default ProductButton;
