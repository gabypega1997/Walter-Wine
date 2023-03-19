import axios from "axios";
import { MouseEvent, useEffect } from "react";

const Home = () => {
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch("/api/wines");
            const data = await res.json();
            console.log(data);
        }
        fetchData()
    },[])

    return (
        <>
            <h1>Home</h1>
        </>
    );
};

export default Home;
