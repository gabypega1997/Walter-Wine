import SignInForm from "@/common/components/sign-in-form";
import SignUpForm from "@/common/components/sign-up-form";
import { useSelector } from "react-redux";
import SignOut from "@/common/components/sign-out";

const Index = () => {
    const user = useSelector((state: any) => state.user.user);

    return (
        <div className="flex">
            <h1>{user && user.uid}</h1>
            <SignUpForm />
            <SignInForm />
            <SignOut />
        </div>
    );
};

export default Index;
