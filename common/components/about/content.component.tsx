import Image from "next/image";
import { FC, ReactNode } from "react";

type SpanProps = {
    children: ReactNode;
    color: "yellow" | "brown";
};

const Span: FC<SpanProps> = ({ children, color }) => {
    return (
        <span className={color === "yellow" ? " text-yellow " : " text-brown "}>
            {" "}
            {children}{" "}
        </span>
    );
};
const Content = () => {
    return (
        <div className="w-5/6 mx-auto text-white py-6 text-[17px] md:text-xl font-semibold">
            <h1 className="text-yellow text-center font-bold text-xl md:text-2xl xl:text-3xl">
                Who are we?
            </h1>
            <Image
                src="/images/about/glasAndBottle.png"
                width={100}
                height={100}
                alt="glas and boottle"
                className="mx-auto my-5 md:w-[120px] xl:w-[150px] md:my-8 xl:my-12"
            />
            <p>
                Wine is a renowned winemaker located in
                <Span color="yellow"> Bad Camberg, Germany </Span>
                that prides itself on producing{" "}
                <Span color="brown">high-quality</Span> wines with
                <Span color="brown"> exceptional taste</Span>. With a commitment
                to excellence, Wine employs rigorous quality control measures to
                ensure that only the finest grapes are selected for their wines.
            </p>
            <br />
            <div className="italic">
                <p>
                    <Span color="yellow">Product quality</Span>: One of
                    Wine&apos;s main strengths is the high quality of its
                    products.
                </p>

                <br />
                <p>
                    <Span color="brown"> The perfect taste of wine</Span>: Wine
                    prides itself on its ability to produce wines that taste
                    perfect and balanced.
                </p>
                <br />
                <p>
                    <Span color="yellow">Reputation</Span>: Thanks to its
                    commitment to quality and taste, Wine has earned an
                    excellent reputation in the region&apos;s wine industry.
                </p>
            </div>
        </div>
    );
};

export default Content;
