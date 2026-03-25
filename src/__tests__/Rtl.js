import { render, screen, configure } from "@testing-library/react"
import Rtl from "../Rtl"

// test("Overriding data-testid testing", () => {
//     render(<Rtl/>);
//     const divId = screen.getByTestId("div_test_id");
//     expect(divId).toBeInTheDocument();
// })

{/* 
    If we want to use another id like element-id in place of data-testid 
*/}
configure({testIdAttribute: "element-id"})

test("Overriding data-testid testing", () => {
    render(<Rtl/>);
    const divId = screen.getByTestId("div_test_id");
    expect(divId).toBeInTheDocument();
})