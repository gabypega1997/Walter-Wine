import Image from "next/image";
import NavbarButton from "./navbar-button.component";
import SearchForm from "./search-form.component";

const Navbar = () => {
    return (
        <div className="h-16 bg-green-800 flex justify-between">
            <Image src="/LogoWeb.png" width={40} height={50} alt="Logo WalterWine" />
            <SearchForm />

            <NavbarButton link="/">Home</NavbarButton>
            <NavbarButton link="/about">About us</NavbarButton>
            <NavbarButton link="/cart" style="shop">
                Shopping Cart
            </NavbarButton>
            <NavbarButton link="/shop" style="shop">
                Shop
            </NavbarButton>
            <NavbarButton link="/auth">Authentication</NavbarButton>
        </div>
    );
};

export default Navbar;
