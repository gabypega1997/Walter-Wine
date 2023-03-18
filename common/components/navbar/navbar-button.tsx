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
                `${style ? "text-red-500" : "text-yellow-500"}`}
        >
            {children}
        </Link>
    );
};

export default NavbarButton;
