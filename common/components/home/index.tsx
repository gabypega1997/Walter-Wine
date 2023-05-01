import Jumbotron from "./jumbotron.component";
import ReviewAndButtons from "./review-and-buttons.component";

const Home = () => {
    return (
        <div className=" bg-gray-dark ">
            <Jumbotron />

            <ReviewAndButtons />
        </div>
    );
};

export default Home;
