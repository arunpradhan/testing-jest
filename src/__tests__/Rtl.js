import { render, screen } from "@testing-library/react"
import Rtl from "../Rtl";

test("getByRole RTL Query testing", ()=>{
    render(<Rtl/>);
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toBeDisabled();
    expect(inputField).toHaveValue("Provide Value Here");

    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
})