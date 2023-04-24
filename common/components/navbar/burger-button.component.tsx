import { useState } from "react";
import BurgerMenu from "./burger-menu.component";

const BurgerButton = () => {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

    const handleBurgerMenuIsOpen = () => {
        setBurgerMenuIsOpen((state) => !state);
    };
    console.log(burgerMenuIsOpen);
    return (
        <>
            <button
                className={`flex flex-col gap-1 sm:hidden relative z-50 `}
                onClick={handleBurgerMenuIsOpen}
            >
                <div
                    className={`w-10 h-1 transform rounded-md duration-500    ${
                        burgerMenuIsOpen
                            ? " rotate-45 origin-center translate-y-2 bg-gray-dark"
                            : " rotate-0  bg-gray-light"
                    }`}
                ></div>
                <div
                    className={`w-10 h-1 transform bg-gray-light rounded-md ${
                        burgerMenuIsOpen
                            ? "opacity-0 "
                            : "opacity-100 duration-500"
                    }`}
                ></div>
                <div
                    className={`w-10 h-1 transform  rounded-md duration-500   ${
                        burgerMenuIsOpen
                            ? " -rotate-45 origin-center -translate-y-2 bg-gray-dark "
                            : " rotate-0  bg-gray-light "
                    }`}
                ></div>
            </button>

            {burgerMenuIsOpen && (
                <BurgerMenu handlerBurgerMenuIsOpen={handleBurgerMenuIsOpen} />
            )}
        </>
    );
};

export default BurgerButton;
