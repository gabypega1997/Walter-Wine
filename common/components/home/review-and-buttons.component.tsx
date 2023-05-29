import { useRouter } from "next/router";
import Button from "../button/button.component";

const ReviewAndButtons = () => {
    const router = useRouter();

    const redirectionHandler = (link: string) => {
        router.push(link);
    };
    return (
        <div className="py-20 bg-[url('/images/home/Polygon3.png')] bg-no-repeat bg-right  ">
            <div className="flex justify-between items-center text-lg gap-2 sm:justify-start">
                <div className=" py-3  rounded-2xl px-8 leading-5 backdrop-blur-lg bg-white/30">
                    <p className="">
                        &quot;Wines vary in taste, aroma, origin,
                        technique.&quot;
                    </p>

                    <span className="ml-28">-Jack</span>
                </div>

                <div
                    className=" backdrop-blur-lg bg-white/30 py-3 rounded-xl min-w-fit px-2"
                    onClick={() => redirectionHandler("/reviews")}
                >
                    More Reviews
                </div>
            </div>

            <div className="flex flex-col gap-5 my-12 items-end mr-12 ">
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
