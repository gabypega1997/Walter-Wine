import { UserType } from "@/common/types/user.types";
import {
    downloadUrlProfilImage,
    uploadProfilImage,
} from "@/common/utils/firebase/database.functions";
import { ChangeEvent, FC } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/common/utils/firebase";

// ****** dispatch
import { useDispatch } from "react-redux";
import { setUser } from "@/common/store/user/user.store";

type UploadProfilImage = {
    user: UserType;
};

export const UploadProfilImage: FC<UploadProfilImage> = ({ user }) => {
    const dispatch = useDispatch();

    async function handleFileUpload(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            await uploadProfilImage(file, user);
            const uploadProfilImageRef = doc(db, "users", user.uid);

            const uploadedProfilImageURL = await downloadUrlProfilImage(
                user,
                file
            );

            await updateDoc(uploadProfilImageRef, {
                photoURL: uploadedProfilImageURL,
            });
            await dispatch(
                setUser({ ...user, photoURL: uploadedProfilImageURL! })
            );
        }
    }

    return (
        <div className="h-40 w-24 rounded-full -mt-[170px] ">
            <label htmlFor="file-input">
                <div className="h-24 w-24 bg-white/30 rounded-full flex justify-center items-center  text-4xl hover:bg-white/20 hover:text-5xl">
                    <span>+</span>
                </div>
            </label>
            <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                id="file-input"
            />
        </div>
    );
};
