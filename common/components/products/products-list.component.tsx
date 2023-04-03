import useGetWine from "@/common/hooks/api/get-wine.hooks";
import ProductCart from "./product-card.component";

const ProductsList = () => {
    const [{ isLoading, fetchedWines, error }] = useGetWine();



    return <>
        {fetchedWines!.map((wine)=><ProductCart key={Number(wine.id!)} item={wine}/>)}
    </>;
};

export default ProductsList;
