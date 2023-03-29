// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/common/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Wine } from "@/common/types/wine.types";

export default async function winesHandler(
    req: NextApiRequest,
    res: NextApiResponse<Wine[] | { message: string }>
) {
    if (req.method === "GET") {
        try {
            const winesRef = await collection(db, "wines");
            const winesSnap = await getDocs(winesRef);
            const wines: Wine[] = [];

            winesSnap.forEach((wine) => {
                wines.push({
                    id: wine.id,
                    title: wine.data().title,
                    imageUrl: wine.data().imageUrl,
                    description: wine.data().description,
                    price: wine.data().price,
                    rating: wine.data().rating,
                });
            });
            res.status(200).json(wines);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    } else {
        res.status(404).json({ message: "Not found" });
    }
}
