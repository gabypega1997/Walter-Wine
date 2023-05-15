import { useSelector } from "react-redux";
import { selectUser } from "@/common/store/user/user.selector";

import SignOut from "../sign-out";
import NavbarButton from "./navbar-button.component";
import { FC } from "react";

type NabarOptionsProps = {
    isBurgerMenu?: boolean;
};

const NavbarOptions: FC<NabarOptionsProps> = ({ isBurgerMenu }) => {
    const user = useSelector(selectUser);
    const styleContainer = isBurgerMenu
        ? "flex flex-col mt-24 gap-5"
        : " hidden sm:flex gap-5  lg:gap-7 lg:scale-110";

    const styleSignOutButton = isBurgerMenu
        ? "bg-yellow text-2xl p-5 text-wine"
        : "text-sm font-bold text-yellow";
    return (
        <div className={styleContainer}>
            <NavbarButton link="/">Home</NavbarButton>
            <NavbarButton link="/about">About us</NavbarButton>
            <NavbarButton link="/cart" isShopButton>
                Shopping Cart
            </NavbarButton>
            <NavbarButton link="/shop" isShopButton>
                Shop
            </NavbarButton>

            {user ? (
                <>
                    <NavbarButton link="/account">My Account</NavbarButton>
                    <SignOut className={styleSignOutButton} />
                </>
            ) : (
                <NavbarButton link="/auth">Authentication</NavbarButton>
            )}
        </div>
    );
};

export default NavbarOptions;
