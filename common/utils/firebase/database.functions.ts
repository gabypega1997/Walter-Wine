import { storage } from "./index";
import { ref, uploadBytes } from "firebase/storage";

export async function uploadProfilImage(file: File, ): Promise<void> {
    const storageRef = ref(storage, `images/${file.name}`);
    try {
        await uploadBytes(storageRef, file);
        console.log("Image uploaded successfully.");
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}
export async function uploadWineImage(file: File, name: string): Promise<void> {
    const storageRef = ref(storage, `images/wine/${name}`);
    try {
        await uploadBytes(storageRef, file);
        console.log("Image uploaded successfully.");
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}
