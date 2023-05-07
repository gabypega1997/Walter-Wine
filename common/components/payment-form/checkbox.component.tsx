import { FC, ReactNode } from "react";

type CheckboxProps = {
    children: ReactNode;
    checkboxFor: string;
};

const Checkbox: FC<CheckboxProps> = ({ children, checkboxFor }) => {
    return (
        <div className="flex gap-3 py-2 text-lg text-brown font-semibold items-center relative">
            <input
                type="checkbox"
                id={checkboxFor}
                name={checkboxFor}
                className="ring-4 ring-brown w-5 h-5 accent-brown appearance-none  checked:bg-brown checked:border-brown
            "
            style={{  transformOrigin: "bottom left",
                clipPath: "polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)"}}
            />

            <label htmlFor={checkboxFor}>{children}</label>
        </div>
    );
};

export default Checkbox;
