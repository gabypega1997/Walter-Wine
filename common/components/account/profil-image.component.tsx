import { UserType } from "@/common/types/user.types";
import Image from "next/image";
import { FC } from "react";


type ProfilImage = {
    user: UserType;
};
export const ProfilImage: FC<ProfilImage> = ({ user }) => {
    return (
        <>
            <Image
                className="w-[100px] h-[100px]  rounded-full"
                width={200}
                height={100}
                alt={"Profil Image"}
                src={user && user.photoURL}
            ></Image>
            <h3>{user && user.displayName}</h3>
        </>
    );
};
