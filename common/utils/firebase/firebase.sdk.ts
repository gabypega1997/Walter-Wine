// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgR6rI3IdalTnm9XP-CHtyVIddvt7NYHQ",
    authDomain: "walter-wine.firebaseapp.com",
    databaseURL: "https://walter-wine-default-rtdb.firebaseio.com",
    projectId: "walter-wine",
    storageBucket: "walter-wine.appspot.com",
    messagingSenderId: "805898556011",
    appId: "1:805898556011:web:e08d8670bef0cd2821172e",
    measurementId: "G-6FH4CS15X9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

