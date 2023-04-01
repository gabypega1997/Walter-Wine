import { auth, db } from "@/common/utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

import { useDispatch } from "react-redux";
import { setUser } from "@/common/store/user/user.store";

const SignUp = async (req: NextApiRequest, res: NextApiResponse) => {
    const dispatch = useDispatch();

    if (req.method === "POST") {
        const { displayName, email, password } = req.body;

        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userRecord) => {
                await setDoc(doc(db, "users", userRecord.user.uid), {
                    email,
                    displayName,
                    createDate: new Date().toISOString(),
                })
                    .then((user) => {
                        console.log("Successffuly add user to db", user);
                    })
                    .catch((error) => {
                        console.log(
                            "Error adding new user to database:",
                            error
                        );
                    });
                dispatch(setUser(userRecord.user));
                console.log("Successfully created new user");
                res.status(201).json({ user: userRecord.user });
            })
            .catch((error) => {
                console.log("Error creating new user:", error);
                res.status(500).json({ message: "User Not Added" });
            });
    }
};
export default SignUp;
