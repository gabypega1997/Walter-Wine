import handleFormChanges from "@/common/hooks/form-handler";
import { SignInData } from "@/common/types/user.types";
import { FormEvent, useState } from "react";

const InitialSignInData: SignInData = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formData, setFormData] = useState(InitialSignInData);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const { id, value } = e.currentTarget;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    return (
        <form>
            <label>Email</label>
            <input />
            <label>Password</label>
            <input />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignInForm;
