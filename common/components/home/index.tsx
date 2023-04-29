import Image from "next/image";
import Button from "../button/button.component";

const Home = () => {
    return (
        <div className="bg-gray-dark py-10 ">
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
            <div className="flex justify-between items-center text-lg gap-2">
                <div className="bg-white bg-opacity-40 py-3  rounded-2xl px-8 leading-5">
                    &quot;Wines vary in taste, aroma, origin, technique.&quot;
                    <br />
                    <span className="ml-28">-Jack</span>
                </div>

                <div className=" bg-white bg-opacity-40 py-3 rounded-xl min-w-fit px-2">
                    More Reviews
                </div>
            </div>
            <div className="flex flex-col gap-5 mt-12 items-end mr-12">
                <Button type="buy">Buy Now</Button>
                <Button type="read">Read More</Button>
            </div>
        </div>
    );
};

export default Home;
