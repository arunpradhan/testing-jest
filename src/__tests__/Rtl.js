import { render, screen } from "@testing-library/react"
import Rtl from "../Rtl"

test("getAllByLabelText with multiple elements case 1", () => {
    render(<Rtl/>);
    const inputs = screen.getAllByLabelText("User Name");
    for(let i = 0; i < inputs.length; i++) {
        expect(inputs[i]).toBeInTheDocument();
    }
   
})

test("getAllByLabelText with multiple elements case 2", () => {
    render(<Rtl/>);
    const checkboxs = screen.getAllByLabelText("Skills");
    for(let i = 0; i < checkboxs.length; i++) {
        expect(checkboxs[i]).toBeInTheDocument();
        expect(checkboxs[i]).toBeChecked();
    }
   
})