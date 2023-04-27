import Image from "next/image";
import Button from "../button/button.component";

const Home = () => {
    return (
        <div className="bg-gray-dark h-screen ">
            <Image
                src="/images/home/bottleWine.png"
                width={300}
                height={200}
                alt="bottle of wine"
                className="mx-auto pt-10"
            />
            <h2 className="text-white text-3xl font-bold w-[330px] mx-auto my-8 ">
                Welcome to the world of wines, where taste and aroma blend with
                art and passion.
            </h2>
            <div className="flex">
                <div className="bg-white">
                    &quot;Wines vary in taste, aroma, origin, technique.&quot;
                    -Jack
                </div>
                <div className=" bg-white">
                    <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur-lg">
                        {" "}
                        More Reviews
                    </div>
                    More Reviews
                </div>
            </div>
            <Button type="buy">Buy Now</Button>
            <Button type="read">Read More</Button>
        </div>
    );
};

export default Home;
