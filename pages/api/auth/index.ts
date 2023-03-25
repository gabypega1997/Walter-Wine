import { auth, db } from "@/common/utils/firebase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function SignUp(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { displayName, email, password } = req.body;

        await auth
            .createUser({ email, displayName, password })
            .then(async (userRecord) => {
                await db
                    .collection("users")
                    .doc(userRecord.uid)
                    .set({ email, displayName })
                    .then((user) => {
                        console.log("Successffuly add user to db", user);
                    })
                    .catch((error) => {
                        console.log(
                            "Error adding new user to database:",
                            error
                        );
                    });
                console.log("Successfully created new user:", userRecord.uid);
                res.status(201).json({ user: userRecord.uid });
            })
            .catch((error) => {
                console.log("Error creating new user:", error);
                res.status(500).json({ message: "User Not Added" });
            });
    }
}
