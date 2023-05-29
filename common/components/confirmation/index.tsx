import Newsletter from "../offers/newsletter/newsletter.component";
import ConfirmationMessage from "./confirmation-message.component";
import TruckAnimation from "./truck-animation.component";

const ConfirmationOrder = () => {
    return (
        <div className="min-h-screen">
            <ConfirmationMessage />
            <TruckAnimation />
            <Newsletter />
        </div>
    );
};

export default ConfirmationOrder;
