import { UserType } from "@/common/types/user.types";
import { CartItem } from "@/common/types/wine.types";
import { doc, updateDoc } from "firebase/firestore";
import { db } from ".";

export const updateOrderForUser = async (user: UserType, order: CartItem[]) => {
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, { ...user.orders, order });
};