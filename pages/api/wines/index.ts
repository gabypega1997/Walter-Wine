// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/common/utils/db";
import { Wine } from "@/common/types/wine.types";

export default async function winesHandler(
    req: NextApiRequest,
    res: NextApiResponse<Wine[] | { message: string }>
) {
    if (req.method === "GET") {
        try {
            const winesRef = await db.collection("wines").get();
            const wines: Wine[] = [];

            winesRef.forEach((wine) => {
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
    } else if (req.method === "POST") {
        try {
            const { title, imageUrl, description, price, rating } = req.body;

            const newWinesRef = await db.collection("wines").add({
                title,
                imageUrl,
                description,
                price,
                rating,
            });
            const newWine = {
                id: newWinesRef.id,
                title,
                imageUrl,
                description,
                price,
                rating,
            };

            res.status(201).json({
                message: `Wine ${title} is added with success`,
            });
        } catch (error) {}
    } else {
        res.status(404).json({ message: "Not found" });
    }
}
