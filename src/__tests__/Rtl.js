import { render, screen } from "@testing-library/react"
import Rtl from "../Rtl";

test("Multiple elements and Custom Role", ()=>{
    render(<Rtl/>);
    const input1 = screen.getByRole("textbox", {name: "User Name"});
    const input2 = screen.getByRole("textbox", {name: "Age"});
    const div = screen.getByRole("dummy");
    expect(input1).toBeInTheDocument();
    expect(input1).toHaveValue("Provide User Name");
    expect(input2).toBeInTheDocument();
    
    expect(div).toBeInTheDocument();

    const btn1 = screen.getByRole("button", {name: "Submit"});
    const btn2 = screen.getByRole("button", {name: "Cancel"});
    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
})