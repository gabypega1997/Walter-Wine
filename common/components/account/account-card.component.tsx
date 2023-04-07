import { selectUser } from "@/common/store/user/user.selector";
import { useSelector } from "react-redux";

const AccountCard = () => {
    const user = useSelector(selectUser);
    return (
        <>
            {user && user.uid}
            <br />
            {user && user.email}
        </>
    );
};

export default AccountCard;
