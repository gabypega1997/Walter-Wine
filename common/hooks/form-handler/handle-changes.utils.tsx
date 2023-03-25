import { SignInData, SignupFormData } from "@/common/types/user.types";
import { Sign } from "crypto";
import { Dispatch, FormEvent, SetStateAction } from "react";

const handleFormChanges = (
    e: FormEvent<HTMLInputElement>,
    setFormData: Dispatch<SetStateAction<SignupFormData | SignInData>>
) => {
    const { id, value } = e.currentTarget;
    setFormData((prevState) => ({
        ...prevState,
        [id]: value,
    }));
};

export default handleFormChanges;
