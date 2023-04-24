import Image from "next/image";
import NavbarButton from "./navbar-button.component";

const LogoImage = () => {
    return (
        <NavbarButton link="/">
            <Image
                src="/LogoWeb.png"
                width={20}
                height={50}
                alt="Logo WalterWine"
            />
        </NavbarButton>
    );
};

export default LogoImage;
