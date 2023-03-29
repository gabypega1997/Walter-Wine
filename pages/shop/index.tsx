import useGetWine from "@/common/hooks/api/get-wine.hooks";
import { db, getCities } from "@/common/utils/firebase";
import { FC, useEffect } from "react";

const Index: FC = () => {

    const [{ isLoading, fetchedWines, error }] = useGetWine();


    console.log(fetchedWines);
    return (
        <div>
            Shop
            <ul>{fetchedWines && fetchedWines.map((wine) => (<li key={wine.id}>{wine.title}</li>))}</ul>
        </div>
    );
};

export default Index;
