import useGetWine from "@/common/hooks/api/get-wine.hooks";
import ProductCart from "./product-card.component";
import SpecialOffer from "../offers/special-offer/special-offer.component";
import Spinner from "../spinner/spinner.component";

const ProductsList = () => {
    const [{ isLoading, fetchedWines, error }] = useGetWine();

    return (
        <div className="flex flex-wrap justify-center px-2 bg-gray-dark py-7">
            {isLoading ? (
                <Spinner otherClasses=" w-1/5 h-1/5 fill-wine  text-white mt-32" />
            ) : (
                fetchedWines &&
                fetchedWines.map((wine, index) => (
                    <ProductCart key={wine.id!} index={index} item={wine} />
                ))
            )}
            {!isLoading && <SpecialOffer />}
        </div>
    );
};

export default ProductsList;
