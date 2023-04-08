import { auth, db } from "@/common/utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

const SignUpApi = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const { displayName, email, password } = req.body;

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            );

            await setDoc(doc(db, "users", userCredential.user.uid), {
                email,
                displayName,
                createDate: new Date().toISOString(),
                photoURL:"defaultProfil.jpg",
                orders:[]
            });

            console.log("Successfully created new user");
            res.status(201).json({ user: userCredential.user });
        } catch (error) {
            console.log("Error creating new user:", error);
            res.status(500).json({ message: "User Not Added" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
};

export default SignUpApi;
