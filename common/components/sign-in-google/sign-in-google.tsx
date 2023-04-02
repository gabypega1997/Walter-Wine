import { useDispatch } from "react-redux";
import { setUser } from "@/common/store/user/user.store";

const SignInGoogle = () => {
    const dispatch = useDispatch();
    const handlerSignInGoogle = async () => {
        const response = await fetch("/api/auth/sign-in-google");
        if (response.ok) {
            const { user } = await response.json();


            console.log(user);
            // dispatch(setUser(user));



            
            console.log("Sign In Witn Google Successfuly");
        } else {
            console.log("Sign In With Google Failed");
        }
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
