import admin from "./firebase.admin";
import { app } from "./firebase.sdk";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


export const auth = getAuth(app);
export const db = getFirestore(app);
export const firebaseAdmin = admin;
