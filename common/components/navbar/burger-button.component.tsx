import { useState } from "react";
import NavbarOptions from "./navbar-obtions.component";

const BurgerButton = () => {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

    console.log(burgerMenuIsOpen);
    return (
        <div className="">
            <button
                className={`flex flex-col gap-1 sm:hidden relative z-50 transition-all transform duration-500`}
                onClick={() => setBurgerMenuIsOpen((state) => !state)}
            >
                <div
                    className={`w-10 h-1 transform bg-gray-900 rounded-md duration-500 ${
                        burgerMenuIsOpen
                            ? " rotate-45 origin-center translate-y-2 "
                            : " rotate-0  "
                    }`}
                ></div>
                <div
                    className={`w-10 h-1 transform bg-gray-900 rounded-md ${
                        burgerMenuIsOpen ? "opacity-0 " : "opacity-100 duration-500"
                    }`}
                ></div>
                <div
                    className={`w-10 h-1 transform bg-gray-900 rounded-md duration-500 ${
                        burgerMenuIsOpen
                            ? " -rotate-45 origin-center -translate-y-2"
                            : " rotate-0  "
                    }`}
                ></div>
            </button>

            {burgerMenuIsOpen && (
                <>
                    <div className="absolute top-0 left-0 z-10 w-1/2 h-full bg-slate-100 opacity-30"></div>
                    <div className="absolute top-0 z-20 w-1/2 h-full bg-gray-500 left-1/2">
                        <NavbarOptions type={"mobile"} />
                    </div>
                </>
            )}
        </div>
    );
};

export default BurgerButton;
