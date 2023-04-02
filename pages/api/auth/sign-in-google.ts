import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, provider } from "@/common/utils/firebase";

import type { NextApiRequest, NextApiResponse } from "next";

const SignInWithGoogleApi = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    res.status(200).json({user:"user"})
    //     try {
    //         const result = await signInWithPopup(auth, provider);
    //         const credential = GoogleAuthProvider.credentialFromResult(result);
    //         const token = credential?.accessToken;
    //         console.log(token);
    //         const user = result.user;

    //         const userRef = doc(db, "users", user.uid);
    //         const userSnap = await getDoc(userRef);
    //         if (!userSnap.exists()) {
    //             await setDoc(doc(db, "users", user.uid), {
    //                 email: user.email,
    //                 displayName: user.displayName,
    //                 createDate: new Date().toISOString(),
    //             });
    //             console.log("Successfully user add to Db");
    //         }

    //         console.log("Successfully sign in with google ");
    //         res.status(200).json({ user, message: "success" });
    //     } catch (error) {
    //         console.error("Error sign in with google:", error);
    //         res.status(400).json({ message: "Error sign in with google" });
    //     }
    }

export default SignInWithGoogleApi;
