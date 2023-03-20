import { Wine } from "@/common/types/wine.types";
import { FC } from "react";

type HomeProps = {
    wines:Wine[];
}

const Index: FC<HomeProps> = ({ wines }) => {
    return <div>Shop</div>;
};


export default Index;
