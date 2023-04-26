import { FC, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    type: "buy" | "read" | "purchase" | "sign-in" | "google";
};

const Button: FC<ButtonProps> = ({ type, children }) => {
    const buttonStyle = (): string => {
        switch (type) {
            case "buy":
                return " bg-brown rounded-lg py-4 px-6 ";
            case "read":
                return " bg-yellow rounded-lg py-4 px-6   ";
            case "purchase":
                return " bg-brown text-white rounded-lg py-5 px-7  text-xl";
            case "google":
                return " bg-yellow ";
            case "sign-in":
                return "bg-brown";
        }
    };

    return <button className={`${buttonStyle()} font-medium`}>{children}</button>;
};

export default Button;
