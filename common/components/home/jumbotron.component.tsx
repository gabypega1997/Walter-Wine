import Image from "next/image";

const Jumbotron = () => {
    return (
        <div className="bg-[url('/images/home/Polygon1.png')]  bg-[left_bottom_5rem] bg-no-repeat pt-10">
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
