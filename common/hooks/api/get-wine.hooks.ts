import { Wine } from "@/common/types/wine.types";
import { useState, useEffect } from "react";

type GetWineResult = {
    wines?: Wine[];
    isLoading: boolean;
    error?: string;
};

const useGetWine = () => {
    const [result, setResult] = useState<GetWineResult>({ isLoading: false });

    useEffect(() => {
        setResult((state) => ({ ...state, isLoading: true }));
        const fetchWines = async () => {
            const res = await fetch("/api/wines");
            const json = await res.json();
            setResult((state) => ({ ...state, wines: json, isLoading: false }));
        };
        fetchWines();
    }, []);
    return [result] as const;
};

export default useGetWine;
