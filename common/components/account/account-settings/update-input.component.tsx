import { UserType } from "@/common/types/user.types";
import { FC, FormEvent, useState } from "react";

type UpdateInputProps = {
    user: UserType;
    type: "email" | "name" | "password";
};

const UpdateInput: FC<UpdateInputProps> = ({ user, type }) => {
    const [inputValue, setInputValue] = useState(
        type === "name" ? user.displayName : user.email
    );

    const handlerUpdates = async () => {
        const response = await fetch("/api/auth/update-user", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },

            // ***********************
 **********************~~           body: JSON.stringify(inputValue),
 
        });
        console.log(type);
    };

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const { id, value } = e.currentTarget;
        setInputValue(value);
    };

    return (
        <div className="m-6">
            <label htmlFor={type} className="capitalize">
                {type}
            </label>
            <div className="bg-slate-300">
                <input
                    type={type === "name" ? "text" : type}
                    value={inputValue}
                    onChange={handleChange}
                />
                <button type="button" onClick={handlerUpdates}>
                    <div>Icon</div>
                </button>
            </div>
        </div>
    );
};

export default UpdateInput;
