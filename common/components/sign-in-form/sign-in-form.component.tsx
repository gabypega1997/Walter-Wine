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
        console.log(formData)
    };

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <br />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignInForm;
