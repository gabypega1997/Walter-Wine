import { selectUser } from "@/common/store/user/user.selector";
import { useSelector } from "react-redux";
import SignOut from "../sign-out";
import NavigationButtonAccount from "./navigation-button-account.component";
import { ProfilImage } from "./profil-image.component";

const AccountCard = () => {
    const user = useSelector(selectUser);

    return (
        <div className="flex flex-col justify-center items-center gap-5 bg-gray-light w-5/6 mx-auto shadow-2xl">
            <h1 className="text-xl font-semibold pt-5 text-white">
                My Account
            </h1>
            {user && <ProfilImage user={user} />}

            <NavigationButtonAccount
                link="/account/my-orders"
                imageUrl="/images/account/orders.png"
            >
                My Orders
            </NavigationButtonAccount>

            <NavigationButtonAccount
                link="/cart"
                imageUrl="/images/account/cartAccount.png"
            >
                My Cart
            </NavigationButtonAccount>

            <NavigationButtonAccount
                link="/account/account-settings"
                imageUrl="/images/account/settings.png"
            >
                Account Settings
            </NavigationButtonAccount>

            <SignOut
                className="h-10 w-32 rounded-lg text-gray-dark bg-yellow font-semibold mt-8 mb-20"
                style={{
                    clipPath:
                        "polygon(100% 0%, 90% 50%, 100% 100%, 0% 100%, 10% 50%,0% 0%)",
                }}
            />
        </div>
    );
};

export default AccountCard;
