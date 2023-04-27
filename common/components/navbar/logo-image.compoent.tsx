import Image from "next/image";
import Link from "next/link";

const LogoImage = () => {
    return (
        <Link href="/">
            <Image
                src="/LogoWeb.png"
                width={20}
                height={50}
                alt="Logo WalterWine"
                className="sm:scale-110 md:scale-125 lg:scale-150"
            />
        </Link>
    );
};

export default LogoImage;
