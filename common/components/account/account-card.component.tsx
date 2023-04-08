import { selectUser } from "@/common/store/user/user.selector";
import Image from "next/image";
import { useSelector } from "react-redux";

const AccountCard = () => {
    const user = useSelector(selectUser);
    console.log(user);
    
    return (
        <>
            {user && user.uid}{" "}
            <Image
                src="/user.photoURL"
                className="w-[100px] h-[100px] bg-slate-500 rounded-full"
                width={200}
                height={100}
                alt={"Profil Image"}
            ></Image>
            {user && user.displayName}
            <br />
            {user && user.email}
        </>
    );
};

export default AccountCard;
