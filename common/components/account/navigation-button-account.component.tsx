import { FC, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

type NavbarButtonProps = {
    children: ReactNode;
    link: string;
    imageUrl: string;
};

const NavigationButtonAccount: FC<NavbarButtonProps> = ({ children, link,imageUrl }) => {
    return (
        <Link
            href={link}
            className="h-14 bg-gray-dark w-4/5 flex justify-between px-2 items-center text-white font-medium shadow-md"
        >
            {children}
            <Image src={imageUrl} width={35} height={35} alt={`icon ${link}`}/>
        </Link>
    );
};

export default NavigationButtonAccount;
