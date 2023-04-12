import { selectUser } from "@/common/store/user/user.selector";
import { useSelector } from "react-redux";
import SignOut from "../../sign-out";
import { ProfilImage } from "../profil-image.component";
const AccountSettings = () => {
    const user = useSelector(selectUser);
    return (
        <div>
            <h1>AccountSetting</h1>
            <ProfilImage user={user} />

        <label htmlFor="name">Name</label>
        <input value={user.displayName}/>

            <SignOut/>
        </div>
    );
};

export default AccountSettings;
