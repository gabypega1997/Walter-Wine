import { FC, ReactNode } from "react";
import Link from "next/link";

type NavbarButtonProps = {
    children: ReactNode;
    link: string;
    style?: string;
};

const NavbarButton: FC<NavbarButtonProps> = ({ children, link, style }) => {
    return (
        <Link
            href={link}
            className={
                ` text-2xl text-center py-5 ${style ? " bg-brown " : " bg-yellow "}`}
        >
            {children}
        </Link>
    );
};

export default NavbarButton;
