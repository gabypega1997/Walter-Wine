import ConfirmationCircle from "../confirmation-circle/confirmation-circle.component";

const ConfirmationMessage = () => {
    return (
        <div className="h-[350px] rounded-br-[100px] bg-[url('/images/confirmation/frankfurt.png')] flex justify-center items-center bg-bottom">
            <div className="flex items-center justify-center w-full text-2xl font-semibold text-white h-28 bg-white/30 backdrop-blur-sm ">
                <p className="flex">Your order is on its way
                    <ConfirmationCircle className="w-10 h-10 p-0.5  mx-3 border-4 rounded-full " /></p>
                
            </div>
        </div>
    );
};

export default ConfirmationMessage;
