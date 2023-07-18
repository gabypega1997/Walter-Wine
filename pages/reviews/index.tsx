import ReviewsCard from "@/common/components/reviews-card/reviews-card.component";

type reviewsArrayShape = {
    name: string;
    image: string;
    message: string;
    ratting: number;
};

const reviewsArray: reviewsArrayShape[] = [
    {
        name: "Jonathan Lynch",
        image: "Jonathan",
        message: "Greate wine",
        ratting: 4.8,
    },
    {
        name: "Brandon Stanley",
        image: "Brandon",
        message: "The best wine ever",
        ratting: 5.0,
    },
    {
        name: "Ruth Brewer",
        image: "Ruth",
        message: "The best wine for partys",
        ratting: 4.0,
    },
    {
        name: "Fionna Lucas",
        image: "Fionna",
        message: "I enjoy every evening a glas and is like a bless",
        ratting: 4.9,
    },
];

const Reviews = () => {
    return (
        <div className=" bg-gray-dark pt-5 pb-10 flex h-full">
            {reviewsArray.map(({ name, image, message, ratting }, index) => {
                return (
                    <ReviewsCard
                        key={index}
                        name={name}
                        image={image}
                        message={message}
                        ratting={ratting}
                    />
                );
            })}
        </div>
    );
};

export default Reviews;
