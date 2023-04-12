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
            className="h-14 bg-slate-400 w-48 flex justify-between px-2 items-center text-white font-medium"
        >
            {children}
            <Image src={imageUrl} width={50} height={50} alt={`icon ${link}`}/>
        </Link>
    );
};

export default NavigationButtonAccount;
