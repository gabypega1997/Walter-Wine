import HomeComputer from "./home-computer.component";
import Jumbotron from "./jumbotron.component";
import ReviewAndButtons from "./review-and-buttons.component";

const Home = () => {
    return (
        <div className=" bg-gray-dark sm:hidden">
            <div className="">
                <Jumbotron />

                <ReviewAndButtons />
            </div>
            <div className="hidden sm:flex">
                <HomeComputer />
            </div>
        </div>
    );
};

export default Home;
