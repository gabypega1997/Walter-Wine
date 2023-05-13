import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { setUser } from "@/common/store/user/user.store";
import { signInWithGoogle } from "@/common/utils/firebase/authentication.function";
import Button from "../button/button.component";

const SignInGoogle = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handlerSignInGoogle = async () => {
        const user = await signInWithGoogle();

        dispatch(setUser(user));
        router.push("/shop");
    };
    return (
        <Button
            type="button"
            onClick={handlerSignInGoogle}
            shape="google"
            isPoligon
        >
            <p className="-mb-1.5">Google</p>
            <p> Sign In</p>
        </Button>
    );
};

export default SignInGoogle;
