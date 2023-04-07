import AccountCard from "./account-card.component";
import { AccountSettings } from "./account-settings.component";
import { ProfilImage } from "./profil-image.component";
const Account = () => {
    return (
        <>
            <ProfilImage />
            <AccountCard />
            <AccountSettings />
        </>
    );
};

export default Account;
