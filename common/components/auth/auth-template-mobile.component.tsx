import { useState } from "react";
import SignUpForm from "../sign-up-form";
import SignInForm from "../sign-in-form";
import Image from "next/image";

const AuthTemplateMobile = () => {
    const [signUpOrSignIn, setSignUpOrSignIn] = useState<"signIn" | "signUp">(
        "signIn"
    );

    return (
        <div className="bg-gray-light shadow-2xl w-5/6 mx-auto md:hidden">
            <Image
                src="/images/auth/profil.png"
                width={80}
                height={80}
                alt="default profil"
                className="m-auto pt-16"
            />
            <div className="transition ">
                {signUpOrSignIn === "signIn" ? (
                    <div className="text-center my-10 text-white">
                        <h2 className="text-xl font-semibold">
                            I alredy have an account{" "}
                        </h2>
                        <p className="opacity-70 italic">
                            <span className="text-brown">Sign in</span> with
                            your email and<br></br> password
                        </p>
                        <SignInForm />
                        <div
                            className="text-xl font-semibold text-yellow pb-10"
                            onClick={() => setSignUpOrSignIn("signUp")}
                        >
                            Don&apos;t have an acoount ?
                        </div>
                    </div>
                ) : (
                    <div className="text-center my-10 text-white">
                        <h2 className="text-xl font-semibold">
                            Don&apos;t have an acoount ?{" "}
                        </h2>
                        <p className="opacity-70 italic">
                            <span className="text-yellow">Sign up</span> with
                            your email <br />
                            and password
                        </p>
                        <SignUpForm />
                        <div
                            className="text-xl font-semibold text-yellow pb-10"
                            onClick={() => setSignUpOrSignIn("signIn")}
                        >
                            You alredy have an account ?
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthTemplateMobile;
