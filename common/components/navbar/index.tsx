import Image from "next/image";
import NavbarButton from "./navbar-button.component";
import SearchForm from "./search-form.component";

import { useSelector } from "react-redux";
import { selectUser } from "@/common/store/user/user.selector";
import SignOut from "../sign-out";

const Navbar = () => {
    const user = useSelector(selectUser);
    return (
        <div className="flex justify-between h-16 bg-green-800">
            <Image
                src="/LogoWeb.png"
                width={40}
                height={50}
                alt="Logo WalterWine"
            />
            <SearchForm />
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
            <div className="sm:hidden">Burger</div>
        </div>
    );
};

export default Navbar;
