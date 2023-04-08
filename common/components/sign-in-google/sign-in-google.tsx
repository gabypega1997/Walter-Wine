import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { setUser } from "@/common/store/user/user.store";
import { signInWithGoogle } from "@/common/utils/firebase/authentication.function";

const SignInGoogle = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handlerSignInGoogle = async () => {
        const user = await signInWithGoogle();
        
        dispatch(setUser(user));
        router.push("/shop");
    };
    return (
        <button
            className="bg-blue-600"
            type="button"
            onClick={handlerSignInGoogle}
        >
            Sign In With Google
        </button>
    );
};

export default SignInGoogle;
