import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    otherClasses?: string;
}

const Input: FC<InputProps> = ({ otherClasses, ...otherProps }) => {
    return (
        <input
            {...otherProps}
            className={`my-4 text-gray-light font-semibold text-lg p-2 rounded-lg w-5/6 placeholder:font-semibold
            border-b-2
            focus:outline-none  focus:border-gray-dark 
            hover:border-gray-dark
            ${otherClasses} `}
            style={{
                clipPath:
                    "polygon(100% 0%,100% 10%, 95% 50%,100% 90%, 100% 100%, 0% 100%, 0% 0%)",
            }}
        />
    );
};

export default Input;
