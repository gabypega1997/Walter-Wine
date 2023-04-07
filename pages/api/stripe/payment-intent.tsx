import type { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        try {
            const { amount } = JSON.parse(req.body);
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: "eur",
                payment_method_types: ["card"],
            });

            return {
                statusCode: 200,
                body: JSON.stringify({ paymentIntent }),
            };
        } catch (error) {
            console.log({ error });

            return {
                statusCode: 400,
                body: JSON.stringify({ error }),
            };
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}
