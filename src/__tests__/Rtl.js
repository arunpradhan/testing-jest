import { render, screen } from "@testing-library/react"
import Rtl from "../Rtl"

test("single button testing", () => {
    render(<Rtl/>);
    const btn = screen.getByText("Login");
    expect(btn).toBeInTheDocument();
})

test("P tag testing", () => {
    render(<Rtl/>);
    const p = screen.getByText("P Tag Testing");
    expect(p).toBeInTheDocument();
    expect(p).toHaveClass("pStyle");
    expect(p).toHaveAttribute("id");
})

test("H3 Heading testing", () => {
    render(<Rtl/>);
    const h3Tag = screen.getAllByText("H3 Heading");
    for( let i = 0; i < h3Tag.length; i++) {
        expect(h3Tag[i]).toBeInTheDocument();
    }
})