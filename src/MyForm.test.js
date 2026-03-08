import { fireEvent, render, screen } from "@testing-library/react";
import MyForm from "./MyForm";

test("Test MyForm", () => {
    render(<MyForm/>);
    let FullName = screen.getByRole("textbox");
    fireEvent.change(FullName, {target: {value: 'arun'}});
    expect(FullName.value).toBe("arun");
});

test("Test Heading on Button Click", () => {
    render(<MyForm/>);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(screen.getByText("Updated Heading Here.")).toBeInTheDocument();
})