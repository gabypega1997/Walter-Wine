import {  signInWithEmailAndPassword } from "firebase/auth";
import "firebase/auth";
import { auth,  firebaseAdmin } from "@/common/utils/firebase";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function SignIn(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        try {
            const authService = auth;
            // authenticate the user using Firebase Authentication
            const {email, password} = req.body;
            console.log(email, password)
            const userCredential = await signInWithEmailAndPassword(
                authService,
                email,
                password
            );
            // generate a Firebase ID token and return it in the response
            const token = await firebaseAdmin
                .auth()
                .createCustomToken(userCredential.user.uid);
            res.status(200).json({ token });
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: "Invalid credentials" });
        }
    }
}
