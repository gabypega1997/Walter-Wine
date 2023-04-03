import ProductsList from "@/common/components/products/products-list.component";
import useGetWine from "@/common/hooks/api/get-wine.hooks";
import { FC, useEffect } from "react";

const Index: FC = () => {
    const [{ isLoading, fetchedWines, error }] = useGetWine();

    console.log(fetchedWines);
    return (
        <>
            Shop
            <ProductsList />
        </>
    );
};

export default Index;
