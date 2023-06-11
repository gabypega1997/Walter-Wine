import { FC, ReactNode } from "react";

type CheckboxProps = {
    children: ReactNode;
    checkboxFor: string;
    onChangeFc?: () => void;
};

const Checkbox: FC<CheckboxProps> = ({ children, checkboxFor, onChangeFc }) => {
    return (
        <div className="relative flex items-center gap-3 py-2 text-lg font-semibold text-brown hover:text-brown/80 ">
            <div className="w-5 h-5 ring-4 ring-brown">
                <input
                    type="checkbox"
                    id={checkboxFor}
                    name={checkboxFor}
                    className="w-5 h-5 appearance-none accent-brown checked:bg-brown checked:border-brown"
                    onChange={onChangeFc}
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
