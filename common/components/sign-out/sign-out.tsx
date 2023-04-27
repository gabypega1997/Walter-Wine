import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { setUser } from "@/common/store/user/user.store";
import { FC } from "react";

type SignOutProps = {
    buttonStyle: string;
};
const SignOut: FC<SignOutProps> = ({ buttonStyle }) => {
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
        <button className={buttonStyle} onClick={handlerSignOut}>
            Sign Out
        </button>
    );
};

export default SignOut;
