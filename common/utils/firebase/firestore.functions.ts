import { UserType } from "@/common/types/user.types";
import { CartItem } from "@/common/types/wine.types";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from ".";

export const updateOrderForUser = async (user: UserType, order: CartItem[]) => {
    const userRef = doc(db, "users", user.uid);
    console.table(user);
    try {
        await updateDoc(userRef, {
            orders: arrayUnion({
                items: order,
                createdAt: new Date().toISOString(),
            }),
        });
        console.log("Order uploaded successfully.");
    } catch (error) {
        console.error(error);
    }
};
