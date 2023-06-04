import Navbar from "../navbar";
import Footer from "../footer";
import { FC, ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow" >{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
