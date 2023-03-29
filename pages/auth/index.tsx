import SignInForm from "@/common/components/sign-in-form";
import SignUpForm from "@/common/components/sign-up-form";
import { auth } from "@/common/utils/firebase";
import { useEffect } from "react";

const Index = () => {
    const user = auth.currentUser;
    console.log(user);
    return (
        <div className="flex">
            <SignUpForm />
            <SignInForm />
        </div>
    );
};

export default Index;
