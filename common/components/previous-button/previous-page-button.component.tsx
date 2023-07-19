import { useRouter } from "next/router";
import Image from "next/image";


const PreviousPageButton = ({ ...otherProps }) => {
    const router = useRouter();
    return (
        <Image
            src="/images/account/backArrow.png"
            width={40}
            height={40}
            alt="back arrow"
            onClick={() => router.back()}
            {...otherProps}
        ></Image>
    );
};

export default PreviousPageButton;
