import { selectUser } from "@/common/store/user/user.selector";
import Image from "next/image";
import { useSelector } from "react-redux";
import { ProfilImage } from "./profil-image.component";
import { UploadProfilImage } from "./upload-profil-image.component";

const AccountCard = () => {
    const user = useSelector(selectUser);
    console.log(user);


    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-2xl font-medium">My Account</h1>
            <ProfilImage user={user}/>
            {user && user.displayName}
            <br />
            {user && user.email}
        </div>
    );
};

export default AccountCard;
