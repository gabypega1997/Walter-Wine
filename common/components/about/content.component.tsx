import Image from "next/image";

const Content = () => {
    return (
        <div className="w-5/6 mx-auto text-white py-6 text-lg">
            <h1 className="text-yellow text-center font-bold text-xl">
                Who are we?
            </h1>
            <Image
                src="/images/about/glasAndBottle.png"
                width={100}
                height={100}
                alt="glas and boottle"
                className="mx-auto my-5"
            />
            <p>
                Wine is a renowned winemaker located in Bad Camberg, Germany
                that prides itself on producing high-quality wines with
                exceptional taste. With a commitment to excellence, Wine employs
                rigorous quality control measures to ensure that only the finest
                grapes are selected for their wines.
            </p>
            <br />
            <div>
                <p>
                    Product quality: One of Wine&apos;s main strengths is the
                    high quality of its products.
                </p>

                <br />
                <p>
                    The perfect taste of wine: Wine prides itself on its ability
                    to produce wines that taste perfect and balanced.
                </p>

                <p>
                    Reputation: Thanks to its commitment to quality and taste,
                    Wine has earned an excellent reputation in the region&apos;s
                    wine industry.
                </p>
            </div>
        </div>
    );
};

export default Content;
