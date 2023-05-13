import { SignInData } from "@/common/types/user.types";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { setUser } from "@/common/store/user/user.store";
import SignInGoogle from "../sign-in-google";

import Input from "../input/input.component";
import Button from "../button/button.component";

const InitialSignInData: SignInData = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formData, setFormData] = useState(InitialSignInData);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const { id, value } = e.currentTarget;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
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
            const { user } = await response.json();
            dispatch(setUser(user));
            setFormData(InitialSignInData);
            console.log("Sign in successful!");
            router.push("/shop");
        } else {
            // Handle error
            console.error("Sign in failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <br />
            <Input
                autoComplete="currentPassword"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
            />
            <br />
            <div className="flex justify-center gap-1 pt-5 pb-8">
                <Button type="submit" shape="sign-in" isPoligon>
                    Sign In
                </Button>
                <SignInGoogle />
            </div>
        </form>
    );
};

export default SignInForm;
