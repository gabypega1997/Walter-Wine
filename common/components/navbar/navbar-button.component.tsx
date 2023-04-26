import { FC, ReactNode } from "react";
import Link from "next/link";

type NavbarButtonProps = {
    children: ReactNode;
    link: string;
    isShopButton?: boolean;
};

const NavbarButton: FC<NavbarButtonProps> = ({
    children,
    link,
    isShopButton,
}) => {
    return (
        <Link
            href={link}
            className={` text-2xl text-center py-5 ${
                isShopButton
                    ? " bg-brown sm:bg-gray-dark sm:text-brown  "
                    : " bg-yellow sm:text-yellow sm:bg-gray-dark "
            } sm:text-sm sm:font-bold`}
        >
            {children}
        </Link>
    );
};

export default NavbarButton;
