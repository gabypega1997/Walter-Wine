import { useRouter } from "next/router";
import Button from "../button/button.component";
import { FC } from "react";
import Image from "next/image";

type ReviewAndButtonsProps = {
    forDesktop?: boolean;
};

const ReviewAndButtons: FC<ReviewAndButtonsProps> = ({
    forDesktop = false,
}) => {
    const router = useRouter();

    const mobileClasses =
        " py-20 bg-[url('/images/home/Polygon3.png')] bg-no-repeat bg-right ";

    const desktopClasses = " flex flex-col items-center gap-20";

    const redirectionHandler = (link: string) => {
        router.push(link);
    };
    return (
        <div className={forDesktop ? desktopClasses : mobileClasses}>
            {forDesktop && (
                <div className="pt-[100px]">
                    <Image
                        src="/images/home/mediumWhiteWine.png"
                        width={250}
                        height={250}
                        alt="White Wine"
                    />
                </div>
            )}

            <div className="flex items-center justify-between gap-2 text-lg sm:justify-start">
                <div className="px-8 py-3 leading-5 rounded-2xl backdrop-blur-lg bg-white/30">
                    <p className="">
                        &quot;Wines vary in taste, aroma, origin,
                        technique.&quot;
                    </p>

                    <span className="ml-28">-Jack</span>
                </div>

                <div
                    className="px-2 py-3 backdrop-blur-lg bg-white/30 rounded-xl min-w-fit cursor-pointer hover:opacity-80 "
                    onClick={() => redirectionHandler("/reviews")}
                >
                    More Reviews
                </div>
            </div>

            <div className="flex flex-col items-end gap-5 my-12 mr-12 ">
                <Button onClick={() => redirectionHandler("/shop")} shape="buy">
                    Buy Now
                </Button>
                <Button
                    onClick={() => redirectionHandler("/about")}
                    shape="read"
                >
                    Read More
                </Button>
            </div>
        </div>
    );
};

export default ReviewAndButtons;
