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
                className={`absolute top-0 left-0 z-10 w-1/2 h-full bg-slate-100 opacity-30`}
                onClick={handlerBurgerMenuIsOpen}
            ></div>
            <div className="absolute top-0 z-20 w-1/2 h-full bg-gray-500 left-1/2">
                <NavbarOptions type={"mobile"} />
            </div>
        </>
    );
};

export default BurgerMenu;
