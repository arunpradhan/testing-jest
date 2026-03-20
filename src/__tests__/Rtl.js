import { render, screen } from "@testing-library/react"
import Rtl from "../Rtl"

// test("getByPlaceholderText for single input field", () => {
//     render(<Rtl/>);
//     const input = screen.getByLabelText("User Name");
//     expect(input).toBeInTheDocument();
//     const input_ = screen.getByPlaceholderText("Enter User Name");
//     expect(input_).toBeInTheDocument();
//     expect(input_).toHaveValue("Sam");
// })

test("getAllByPlaceholderText for multiple input field", () => {
    render(<Rtl/>);
    const inputs = screen.getAllByPlaceholderText("Enter User Name");
    for(let i = 0; i < inputs.length; i++) {
        expect(inputs[i]).toBeInTheDocument();
        expect(inputs[i]).toHaveValue("Sam");
    }
   
})