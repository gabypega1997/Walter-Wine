import { UserType } from "@/common/types/user.types";
import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./index";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;

        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (!userSnap.exists()) {
            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                displayName: user.displayName,
                createDate: new Date().toISOString(),
                photoURL: "/defaultProfil.jpg",
                orders: null,
                uid: user.uid,
            });
            console.log("Successfully user add to Db");
            const createdUser = (await (
                await getDoc(doc(db, "users", user.uid))
            ).data()) as UserType;
            return createdUser;
        }

        console.log("Successfully sign in with google ");
        return userSnap.data() as UserType;
    } catch (error) {
        console.error("Error sign in with google:", error);
        return null;
    }
};

export const takeUserDocumentFromAuth = async (uid: string) => {
    const userDocRef = await doc(db, "users", uid);

    const userSnapshot = await getDoc(userDocRef);

    const userData = userSnapshot.data();

    return userData;
};
