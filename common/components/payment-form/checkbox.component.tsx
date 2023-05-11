import { FC, ReactNode } from "react";

type CheckboxProps = {
    children: ReactNode;
    checkboxFor: string;
};

const Checkbox: FC<CheckboxProps> = ({ children, checkboxFor }) => {
    return (
        <div className="flex gap-3 py-2 text-lg text-brown font-semibold items-center relative">
            <div className="ring-4 ring-brown w-5 h-5">
                <input
                    type="checkbox"
                    id={checkboxFor}
                    name={checkboxFor}
                    className=" w-5 h-5 accent-brown appearance-none  checked:bg-brown checked:border-brown
                
            "
                    style={{
                        transformOrigin: "bottom left",
                        clipPath:
                            "polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)",
                    }}
                />
            </div>

            <label htmlFor={checkboxFor}>{children}</label>
        </div>
    );
};

export default Checkbox;
