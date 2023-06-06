import { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    shape:
        | "buy"
        | "read"
        | "purchase"
        | "sign-in"
        | "google"
        | "continue"
        | "join";
    isPoligon?: boolean;
    otherClasses?: string;
}

const Button: FC<ButtonProps> = ({
    shape,
    children,
    isPoligon,
    otherClasses,
    ...otherProps
}) => {
    const polygonShapeStyle = {
        clipPath:
            "polygon(100% 0%, 90% 50%, 100% 100%, 0% 100%, 10% 50%,0% 0%)",
    };

    // sign-in google
    const smallButton = " h-10 w-32 rounded-lg text-gray-dark ";

    // buy read continue
    const mediumButton = " h-14 w-32 rounded-lg ";

    // purchase
    const largeButton = "  h-20 w-44 rounded-lg text-2xl ";

    const buttonStyle = (): string => {
        switch (shape) {
            case "buy":
                return ` ${mediumButton}" bg-brown "`;
            case "read":
                return ` ${mediumButton}" bg-yellow "`;
            case "purchase":
                return ` ${largeButton}" bg-brown  text-white "`;
            case "google":
                return ` ${smallButton}" bg-yellow 	 "`;
            case "sign-in":
                return ` ${smallButton}" bg-brown "`;
            case "continue":
                return ` ${mediumButton}" bg-green-700 text-white "`;
            case "join":
                return ` ${mediumButton} bg-brown text-white `;
            default:
                return " ";
        }
    };

    return (
        <button
            className={`${buttonStyle()} font-semibold drop-shadow-lg ${otherClasses} hover:opacity-90 hover:shadow-lg `}
            style={isPoligon ? polygonShapeStyle : {}}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
