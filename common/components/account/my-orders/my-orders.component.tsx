import { selectUser } from "@/common/store/user/user.selector";
import { useSelector } from "react-redux";

import OrderCard from "./order-card.component";
import { useEffect, useState } from "react";
import { getOrdersFromUser } from "@/common/utils/firebase/firestore.functions";
import { DocumentData } from "firebase/firestore";

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
        <div>
            <h1>My Orders</h1>
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
    );
};

export default MyOrders;
