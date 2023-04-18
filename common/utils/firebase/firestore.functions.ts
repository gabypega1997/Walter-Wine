import { UserType } from "@/common/types/user.types";
import { CartItem } from "@/common/types/wine.types";
import {
    arrayUnion,
    collection,
    doc,
    getDoc,
    getDocs,
    updateDoc,
} from "firebase/firestore";
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

export const getOrdersFromUser = async (user: UserType) => {
    const ordersRef = collection(db, "users", user.uid, "orders");
    console.log(ordersRef.path); // Log the ordersRef variable
    try {
        const querySnapshot = await getDocs(ordersRef);
        const orders = querySnapshot.docs.map((doc) => doc.data());

        console.log(orders);
        return orders;
    } catch (error) {
        console.error(error);
    }
};
