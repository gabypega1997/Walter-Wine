import { useState, FormEvent } from "react";
type SignupFormData = {
    displayName: string;
    email: string;
    password: string;
};

const InitilaSingnUpData: SignupFormData = {
    displayName: "",
    email: "",
    password: "",
};
const Index = () => {
    const [formData, setFormData] =
        useState<SignupFormData>(InitilaSingnUpData);
    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const { id, value } = e.currentTarget;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
        console.log(formData);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Send form data to API here

        const response = await fetch("/api/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            // Handle success
            setFormData(InitilaSingnUpData);
            console.log("Sign up successful!");
        } else {
            // Handle error
            console.error("Sign up failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="displayName">Name:</label>
            <input
                type="text"
                id="displayName"
                value={formData.displayName}
                onChange={handleChange}
                required
            />
            <br />
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
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Index;
