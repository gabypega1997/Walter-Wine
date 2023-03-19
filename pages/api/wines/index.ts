// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/common/utils/db";

type Data = {
    id: string;
    name: string;
};

export default async function winesHandler(
    req: NextApiRequest,
    res: NextApiResponse<Data[] | { message: string }>
) {
    if (req.method === "GET") {
        try {
            const winesRef = await db.collection("wines").get();
            const wines: Data[] = [];

            winesRef.forEach((wine) => {
                wines.push({
                    id: wine.id,
                    name: wine.data().name,
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
