import SignInForm from "@/common/components/sign-in-form";
import SignUpForm from "@/common/components/sign-up-form";

const Index = () => {

    return (
        <div className="flex">
            <SignUpForm />
            <SignInForm />
        </div>
    );
};

export default Index;
