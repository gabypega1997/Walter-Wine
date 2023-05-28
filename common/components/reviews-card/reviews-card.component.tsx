import Image from "next/image";
import StarsRating from "../products/stars-rating.component";

const ReviewsCard = () => {
    return (
        <div className="bg-gray-dark pt-28 pb-3">
            <div className="bg-gray-light mx-5 flex rounded-2xl shadow-white/40 shadow-md">
                <div className="w-2/5">
                    <Image
                        src="/images/reviews/Jonathan.png"
                        width={150}
                        height={200}
                        alt="Jonathan"
                        className="h-56 -mt-24 pl-3 pb-3 drop-shadow-md shadow-black/40"
                    />
                </div>
                <div className="w-3/5 text-white text-lg flex flex-col justify-between items-center">
                    <h3 className="text-2xl">Jonathan Lynch</h3>
                    <p className="text-start"> Greate</p>
                    <div className="flex gap-3">
                        <StarsRating rating={5} />
                        <span className="font-sans font-semibold -mt-1">
                            5.0
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;
