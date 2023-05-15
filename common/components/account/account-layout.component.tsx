import { FC, ReactNode } from "react";

interface AccountLayoutProps {
    children: ReactNode;
}

const AccountLayout: FC<AccountLayoutProps> = ({ children }) => {
    return <div className="bg-gray-dark py-16 min-h-screen">{children}</div>;
};

export default AccountLayout;
