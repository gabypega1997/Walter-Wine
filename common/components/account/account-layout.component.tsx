import { FC, ReactNode } from "react";

interface AccountLayoutProps {
    children: ReactNode;
}

const AccountLayout: FC<AccountLayoutProps> = ({ children }) => {
    return <div className="bg-gray-dark py-16 min-h-full mx-auto  md:px-20 lg:px-32 xl:px-44">{children}</div>;
};

export default AccountLayout;
