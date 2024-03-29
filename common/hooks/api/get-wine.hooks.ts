import { Wine } from "@/common/types/wine.types";
import { useState, useEffect } from "react";

type GetWineResult = {
    fetchedWines?: Wine[];
    isLoading: boolean;
    error?: string;
};

const useGetWine = () => {
    const [result, setResult] = useState<GetWineResult>({ isLoading: false });

    useEffect(() => {
        setResult((state) => ({ ...state, isLoading: true }));
        const fetchWines = async () => {
            const res = await fetch("/api/wines");
            if (res.ok) {
                const winesRef = await res.json();
                if (winesRef.length) {
                    setResult((state) => ({
                        ...state,
                        fetchedWines: winesRef,
                        isLoading: false,
                    }));
                } else {
                    setResult((state) => ({
                        ...state,
                        isLoading: false,
                        error: "Database is Empty",
                    }));
                }
            } else {
                setResult((state) => ({
                    ...state,
                    isLoading: false,
                    error: "Fetching wines data don't work",
                }));
            }
        };
        fetchWines();
    }, []);
    return [result] as const;
};

export default useGetWine;
