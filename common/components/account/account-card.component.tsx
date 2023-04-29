import { selectUser } from "@/common/store/user/user.selector";
import { useSelector } from "react-redux";
import SignOut from "../sign-out";
import NavigationButtonAccount from "./navigation-button-account.component";
import { ProfilImage } from "./profil-image.component";

const AccountCard = () => {
    const user = useSelector(selectUser);

    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-2xl font-medium">My Account</h1>
            {user && <ProfilImage user={user} />}

            <NavigationButtonAccount
                link="/account/my-orders"
                imageUrl="/defaultProfil.jpg"
            >
                My Orders
            </NavigationButtonAccount>

            <NavigationButtonAccount link="/cart" imageUrl="/defaultProfil.jpg">
                My Cart
            </NavigationButtonAccount>

            <NavigationButtonAccount
                link="/account/account-settings"
                imageUrl="/defaultProfil.jpg"
            >
                Account Settings
            </NavigationButtonAccount>

            <SignOut />
        </div>
    );
};

export default AccountCard;
