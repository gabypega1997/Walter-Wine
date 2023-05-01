import { FC, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    type: "buy" | "read" | "purchase" | "sign-in" | "google" | "continue";
    isPoligon?: boolean;
    onClickFunc: () => void;
};

const Button: FC<ButtonProps> = ({ type, children, isPoligon, onClickFunc }) => {
    const polygonShapeStyle = {
        clipPath:
            "polygon(100% 0%, 90% 50%, 100% 100%, 0% 100%, 10% 50%,0% 0%)",
    };

    // sign-in google
    const smallButton = " h-10 w-32 rounded-lg ";

    // buy read continue
    const mediumButton = " h-14 w-32 rounded-lg ";

    // purchase
    const largeButton = "  h-16 w-36 rounded-lg text-xl ";

    const buttonStyle = (): string => {
        switch (type) {
            case "buy":
                return `${mediumButton}" bg-brown "`;
            case "read":
                return `${mediumButton}" bg-yellow "`;
            case "purchase":
                return `${largeButton}" bg-brown text-white"`;
            case "google":
                return `${smallButton}" bg-yellow "`;
            case "sign-in":
                return `${smallButton}" bg-brown "`;
            case "continue":
                return `${largeButton}" bg-green-200"`;
            default:
                return " ";
        }
    };

    return (
        <button
            className={`${buttonStyle()} font-medium`}
            style={isPoligon ? polygonShapeStyle : {}}
            onClick={onClickFunc}
        >
            {children}
        </button>
    );
};

export default Button;
