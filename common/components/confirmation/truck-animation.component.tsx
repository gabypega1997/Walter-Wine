import Image from "next/image";
import ConfirmationCircle from "../confirmation-circle/confirmation-circle.component";

const TruckAnimation = () => {
    return (
        <div className="h-[30vh]">
            <div className="w-fit -translate-x-full pt-10">
                <Image
                    src="/images/confirmation/truck.png"
                    width={140}
                    height={80}
                    alt=" truck"
                    className=" animate-truck"
                />
                <Image
                    src="/images/confirmation/arrow.png"
                    width={140}
                    height={30}
                    alt=" truck"
                    className=" animate-arrow"
                />
            </div>
            <ConfirmationCircle
                className="flex items-center justify-center w-20 h-20 border-8 border-green-700 rounded-full  animate-confirmation -translate-x-full"
                color="green"
            />
        </div>
    );
};

export default TruckAnimation;
