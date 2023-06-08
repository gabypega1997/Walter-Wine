import Navbar from "../navbar";
import Footer from "../footer";
import { FC, ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col h-screen ">
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
