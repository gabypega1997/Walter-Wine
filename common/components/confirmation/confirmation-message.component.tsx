const ConfirmationMessage = () => {
    return (
        <div className="h-[350px] rounded-br-[100px] bg-[url('/images/confirmation/frankfurt.png')] flex justify-center items-center bg-bottom md:bg-top md:rounded-none  ">
            <div className="flex items-center justify-center w-full text-2xl font-semibold text-white h-28 bg-white/30 backdrop-blur-sm ">
                <p className="flex">Your order is on its way</p>
            </div>
        </div>
    );
};

export default ConfirmationMessage;
