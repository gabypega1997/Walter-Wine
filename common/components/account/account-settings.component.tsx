import { uploadProfilImage } from "@/common/utils/firebase/database.functions";
import { ChangeEvent, useState } from "react";

export const AccountSettings = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    function handleFileUpload(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            uploadProfilImage(file);
        }
    }

    return (
        <>
            <input type="file" onChange={handleFileUpload} />
        </>
    );
};
