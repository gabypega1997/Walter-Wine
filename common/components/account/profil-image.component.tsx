import { UserType } from "@/common/types/user.types";
import Image from "next/image";
import { FC } from "react";

type ProfilImage = {
    user: UserType;
};
export const ProfilImage: FC<ProfilImage> = ({ user }) => {
    return (
        <div>
            <Image
                className="w-[100px] h-[100px]  rounded-full border-2 p-1.5 m-auto"
                width={200}
                height={100}
                alt={"Profil Image"}
                // src={user && user.photoURL}
                src="/images/defaultProfil.jpg"
            ></Image>

            {/* this -mt-4 is for a gap-5 from flex
             */}
            <h3 className="text-yellow italic text-lg text-center m-3">
                {user && user.displayName}
            </h3>
        </div>
    );
};
