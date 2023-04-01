import SignInForm from "@/common/components/sign-in-form";
import SignUpForm from "@/common/components/sign-up-form";
import { useSelector } from "react-redux";
import { auth } from "@/common/utils/firebase";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { setUser } from "@/common/store/user/user.store";

const Index = () => {
    const user = useSelector((state: any) => state.user.user);

    const dispatch = useDispatch();
    const signOutHandler = async () => {
        const response = await fetch("/api/auth/sign-out");
        if (response.ok) {
            dispatch(setUser(null));
            console.log("Sign Out Successfuly");
        } else {
            console.log("Sign Out Failed");
        }
    };
    return (
        <div className="flex">
            <h1>{user && user.uid}</h1>
            <SignUpForm />
            <SignInForm />
            <button onClick={signOutHandler}>SignOut</button>
        </div>
    );
};

export default Index;
