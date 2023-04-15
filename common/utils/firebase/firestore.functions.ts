import { UserType } from "@/common/types/user.types";
import { CartItem } from "@/common/types/wine.types";
import { doc, updateDoc } from "firebase/firestore";
import { db } from ".";

export const updateOrderForUser = async (user: UserType, order: CartItem[]) => {
    const userRef = doc(db, "users", user.uid);
    try {
        await updateDoc(userRef, { ...user, orders: {...user.orders, order} });
        console.log("Order uploaded successfully.");
    } catch (error) {
        console.error(error);
    }
};
