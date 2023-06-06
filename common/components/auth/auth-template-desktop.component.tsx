import Image from "next/image";
import SignInForm from "../sign-in-form";
import SignUpForm from "../sign-up-form";

const AuthTemplateDesktop = () => {
    return (
        <div className="hidden md:flex bg-gray-light shadow-2xl w-5/6 mx-auto justify-evenly">
            {/* sign In */}
            <div className="border-r-2 w-1/2 border-zinc-400 lg:px-12 xl:px-32 2xl:px-40">
                <Image
                    src="/images/auth/profil.png"
                    width={80}
                    height={80}
                    alt="default profil"
                    className="m-auto pt-16"
                />
                <div className="text-center my-10 text-white">
                    <h2 className="text-xl font-semibold">
                        I alredy have an account{" "}
                    </h2>
                    <p className="opacity-70 italic">
                        <span className="text-brown">Sign in</span> with your
                        email and<br></br> password
                    </p>
                    <SignInForm />
                </div>
            </div>
            {/* sign up */}
            <div className="w-1/2 lg:px-12 xl:px-32 2xl:px-40">
                <Image
                    src="/images/auth/profil.png"
                    width={80}
                    height={80}
                    alt="default profil"
                    className="m-auto pt-16"
                />
                <div className="text-center my-10 text-white">
                    <h2 className="text-xl font-semibold">
                        Don&apos;t have an acoount ?{" "}
                    </h2>
                    <p className="opacity-70 italic">
                        <span className="text-yellow">Sign up</span> with your
                        email <br />
                        and password
                    </p>
                    <SignUpForm />
                </div>
            </div>
        </div>
    );
};

export default AuthTemplateDesktop;
