import SignInForm from "@/common/components/sign-in-form";
import SignUpForm from "@/common/components/sign-up-form";
import { auth } from "@/common/utils/firebase";
import { useEffect, useState } from "react";

const Index = () => {
    const currUser = auth.currentUser;
    const [user, setUser] = useState(currUser);
    useEffect(() => {
        setUser(auth.currentUser);
    }, [auth.currentUser]);
    console.log(user);

    const signOutHandler = async () => {
        const response = await fetch("/api/auth/sign-out");
        if (response.ok) {
            console.log("Sign Out Successfuly");
        } else {
            console.log("Sign Out Failed");
        }
    };
    return (
        <div className="flex">
            <h1>{user && user.displayName}</h1>
            <SignUpForm />
            <SignInForm />
            <button onClick={signOutHandler}>SignOut</button>
        </div>
    );
};

export default Index;
