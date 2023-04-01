import { useDispatch } from "react-redux";
import { setUser } from "@/common/store/user/user.store";

const SignOut = () => {
    const dispatch = useDispatch();
    const handlerSignOut = async () => {
        const response = await fetch("/api/auth/sign-out");
        if (response.ok) {
            dispatch(setUser(null));
            console.log("Sign Out Successfuly");
        } else {
            console.log("Sign Out Failed");
        }
    };

    return (
        <button className="bg-red-600" onClick={handlerSignOut}>
            Sign Out
        </button>
    );
};

export default SignOut;
