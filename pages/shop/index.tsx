import useGetWine from "@/common/hooks/api/get-wine.hooks";
import { Wine } from "@/common/types/wine.types";
import { FC, useEffect } from "react";


const Index: FC = () => {
    // useEffect(() => {
    //     const fetchWines = async () => {
    //         const res = await fetch("/api/wines");
    //         const json = await res.json();
    //         console.log(json);
    //     };
    //     fetchWines();
    // }, []);
const wines = useGetWine();

    return <div>Shop
        <ul>
            {wines.wines.map}
        </ul>
    </div>;
};

export default Index;
