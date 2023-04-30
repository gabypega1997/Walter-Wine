import Image from "next/image";
import Button from "../button/button.component";

const Home = () => {
    return (
        <div className="bg-gray-dark py-10 ">
            {/* jumbotron */}
            <Image
                src="/images/home/bottleWine.png"
                width={300}
                height={200}
                alt="bottle of wine"
                className="mx-auto"
            />
            <h2 className="text-white text-3xl font-bold w-[330px] mx-auto my-8 ">
                Welcome to the world of wines, where taste and aroma blend with
                art and passion.
            </h2>

            {/* review  */}
            <div className="flex justify-between items-center text-lg gap-2">
                <div className=" py-3  rounded-2xl px-8 leading-5 backdrop-blur-lg bg-white/30">
                    <p className="backdrop-shadow-lg">
                        &quot;Wines vary in taste, aroma, origin,
                        technique.&quot;
                    </p>

                    <span className="ml-28">-Jack</span>
                </div>

                <div className=" backdrop-blur-lg bg-white/30 py-3 rounded-xl min-w-fit px-2">
                    More Reviews
                </div>
            </div>
            {/* Background poligons */}

            <div className="flex flex-col gap-5 mt-12 items-end mr-12">
                <Button type="buy">Buy Now</Button>
                <Button type="read">Read More</Button>
            </div>
        </div>
    );
};

export default Home;
