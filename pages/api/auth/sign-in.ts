import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/common/utils/firebase";

import type { NextApiRequest, NextApiResponse } from "next";
import { doc, getDoc } from "firebase/firestore";

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
        const uid = userCredential.user.uid;

        const createdUser = await (await getDoc(doc(db, "users", uid))).data();

        res.status(201).json({
            message: "Success!",
            user: { ...createdUser, uid },
        });
    } catch (error) {
        console.error(
            "Authentication failed",
            (error as { message: string }).message
        );
        res.status(400).json({ error: "Authentication failed" });
    }
};

export default signInHandler;
