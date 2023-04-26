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
    const styleContainer =
        type === "desktop"
            ? " hidden sm:flex gap-5 "
            : "flex flex-col mt-24 gap-5";
    const styleSignOutButton =
        type === "desktop"
            ? "text-sm font-bold text-yellow"
            : "bg-yellow text-2xl p-5 text-wine";
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
                    <SignOut buttonStyle={styleSignOutButton} />
                </>
            ) : (
                <NavbarButton link="/auth">Authentication</NavbarButton>
            )}
        </div>
    );
};

export default NavbarOptions;
