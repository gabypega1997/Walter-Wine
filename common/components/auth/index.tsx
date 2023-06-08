import Image from "next/image";
import Contact from "../about/contact.component";
import AuthTemplateMobile from "./auth-template-mobile.component";
import AuthTemplateDesktop from "./auth-template-desktop.component";

const Authentication = () => {
    return (
        <div className="bg-gray-dark py-16 min-h-full">
            <AuthTemplateMobile />
            <AuthTemplateDesktop />
            <Contact />
        </div>
    );
};

export default Authentication;
