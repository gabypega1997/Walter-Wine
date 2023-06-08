import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { DocumentData } from "firebase/firestore";

import OrderCard from "./order-card.component";
import { getOrdersFromUser } from "@/common/utils/firebase/firestore.functions";
import { selectUser } from "@/common/store/user/user.selector";
import AccountLayout from "../account-layout.component";
import PreviousPageButton from "../../previous-button/previous-page-button.component";

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
            <div className="w-5/6 mx-auto bg-gray-light shadow-2xl text-white pb-5 relative">
                <div className="pb-5">
                    <h1 className="text-center py-5 text-xl font-semibold">
                        My Orders
                    </h1>
                </div>
                <PreviousPageButton className="absolute top-3 right-3 hover:opacity-80 cursor-pointer" />

                {orders &&
                    orders.map((order, index) => (
                        <div key={index}>
                            <OrderCard
                                key={index}
                                items={order.items}
                                index={index}
                            />
                        </div>
                    ))}
            </div>
        </AccountLayout>
    );
};

export default MyOrders;
