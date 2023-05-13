import { useState } from "react";
import SignUpForm from "../sign-up-form";
import SignInForm from "../sign-in-form";

const AuthTemplate = () => {
    const [signUpOrSignIn, setSignUpOrSignIn] = useState<"signIn" | "signUp">(
        "signIn"
    );

    return (
        <div className="">
            {signUpOrSignIn === "signIn" ? (
                <div className="text-center my-10 text-white">
                    <h2 className="text-xl font-semibold">
                        I alredy have an account{" "}
                    </h2>
                    <p className="opacity-70 italic">
                        <span className="text-brown">Sign in</span> with your
                        email and<br></br> password
                    </p>
                    <SignInForm />
                    <div
                        className="text-xl font-semibold text-yellow"
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
                        <span className="text-yellow">Sign up</span> with your
                        email <br />
                        and password
                    </p>
                    <SignUpForm />
                    <div
                        className="text-xl font-semibold text-yellow"
                        onClick={() => setSignUpOrSignIn("signIn")}
                    >
                        You alredy have an account ?
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthTemplate;
