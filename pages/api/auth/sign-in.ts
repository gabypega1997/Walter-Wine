import { signInWithEmailAndPassword } from "firebase/auth";
import "firebase/auth";
import { auth } from "@/common/utils/firebase";

import type { NextApiRequest, NextApiResponse } from "next";

const SignInApi = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const { email, password } = req.body;
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                res.status(201).json({ message: "Success!", user });
            })
            .catch((error) => {
                console.error("Authentication failed", error.message);
                res.status(400).json(error.message);
            });
    }
};
export default SignInApi;
