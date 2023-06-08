import HomeComputer from "./home-computer.component";
import Jumbotron from "./jumbotron.component";
import ReviewAndButtons from "./review-and-buttons.component";

const Home = () => {
    return (
        <div className="bg-gray-dark h-full">
            <div className="sm:hidden ">
                <Jumbotron />

                <ReviewAndButtons />
            </div>
            <div className="hidden sm:block  ">
                <HomeComputer />
                
            </div>
        </div>
    );
};

export default Home;
