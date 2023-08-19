import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Content from "@/common/components/about/content.component";

describe("Content component", () => {
    it("renders without crashing", () => {
        render(<Content />);
    });

    it("displays the correct text content", () => {
        const { getByText } = render(<Content />);
        expect(getByText("Who are we?")).toBeInTheDocument();
        expect(getByText("Bad Camberg, Germany")).toBeInTheDocument();
        expect(getByText("high-quality")).toBeInTheDocument();
        expect(getByText("exceptional taste")).toBeInTheDocument();
        expect(getByText("Product quality")).toBeInTheDocument();
        expect(getByText("The perfect taste of wine")).toBeInTheDocument();
        expect(getByText("Reputation")).toBeInTheDocument();
    });
    
    it("applies the correct CSS classes", () => {
        const { container } = render(<Content />);
        const spanElements = container.querySelectorAll("span");
        spanElements.forEach((span) => {
            if (span.textContent?.includes("Bad Camberg") || span.textContent?.includes("Product quality") || span.textContent?.includes("Reputation")  ) {
                expect(span).toHaveClass("text-yellow");
            } else if (
                span.textContent?.includes("high-quality") ||
                span.textContent?.includes("exceptional taste") || span.textContent?.includes("Teh perfect taste of wine") 
            ) {
                expect(span).toHaveClass("text-brown");
            } 
        });
    });
});
