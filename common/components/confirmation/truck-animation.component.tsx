import Image from "next/image";
import ConfirmationCircle from "../confirmation-circle/confirmation-circle.component";

const TruckAnimation = () => {
    return (
        <div className="h-72 bg-red-50">
            Truck Animation
            <Image
                src="/images/confirmation/truck.png"
                width={100}
                height={50}
                alt=" truck"
                className=" animate-truck -ml-28"
            />
            <Image
                src="/images/confirmation/arrow.png"
                width={100}
                height={50}
                alt=" truck"
                className=" animate-arrow -ml-28"
            />
            <ConfirmationCircle
                className="flex items-center justify-center w-20 h-20 border-8 border-green-700 rounded-full -ml-32 animate-confirmation"
                color="green"
            />
        </div>
    );
};

export default TruckAnimation;
