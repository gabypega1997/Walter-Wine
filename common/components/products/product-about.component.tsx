import { Wine } from "@/common/types/wine.types";
import { FC } from "react";
import StarsRating from "./stars-rating.component";
import { threeDiferiteElements } from "@/common/utils/functions/general.functions";

type ProductAboutProps = {
    item: Wine;
    index: number;
};

const ProductAbout: FC<ProductAboutProps> = ({ item, index }) => {
    return (
        <div className="w-3/5 mr-2 text-center">
            <h1
                className={`" py-2 text-2xl font-bold "${threeDiferiteElements(
                    index,
                    " text-yellow ",
                    " text-brown ",
                    " text-[#4A3328] "
                )}`}
            >
                {item.title}
            </h1>

            <p className="text-md leading-5 text-white text-start h-36 mx-3">
                {item.description}
            </p>

            <div className="ml-auto w-20">
                <StarsRating rating={item.rating} />
            </div>
        </div>
    );
};

export default ProductAbout;
