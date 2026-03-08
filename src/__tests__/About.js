import { render } from "@testing-library/react"
import About from "../About"

test("Snapshot Testing for About Component", () => {
    const container = render(<About/>);
    expect(container).toMatchSnapshot();
})