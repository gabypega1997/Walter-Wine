import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "firebase/auth";
import { auth, db, firebaseAdmin } from "@/common/utils/firebase";
import firebase from "@/common/utils/firebase/firebase.admin";
// import {firebaseAdmin} from "@/common/utils/firebase/firebase.admin";

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
            const userCredential = await signInWithEmailAndPassword(
                authService,
                email,
                password
            );
            res.status(200).json({ userCredential });

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
