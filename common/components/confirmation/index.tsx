import Newsletter from "../offers/newsletter/newsletter.component";
import ConfirmationMessage from "./confirmation-message.component";
import TruckAnimation from "./truck-animation.component";

const ConfirmationOrder = () => {
    return (
        <div className="">
            <ConfirmationMessage />
            <TruckAnimation />
            <Newsletter />
        </div>
    );
};

export default ConfirmationOrder;
