const ConfirmationMessage = () => {
    return (
        <div className="h-[400px] rounded-br-[200px] bg-[url('/images/confirmation/frankfurt.png')] flex justify-center items-center">
            <div className="h-28 w-full bg-white/30 flex justify-center items-center text-white text-2xl font-bold backdrop-blur-sm ">Your order is on its way</div>
        </div>
    );
};

export default ConfirmationMessage;
