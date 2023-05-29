import Button from "../../button/button.component";

const Newsletter = () => {
    return (
        <div className=" h-[200px] w-[300px] mx-auto rounded-2xl shadow-brown shadow-lg mb-10 flex flex-col items-center justify-evenly border-2 border-brown/20">
            <h2 className="text-xl text-brown font-semibold">
                Join our Newsletter
            </h2>
            <p className="font-semibold flex gap-1">
                <svg
                    className="w-5 h-5 text-brown"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span>
                    Get weekly access to our <br /> best deals
                </span>
            </p>
            <Button shape="join"> Join Now</Button>
        </div>
    );
};

export default Newsletter;
