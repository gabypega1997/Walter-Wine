import { selectUser } from "@/common/store/user/user.selector";
import { useSelector } from "react-redux";

import OrderCard from "./order-card.component";
import { useEffect, useState } from "react";
import { getOrdersFromUser } from "@/common/utils/firebase/firestore.functions";
import { DocumentData } from "firebase/firestore";
import AccountLayout from "../account-layout.component";

const MyOrders = () => {
    const [orders, setOrders] = useState<DocumentData[] | undefined>(undefined);
    const user = useSelector(selectUser);
    useEffect(() => {
        const fetchOrders = async () => {
            const userOrders = await getOrdersFromUser(user);
            setOrders(userOrders);
        };
        fetchOrders();
    }, [user]);

    return (
        <AccountLayout>
            <div className="w-5/6 mx-auto bg-gray-light shadow-2xl text-white">
                <h1 className="text-center py-5 text-xl font-semibold">My Orders</h1>
                {orders &&
                    orders.map((order, index) => (
                        <div key={index}>
                            <OrderCard
                                key={index}
                                items={order.items}
                                index={index}
                            />
                            <p>Created at: {order.createdAt}</p>
                        </div>
                    ))}
            </div>
        </AccountLayout>
    );
};

export default MyOrders;
