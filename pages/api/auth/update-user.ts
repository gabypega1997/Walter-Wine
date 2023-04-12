import { auth, db } from "@/common/utils/firebase";
import { UserType } from "@/common/types/user.types";
import type { NextApiRequest, NextApiResponse } from "next";
import { doc, updateDoc } from "firebase/firestore";
import { updateProfile, updateEmail, updatePassword } from "firebase/auth";

type UpdateUserRequest = {
    user: UserType;
    displayName: string;
    email: string;
    password: string;
};

const updateUserHandler = async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> => {
    if (req.method !== "PUT") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    try {
        const { user, displayName, email, password } =
            req.body as UpdateUserRequest;

        if (!user) {
            res.status(400).json({ error: "User not provided" });
            return;
        }

        // Update user profile in Firebase Authentication
        const authUser = auth.currentUser;
        if (authUser) {
            if (displayName) {
                await updateProfile(authUser, { displayName });
            }
            if (email) {
                await updateEmail(authUser, email);
            }
            if (password) {
                await updatePassword(authUser, password);
            }
        }

        // Update user data in Firebase Realtime Database
        const userRef = doc(db, "users", user.uid);
        const updateData = {
            displayName: displayName || user.displayName,
            email: email || user.email,
        };
        await updateDoc(userRef, updateData);

        res.status(200).json({
            message: "Success!",
            user: { ...user, ...updateData },
        });
    } catch (error) {
        console.error("Failed to update user:", error);
        res.status(400).json({ error: "Failed to update user" });
    }
};

export default updateUserHandler;
