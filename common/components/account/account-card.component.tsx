import { selectUser } from "@/common/store/user/user.selector";
import { useSelector } from "react-redux";

const AccountCard = () => {
    const user = useSelector(selectUser);
    console.log(user);
    return (
        <>
            {user && user.uid}
            <br />
            {user && user.email}
        </>
    );
};

export default AccountCard;
