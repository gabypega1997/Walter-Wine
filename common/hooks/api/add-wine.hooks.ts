import { Wine } from "@/common/types/wine.types";
import { useState } from "react";


type AddWineResult = {
    newWine?: Wine;
    error?: string;
    isLoading: boolean;
};

export default function useAddWine() {
    const [result, setResult] = useState<AddWineResult>({
        isLoading: false,
    });

    async function addNewWine(wine: Wine) {
        setResult({ isLoading: true });

        try {
            const response = await fetch("/api/wines", {
                method: "POST",
                body: JSON.stringify(wine),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const newWine = await response.json();
                setResult({ newWine, isLoading: false });
            } else {
                const error = await response.text();
                setResult({ error, isLoading: false });
            }
        } catch (error) {
            setResult({ error: (error as Error).message, isLoading: false });
        }
    }

    return [addNewWine, result] as const;
}
