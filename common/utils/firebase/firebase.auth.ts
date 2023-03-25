import admin, {auth} from "../firebase/firebase.admin"

export const signInWithEmailAndPassword = async (email, password) => {
  await auth.signInWithEmailAndPassword(email, password);
};

export const signOut = async () => {
  await auth.signOut();
};