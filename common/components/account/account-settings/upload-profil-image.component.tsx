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

            const uploadedProfilImageURL = await downloadUrlProfilImage(user, file);

            await updateDoc(uploadProfilImageRef, {
                photoURL: uploadedProfilImageURL,
            });
            await dispatch(
                setUser({ ...user, photoURL: uploadedProfilImageURL! })
            );
        }
    }

    return (
        <>
            <input type="file" onChange={handleFileUpload} />
        </>
    );
};
