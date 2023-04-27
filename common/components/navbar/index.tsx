import SearchForm from "./search-form.component";

import BurgerButton from "./burger-button.component";
import NavbarOptions from "./navbar-obtions.component";
import LogoImage from "./logo-image.compoent";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-5 py-2 border-b-2 bg-gray-dark border-gray-light md:px-7 lg:px-9 xl:px-20 ">
            <LogoImage />

            <SearchForm />

            {/* desktop */}
            <NavbarOptions />

            {/* mobile version */}
            <BurgerButton />
        </div>
    );
};

export default Navbar;
