import { selectUser } from "@/common/store/user/user.selector";
import { useSelector } from "react-redux";
import SignOut from "../../sign-out";
import { ProfilImage } from "../profil-image.component";
import UpdateInput from "./update-input.component";
import { UploadProfilImage } from "./upload-profil-image.component";
import AccountLayout from "../account-layout.component";
import PreviousPageButton from "../../previous-button/previous-page-button.component";
const AccountSettings = () => {
    const user = useSelector(selectUser);
    return (
        <AccountLayout>
            <div className="bg-gray-light w-5/6 m-auto shadow-2xl text-white text-center flex flex-col gap-5 items-center relative pb-40">
                <PreviousPageButton className="absolute top-3 right-3 hover:opacity-80 cursor-pointer" />
                <h1 className="text-xl font-semibold py-5">Account Settings</h1>

                <ProfilImage user={user} />
                <UploadProfilImage user={user} />
                <UpdateInput user={user} type={"name"} />
                <UpdateInput user={user} type={"email"} />

                {/*
                
                --- I don't need sign out for settings menu

                <SignOut
                    className="h-10 w-32 rounded-lg text-gray-dark bg-yellow font-semibold mt-8 mb-20"
                    style={{
                        clipPath:
                            "polygon(100% 0%, 90% 50%, 100% 100%, 0% 100%, 10% 50%,0% 0%)",
                    }}
                /> */}
            </div>
        </AccountLayout>
    );
};

export default AccountSettings;
