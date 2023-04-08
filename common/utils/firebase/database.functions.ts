import { storage } from "./index";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { User } from "firebase/auth";

export async function uploadProfilImage(file: File): Promise<void> {
    const storageRef = ref(storage, `images/${file.name}`);
    try {
        await uploadBytes(storageRef, file);
        console.log("Image uploaded successfully.");
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}

export async function downloadUrlProfilImage(user: User) {
    const storageRef = ref(storage, `images/${user.photoURL}`);
    try {
        const progilImageUrl = await getDownloadURL(storageRef).then(
            (url) => url
        );
        return progilImageUrl;
    } catch (error) {
        console.error((error as { message: string }).message);
        return null;
    }
}
export async function uploadWineImage(file: File, name: string): Promise<void> {
    const storageRef = ref(storage, `images/wines/${name}`);
    try {
        await uploadBytes(storageRef, file);
        console.log("Image uploaded successfully.");
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}
