import { render, screen } from "@testing-library/react";
import Rtl from "../Rtl";

test("getAllByRole", ()=>{
    render(<Rtl/>);
    const btns = screen.getAllByRole("button");
    for ( let i = 0; i < btns.length; i++) {
        expect(btns[i]).toBeInTheDocument();
    }

    const options = screen.getAllByRole("option");
    for ( let i = 0; i < options.length; i++) {
        expect(options[i]).toBeInTheDocument();
    }
})