import Image from "next/image";
import { FC } from "react";

type JumbotronProps = {
    forDesktop?: boolean;
};

const Jumbotron: FC<JumbotronProps> = ({ forDesktop = false }) => {
    const mobileClasses =
        "bg-[url('/images/home/Polygon1.png')]  bg-[left_bottom_5rem] bg-no-repeat pt-10";

    const desktopClasses = "bg-[url('/images/home/Polygon2.png')]  bg-no-repeat flex flex-col-reverse gap-10 pt-20";

    return (
        <div className={forDesktop ? desktopClasses : mobileClasses}>
            <Image
                src="/images/home/bottleWine.png"
                width={300}
                height={200}
                alt="bottle of wine"
                className="mx-auto drop-shadow-2xl"
            />
            <h2 className="text-white text-3xl font-bold w-[330px] mx-auto mt-10 ">
                Welcome to the world of wines, where taste and aroma blend with
                art and passion.
            </h2>
        </div>
    );
};

export default Jumbotron;
