import { useSelector } from "react-redux";
import { selectUser } from "@/common/store/user/user.selector";

import SignOut from "../sign-out";
import NavbarButton from "./navbar-button.component";
import { FC } from "react";

type NabarOptionsProps = {
    type: string;
};

const NavbarOptions: FC<NabarOptionsProps> = ({ type }) => {
    const user = useSelector(selectUser);
    const styleContainer = type === "desktop" ? " hidden sm:flex " : " ";
    return (
        <div className={styleContainer}>
            <NavbarButton link="/">Home</NavbarButton>
            <NavbarButton link="/about">About us</NavbarButton>
            <NavbarButton link="/cart" style="shop">
                Shopping Cart
            </NavbarButton>
            <NavbarButton link="/shop" style="shop">
                Shop
            </NavbarButton>

            {user ? (
                <>
                    <NavbarButton link="/account">My Account</NavbarButton>
                    <SignOut />
                </>
            ) : (
                <NavbarButton link="/auth">Authentication</NavbarButton>
            )}
        </div>
    );
};

export default NavbarOptions;
