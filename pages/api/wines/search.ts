import { SearchQuery, SearchResult } from "@/common/types/wine.types";
import { db } from "@/common/utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const searchWine = async (
    req: NextApiRequest,
    res: NextApiResponse<SearchResult[] | { error: string }>
) => {
    const { title } = req.query as SearchQuery;

    try {
        const q = await query(
            collection(db, "wines"),
            where("title", "==", title)
        );
        const querySnapshot = await getDocs(q);

        const results: SearchResult[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const result: SearchResult = {
                id: doc.id,
                title: data.title,
                description: data.description,
                price: data.price,
            };
            results.push(result);
        });

        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default searchWine;
