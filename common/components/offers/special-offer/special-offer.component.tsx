import Image from "next/image";
import { useState } from "react";

const SpecialOffer = () => {
    const [closeOffert, setCloseOffert] = useState(false);

    return (
        <div
            className={`h-[120px] bg-yellow w-11/12 mx-auto -mt-[100px] z-50 flex shadow-md shadow-black/20 relative ${
                closeOffert && " hidden "
            } `}
        >
            <button
                className="absolute right-2 top-1 font-semibold"
                onClick={() => setCloseOffert(true)}
            >
                X
            </button>
            <div className="w-2/3 text-center p-3">
                <h3 className="text-red-700  text-xl font-bold">
                    Special Offer
                </h3>
                <p className="text-2xl text-start">
                    BUY{" "}
                    <span className="text-red-700 font-semibold text-3xl">
                        2
                    </span>
                </p>
                <p className=" text-2xl text-right">
                    GET{" "}
                    <span className="text-red-700 font-semibold text-3xl">
                        1
                    </span>{" "}
                    FREE
                </p>
            </div>
            <div className="w-1/3">
                <Image
                    src="/images/offer/wineGlas.png"
                    width={80}
                    height={80}
                    alt="wine Glass"
                />
            </div>
        </div>
    );
};

export default SpecialOffer;
