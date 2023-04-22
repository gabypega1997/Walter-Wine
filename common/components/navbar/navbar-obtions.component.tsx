import { useSelector } from "react-redux";
import { selectUser } from "@/common/store/user/user.selector";

import SignOut from "../sign-out";
import NavbarButton from "./navbar-button.component";

const NavbarOptionst = () => {
    const user = useSelector(selectUser);

    return (
        <div className="hidden sm:flex">
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

export default NavbarOptionst;
