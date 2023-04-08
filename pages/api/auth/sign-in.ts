import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/common/utils/firebase";

import type { NextApiRequest, NextApiResponse } from "next";

interface SignInRequest {
    email: string;
    password: string;
}

const signInHandler = async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> => {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    try {
        const { email, password } = req.body as SignInRequest;

        if (!email || !password) {
            res.status(400).json({ error: "Email and password are required" });
            return;
        }

        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
        };

        res.status(201).json({ message: "Success!", user });
    } catch (error) {
        console.error("Authentication failed", (error as {message:string}).message);
        res.status(400).json({ error: "Authentication failed" });
    }
};

export default signInHandler;
