import { FC } from "react";
import NavbarOptions from "./navbar-obtions.component";

type BurgerMenuProps = {
    handlerBurgerMenuIsOpen: () => void;
};

const BurgerMenu: FC<BurgerMenuProps> = ({ handlerBurgerMenuIsOpen }) => {
    return (
        <>
            {" "}
            <div
                className={`fixed top-0 left-0 z-10 w-1/2 h-screen bg-slate-100 opacity-30`}
                onClick={handlerBurgerMenuIsOpen}
            ></div>
            <div
                className="fixed top-0 z-20 w-1/2 h-screen bg-gray-light left-1/2"
                onClick={handlerBurgerMenuIsOpen}
            >
                <div className="fixed  -z-10 w-full h-screen top-0  bg-[url('/images/grapeSeeds.png')] opacity-50"></div>
                <NavbarOptions isBurgerMenu />
            </div>
        </>
    );
};

export default BurgerMenu;
