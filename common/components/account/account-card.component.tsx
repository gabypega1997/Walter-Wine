import { selectUser } from "@/common/store/user/user.selector";
import Image from "next/image";
import { useSelector } from "react-redux";
import { UploadProfilImage } from "./upload-profil-image.component";

const AccountCard = () => {
    const user = useSelector(selectUser);
    console.log(user);


    return (
        <>
            {user && user.uid}{" "}
            <br/>
            <Image
                className="w-[100px] h-[100px]  rounded-full"
                width={200}
                height={100}
                alt={"Profil Image"}
                src={user && user.photoURL}
            ></Image>
            <UploadProfilImage user={user} />
            {user && user.displayName}
            <br />
            {user && user.email}
        </>
    );
};

export default AccountCard;
