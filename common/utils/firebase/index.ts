import admin from "./firebase.admin";
import "firebase/auth";

export const auth = admin.auth();
export const db = admin.firestore();
export const firebaseAdmin = admin;
