import { FirebaseError, ServiceAccount } from "firebase-admin";
import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(<ServiceAccount>serviceAccount),
        });
    } catch (error) {
        console.log(
            "Firebase admin initialization error",
            (error as FirebaseError).stack
        );
    }
}
export default admin.firestore();
