import Image from "next/image";
import Contact from "../about/contact.component";
import AuthTemplate from "./auth-template.component";

const Authentication = () => {
    return (
        <div className="min-h-screen bg-gray-dark py-16">
            <div className="min-h-screen bg-gray-light shadow-2xl w-5/6 mx-auto">
                <Image
                    src="/images/auth/profil.png"
                    width={80}
                    height={80}
                    alt="default profil"
                    className="m-auto pt-16"
                />
                <AuthTemplate/>

                <Contact />
            </div>{" "}
        </div>
    );
};

export default Authentication;
