import { signOut } from "firebase/auth";
import "firebase/auth";
import { auth } from "@/common/utils/firebase";

import type { NextApiRequest, NextApiResponse } from "next";

const SignOutApi = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await signOut(auth);
        res.status(200).json({ message: "Log Out Successfully" });
    } catch (error) {
        console.error("Log Out failed", (error as {message:string}).message);
        res.status(400).json((error as {message:string}).message);
    }
};
export default SignOutApi;
