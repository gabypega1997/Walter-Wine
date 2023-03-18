import NavbarButton from "./navbar-button";

const Navbar = () => {
    return (
        <>
            <NavbarButton link="/">Home</NavbarButton>
            <NavbarButton link="/about">About us</NavbarButton>
            <NavbarButton link="/cart" style="shop">
                Shopping Cart
            </NavbarButton>
            <NavbarButton link="/shop" style="shop">
                Shop
            </NavbarButton>
            <NavbarButton link="/auth">Authentication</NavbarButton>
        </>
    );
};

export default Navbar;
