import { render, screen } from "@testing-library/react"
import Rtl from "../Rtl"

test("getByTestId testing", () => {
    render(<Rtl/>);
    // const divId = screen.getByTestId("div_1");
    // expect(divId).toBeInTheDocument();
    const h2Id = screen.getByTestId("h2-heading");
    expect(h2Id).toBeInTheDocument();
    const divId = screen.getAllByTestId("div_1");
    for(let i = 0; i < divId.length; i++) {
        expect(divId[i]).toBeInTheDocument();
    }
})