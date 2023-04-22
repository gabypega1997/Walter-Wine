const BurgerButton = () => {
    return (
        <button className="flex flex-col gap-1 sm:hidden">
            <div className="w-10 h-1 bg-gray-400 rounded-md"></div>
            <div className="w-10 h-1 bg-gray-400 rounded-md"></div>
            <div className="w-10 h-1 bg-gray-400 rounded-md"></div>
        </button>
    );
};

export default BurgerButton;
