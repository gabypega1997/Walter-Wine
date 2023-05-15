import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { setUser } from "@/common/store/user/user.store";
import { ButtonHTMLAttributes, FC } from "react";

interface SignOutProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonStyle?: string;
}
const SignOut: FC<SignOutProps> = ({ buttonStyle, ...otherProps }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handlerSignOut = async () => {
        const response = await fetch("/api/auth/sign-out");
        if (response.ok) {
            router.push("/auth");
            dispatch(setUser(null));
            console.log("Sign Out Successfuly");
        } else {
            console.log("Sign Out Failed");
        }
    };

    return (
        <button onClick={handlerSignOut} {...otherProps}>
            Sign Out
        </button>
    );
};

export default SignOut;
