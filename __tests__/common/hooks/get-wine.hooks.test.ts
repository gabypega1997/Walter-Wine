import { renderHook, act } from "@testing-library/react";
import useGetWine from "@/common/hooks/api/get-wine.hooks";

// Mock the fetch function
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe("useGetWine", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return loading state initially", async () => {
        mockFetch.mockResolvedValueOnce({
            json: async () => [],
        });

        const { result } = renderHook(() => useGetWine());

        expect(result.current[0].isLoading).toBe(true);

        await act(async () => {
            // Nothing needs to be done here
        });

        expect(result.current[0].isLoading).toBe(false);
    });

    it("should handle successful API call", async () => {
        const mockData = [{ id: 1, name: "Wine 1" }];
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        const { result } = renderHook(() => useGetWine());

        await act(async () => {
            // Nothing needs to be done here
        });

        expect(result.current[0].isLoading).toBe(false);
        expect(result.current[0].fetchedWines).toEqual(mockData);
    });

    it("should handle failed API call", async () => {
        mockFetch.mockResolvedValueOnce({ ok: false });

        const { result } = renderHook(() => useGetWine());

        await act(async () => {
            // Nothing needs to be done here
        });

        expect(result.current[0].isLoading).toBe(false);
        expect(result.current[0].error).toBe("Fetching wines data don't work");
    });

    it("should handle a empty wine array", async () => {
        mockFetch.mockResolvedValueOnce({ ok: true, json: async () => [] });

        const { result } = renderHook(() => useGetWine());

        await act(async () => {
            // Nothing
        });

        expect(result.current[0].error).toBe("Database is Empty");
        expect(result.current[0].isLoading).toBe(false);
    });
});
