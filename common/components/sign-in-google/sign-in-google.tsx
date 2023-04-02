import { useDispatch } from "react-redux";
import { setUser } from "@/common/store/user/user.store";
import { signInWithGoogle } from "@/common/utils/firebase/authentication.function";

const SignInGoogle = () => {
    const dispatch = useDispatch();
    const handlerSignInGoogle = async () => {
        const userString = await signInWithGoogle();
        const user = JSON.parse(userString!);
        dispatch(setUser(user));
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
