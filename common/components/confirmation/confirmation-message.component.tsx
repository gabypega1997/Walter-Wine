import ConfirmationCircle from "../confirmation-circle/confirmation-circle.component";

const ConfirmationMessage = () => {
    return (
        <div className="h-[400px] rounded-br-[200px] bg-[url('/images/confirmation/frankfurt.png')] flex justify-center items-center">
            <div className="flex items-center justify-center w-full text-2xl font-bold text-white h-28 bg-white/30 backdrop-blur-sm ">
                <p>Your order is on its way</p>
                <ConfirmationCircle />
            </div>
        </div>
    );
};

export default ConfirmationMessage;
