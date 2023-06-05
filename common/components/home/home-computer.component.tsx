import Image from "next/image";
import Jumbotron from "./jumbotron.component";
import ReviewAndButtons from "./review-and-buttons.component";

const HomeComputer = () => {
    return (
        <div className="flex w-5/6 mx-auto ">
            <div className="w-2/3 lg:w-1/3 ">
                <Jumbotron forDesktop />
            </div>
            <div className="hidden w-1/2 lg:block pt-[100px]">
                <Image
                    src="/images/home/bigRedWine.png"
                    width={500}
                    height={500}
                    alt="Red Wine"
                    className="m-auto px-10"
                />
            </div>
            <div className="w-2/3 lg:w-1/3 ">
                <ReviewAndButtons forDesktop />
            </div>
        </div>
    );
};

export default HomeComputer;
