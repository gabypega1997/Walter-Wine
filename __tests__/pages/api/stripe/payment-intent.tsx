import { NextApiRequest, NextApiResponse } from "next";
import handler from "@/pages/api/stripe/payment-intent";

// Mock Stripe library
jest.mock("stripe", () => {
    return jest.fn(() => ({
        paymentIntents: {
            create: jest.fn(),
        },
    }));
});

// Mock NextApiResponse
const mockResponse = () => {
    const res: Partial<NextApiResponse<any>> = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res as NextApiResponse<any>;
};

describe("payment handler", () => {
    it("should create a payment intent successfully", async () => {
        const mockCreate = jest.fn().mockResolvedValue({
            client_secret: "mockClientSecret",
        });
        const stripeMock = require("stripe");
        stripeMock.mockImplementation(() => ({
            paymentIntents: {
                create: mockCreate,
            },
        }));

        const mockRequest = {
            method: "POST",
            body: { amount: 1000 }, // Mocked amount
        } as NextApiRequest;
        const mockRes = mockResponse();

        await handler(mockRequest, mockRes);

        expect(mockCreate).toHaveBeenCalledWith({
            amount: 1000,
            currency: "eur",
            payment_method_types: ["card"],
        });
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({
            clientSecret: "mockClientSecret",
        });
    });

    // Other test cases...
});
