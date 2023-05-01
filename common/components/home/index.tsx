import Image from "next/image";

import { useRouter } from "next/router";

import Button from "../button/button.component";

const Home = () => {
    const router = useRouter();

    const redirectionHandler = (link: string) => {
        router.push(link);
    };

    return (
        <div className=" pb-10 bg-gray-dark ">
            {/* Background poligons */}

            {/* jumbotron */}
            <div className="bg-[url('/images/home/Polygon1.png')]  bg-[left_bottom_5rem] bg-no-repeat pt-10">
                <Image
                    src="/images/home/bottleWine.png"
                    width={300}
                    height={200}
                    alt="bottle of wine"
                    className="mx-auto drop-shadow-2xl"
                />
                <h2 className="text-white text-3xl font-bold w-[330px] mx-auto mt-8 ">
                    Welcome to the world of wines, where taste and aroma blend
                    with art and passion.
                </h2>
            </div>

            {/* review  */}
            <div className="py-20 bg-[url('/images/home/Polygon3.png')] bg-no-repeat bg-right  ">
                <div className="flex justify-between items-center text-lg gap-2">
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

                {/* Buttons */}
                <div className="flex flex-col gap-5 mt-12 items-end mr-12 ">
                    <Button
                        onClickFunc={() => redirectionHandler("/shop")}
                        type="buy"
                    >
                        Buy Now
                    </Button>
                    <Button
                        onClickFunc={() => redirectionHandler("/about")}
                        type="read"
                    >
                        Read More
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;
