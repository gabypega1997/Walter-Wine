import { FC, FormEvent, ReactElement, useState } from "react";
import { useDispatch } from "react-redux";

import { UserType } from "@/common/types/user.types";
import { setUser } from "@/common/store/user/user.store";
import Input from "../../input/input.component";
import Image from "next/image";

type UpdateInputProps = {
    user: UserType;
    type: "email" | "name" | "password";
};

const UpdateInput: FC<UpdateInputProps> = ({ user, type }) => {
    const [inputValue, setInputValue] = useState(
        type === "name" ? user.displayName : user.email
    );

    const dispatch = useDispatch();

    const handlerUpdates = async () => {
        const response = await fetch("/api/auth/update-user", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(
                type === "name"
                    ? { user, displayName: inputValue }
                    : { user, email: inputValue }
            ),
        });

        if (response.ok) {
            const updatedUser = await response.json().then((data) => data.user);

            dispatch(setUser(updatedUser));
            console.log("Updated");
        } else {
            console.log("Update Failed");
        }
    };

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setInputValue(value);
    };

    return (
        <div className=" text-start px-3">
            <label htmlFor={type} className="capitalize text-lg ml-2">
                {type}
            </label>
            
            <div className="-mt-4 flex items-center">
                <Input
                    type={type === "name" ? "text" : type}
                    value={inputValue}
                    onChange={handleChange}
                />
                <Image
                    src="/images/account/settings.png"
                    width={20}
                    height={20}
                    alt="settings"
                    className="h-10 w-10 hover:rotate-90 hover:drop-shadow-2xl mx-2"
                    onClick={handlerUpdates}
                />
            </div>
        </div>
    );
};

export default UpdateInput;
