import { UserType } from "@/common/types/user.types";
import { uploadProfilImage } from "@/common/utils/firebase/database.functions";
import { ChangeEvent, FC, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/common/utils/firebase";

type UploadProfilImage = {
    user: UserType;
};

export const UploadProfilImage: FC<UploadProfilImage> = ({ user }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    async function handleFileUpload(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            uploadProfilImage(file, user);
            const uploadProfilImageRef = doc(db, "users", user.uid);

            await updateDoc(uploadProfilImageRef, {
                photoURL: file.name,
            });
        }
    }

    return (
        <>
            <input type="file" onChange={handleFileUpload} />
        </>
    );
};
