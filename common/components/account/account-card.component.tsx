import { selectUser } from "@/common/store/user/user.selector";
import { downloadUrlProfilImage } from "@/common/utils/firebase/database.functions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UploadProfilImage } from "./upload-profil-image.component";

const AccountCard = () => {
    const user = useSelector(selectUser);
    const [photoProfilUrl, setPhotoProfilUrl] = useState("/defaultProfil.jpg");

    console.log(user);
    useEffect(() => {
        async function takePhotoUrl() {
            const photoUrl = await downloadUrlProfilImage(user);
            setPhotoProfilUrl(photoUrl!);
        }
        takePhotoUrl()
    }, [user]);

    return (
        <>
            {user && user.uid}
            <Image
                className="w-[100px] h-[100px]  rounded-full"
                width={200}
                height={100}
                alt={"Profil Image"}
                src={photoProfilUrl}
            ></Image>
            <UploadProfilImage user={user} />
            {user && user.displayName}
            <br />
            {user && user.email}
        </>
    );
};

export default AccountCard;
