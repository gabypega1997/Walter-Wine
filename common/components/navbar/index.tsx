import SearchForm from "./search-form.component";

import BurgerButton from "./burger-button.component";
import NavbarOptionst from "./navbar-obtions.component";
import LogoImage from "./logo-image.compoent";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-5 bg-green-800">
            <LogoImage />
            
            <SearchForm />

            {/* desktop */}
            <NavbarOptionst />

            {/* mobile version */}
            <BurgerButton />
        </div>
    );
};

export default Navbar;
