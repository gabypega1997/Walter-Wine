import { FC } from "react";
import { ReactNode } from "react";
import { Wine } from "@/common/types/wine.types";
import Image from "next/image";

type ProductCardProps = {
    item: Wine;
};

const ProductCart: FC<ProductCardProps> = ({ item }) => {
    return (
        <div className="flex m-2 bg-gray-600">
            <div className="flex justify-center w-2/5">
                <div className="flex flex-col justify-end h-full bg-yellow-200 w-28">
                    <div className="flex items-end justify-center h-12 gap-3 bg-yellow-400">
                        <div className="z-20 rounded-sm h-9 w-9 bg-slate-500"></div>
                        <div className="z-20 rounded-sm h-9 w-9 bg-slate-500"></div>
                            <Image
                            className="absolute"
                                src="/wine1.png"
                                width={80}
                                height={150}
                                alt={item.title}
                            />
                    </div>
                </div>
            </div>
            <div className="w-3/5 mr-2 text-center">
                <h1 className="p-2 text-2xl font-bold text-yellow-200">
                    {item.title}
                </h1>
                <h3 className="text-xl leading-5 text-white text-start">
                    {item.description}
                </h3>
                <div className="w-20 h-5 m-3 ml-auto bg-yellow-300">Stars</div>
            </div>
        </div>
    );
};

export default ProductCart;
