import { selectUser } from "@/common/store/user/user.selector";
import { useSelector } from "react-redux";

import OrderCard from "./order-card.component";

const MyOrders = () => {
    const { orders } = useSelector(selectUser);

    return (
        <div>
            <h1>My Orders</h1>
            {orders ? (
                orders.foreach((order, index) => (
                    <OrderCard order={order} index={index} key={index} />
                ))
            ) : (
                <div>You don&apos;t have any orders yet. </div>
            )}
        </div>
    );
};

export default MyOrders;
