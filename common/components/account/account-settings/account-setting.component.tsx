import { selectUser } from "@/common/store/user/user.selector";
import { useSelector } from "react-redux";
import SignOut from "../../sign-out";
import { ProfilImage } from "../profil-image.component";
import UpdateInput from "./update-input.component";
import { UploadProfilImage } from "./upload-profil-image.component";
const AccountSettings = () => {
    const user = useSelector(selectUser);
    return (
        <div>
            <h1>AccountSetting</h1>
            <ProfilImage user={user} />
            <UploadProfilImage user={user} />
            <UpdateInput user={user} type={"name"} />
            <UpdateInput user={user} type={"email"} />

            {/* <SignOut/> */}
        </div>
    );
};

export default AccountSettings;
