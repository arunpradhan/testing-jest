import { render, screen } from "@testing-library/react"
import Rtl from "../Rtl"

test("getByLabelText test case 1", () => {
    render(<Rtl/>);
    const input = screen.getByLabelText("User Name");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("Sam");
})

test("getByLabelText test case 2", () => {
    render(<Rtl/>);
    const check_box = screen.getByLabelText("Skills");
    expect(check_box).toBeInTheDocument();
    expect(check_box).toBeChecked();
})