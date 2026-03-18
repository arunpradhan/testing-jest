import { fireEvent, render, screen } from "@testing-library/react"
import Item from "../Item"
import handleOther from "../helper";

test("Method testing case 1", () => {
    render(<Item/>);
    const btn = screen.getByTestId("btn1");
    fireEvent.click(btn);
    expect(screen.getByText("Hello")).toBeInTheDocument();
})

test("Method testing case 2", () => {
    expect(handleOther()).toMatch("hi");
})