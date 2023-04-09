import { storage } from "./index";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UserType } from "@/common/types/user.types";


export async function uploadProfilImage(
    file: File,
    user: UserType
): Promise<void> {
    try {
        const storageRef = ref(storage, `images/${user.uid}/${file.name}`);
        await uploadBytes(storageRef, file);
        console.log("Image uploaded successfully.");
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}

export async function downloadUrlProfilImage(user: UserType, file: File) {
    try {
        const storageRef = ref(storage, `images/${user.uid}/${file.name}`);
        const profilImageUrl = await getDownloadURL(storageRef).then(
            (url) => url
        );
        console.log(profilImageUrl);
        return profilImageUrl;
    } catch (error) {
        console.error((error as { message: string }).message);
        return null;
    }
}
export async function uploadWineImage(file: File, name: string): Promise<void> {
    try {
        const storageRef = ref(storage, `images/wines/${name}`);
        await uploadBytes(storageRef, file);
        console.log("Image uploaded successfully.");
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}
