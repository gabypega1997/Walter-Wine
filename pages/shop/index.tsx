import { Wine } from "@/common/types/wine.types";
import { FC, useEffect } from "react";


const Index: FC = () => {
    useEffect(() => {
        const fetchWines = async () => {
            const res = await fetch("/api/wines");
            const json = await res.json();
            console.log(json);
        };
        fetchWines();
    }, []);

    return <div>Shop</div>;
};

export default Index;
