import { MouseEvent, useState } from "react";
import NavbarOptions from "./navbar-obtions.component";
import BurgerMenu from "./burger-menu.component";

const BurgerButton = () => {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

    const handleBurgerMenuIsOpen = () => {
        setBurgerMenuIsOpen((state) => !state);
    };
    console.log(burgerMenuIsOpen);
    return (
        <div className="">
            <button
                className={`flex flex-col gap-1 sm:hidden relative z-50 `}
                onClick={handleBurgerMenuIsOpen}
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
                        burgerMenuIsOpen
                            ? "opacity-0 "
                            : "opacity-100 duration-500"
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
                <BurgerMenu handlerBurgerMenuIsOpen={handleBurgerMenuIsOpen} />
            )}
        </div>
    );
};

export default BurgerButton;
