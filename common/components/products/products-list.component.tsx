import useGetWine from "@/common/hooks/api/get-wine.hooks";
import ProductCart from "./product-card.component";
import SpecialOffer from "../offers/special-offer/special-offer.component";

const ProductsList = () => {
    const [{ isLoading, fetchedWines, error }] = useGetWine();

    return (
        <div className="flex flex-wrap bg-gray-dark py-7 px-2  justify-center">
            {isLoading ? (
                <>Loading...</>
            ) : (
                fetchedWines &&
                fetchedWines.map((wine,index) => (
                    <ProductCart key={wine.id!} index={index} item={wine} />
                ))
            )}

            {!isLoading && <SpecialOffer/>}
        </div>
    );
};

export default ProductsList;
