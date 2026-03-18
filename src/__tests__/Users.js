import Users from "../Users";
import React from "react";
import { render, screen } from "@testing-library/react";

test("Class Component method testing", () => {
    // render(<Users/>);
    // const componentData = screen.getByText(/User/i);
    // expect(componentData).toBeInTheDocument;
    
    const userRef = React.createRef();
    render(<Users ref={userRef} />);
    
    // Access the instance via the ref
    const result = userRef.current.getUserList();
    expect(result).toMatch("User List");
})