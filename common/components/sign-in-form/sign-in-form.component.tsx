import { SignInData } from "@/common/types/user.types";
import { FormEvent, useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithGoogle } from "@/common/utils/firebase/authentication.function";

const InitialSignInData: SignInData = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formData, setFormData] = useState(InitialSignInData);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const { id, value } = e.currentTarget;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
        console.log(formData);
    };

    const signInWithGoogleButton = async () => {
        await signInWithGoogle();
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch("/api/auth/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            // Handle success
            setFormData(InitialSignInData);
            console.log("Sign in successful!");
        } else {
            // Handle error
            console.error("Sign in failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <br />
            <button type="submit">Sign In</button>
            <br></br>
            <button
                className="bg-blue-500"
                type="button"
                onClick={signInWithGoogleButton}
            >
                Sign In With google
            </button>
        </form>
    );
};

export default SignInForm;
