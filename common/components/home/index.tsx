import Button from "../button/button.component";

const Home = () => {
    return (
        <div className="">
            <h1>Home</h1>
            <Button type="buy">Buy Now</Button>
            <br />
            <Button type="sign-in">sign-in</Button>
            <br />
            <Button type="google">Google</Button>
            <br />
            <Button type="purchase">Purchase</Button>
            <br />
            <Button type="read">Read More</Button>
        </div>
    );
};

export default Home;
