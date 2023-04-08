import { selectUser } from "@/common/store/user/user.selector";
import { downloadUrlProfilImage } from "@/common/utils/firebase/database.functions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UploadProfilImage } from "./upload-profil-image.component";

const AccountCard = () => {
    const user = useSelector(selectUser);
    const [photoProfilUrl, setPhotoProfilUrl] = useState(user.photoURL);

    console.log(user);
    useEffect(() => {
        const photoUrl =  downloadUrlProfilImage(user);

        setPhotoProfilUrl(photoUrl);
    }, [user]);

    return (
        <>
            {user && user.uid}{" "}
            <Image
                className="w-[100px] h-[100px]  rounded-full"
                width={200}
                height={100}
                alt={"Profil Image"}
                src={`https://firebasestorage.googleapis.com/v0/b/walter-wine.appspot.com/o/images%2FvkXWKc1wAbSGvh0mESBbpXL5mb32%2FdefaultProfil.jpg?alt=media&token=0ac90575-3a0b-47cc-88bf-93fe01c43dc3`}
            ></Image>
            <UploadProfilImage user={user} />
            {user && user.displayName}
            <br />
            {user && user.email}
        </>
    );
};

export default AccountCard;
