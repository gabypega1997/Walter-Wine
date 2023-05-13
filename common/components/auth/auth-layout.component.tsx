import Image from "next/image";
import Contact from "../about/contact.component";

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-gray-light shadow-2xl w-5/6 mx-auto">
            {/*  title and image  auth-header  */}
            <div className="">
                <Image
                    src="/images/auth/profil.png"
                    width={80}
                    height={80}
                    alt="default profil"
                    className="m-auto pt-16"
                />
                <h2></h2>
            </div>
            {/* form auth */}
            <div></div>

            {/* contact */}
            <Contact />
        </div>
    );
};

export default AuthLayout;
