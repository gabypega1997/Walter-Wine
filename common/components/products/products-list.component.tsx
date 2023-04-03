import useGetWine from "@/common/hooks/api/get-wine.hooks";
import ProductCart from "./product-card.component";

const ProductsList = () => {
    const [{ isLoading, fetchedWines, error }] = useGetWine();

    return (
        <>
            {isLoading ? (
                <>Loading...</>
            ) : (
                fetchedWines &&
                fetchedWines.map((wine) => (
                    <ProductCart key={wine.id!} item={wine} />
                ))
            )}
        </>
    );
};

export default ProductsList;
