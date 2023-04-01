import { signOut } from "firebase/auth";
import "firebase/auth";
import { auth } from "@/common/utils/firebase";

import type { NextApiRequest, NextApiResponse } from "next";

const SignOutApi = async (req: NextApiRequest, res: NextApiResponse) => {
    await signOut(auth)
        .then(async () => {
            res.status(200).json({ message: "Log Out Successfuly" });
        })
        .catch((error) => {
            console.error("Log Out failed", error.message);
            res.status(400).json(error.message);
        });
};
export default SignOutApi;
