import { useState } from "react";

function MyForm() {
    const [fullName, setfullName] = useState("");
    const [heading, setHeading] = useState("");
  return (
    <div>
      <h4>Test on change event | event fire</h4>
      <div>
        <input type="text" value={fullName} onChange={(e) => setfullName(e.target.value)}/>
      </div>
      <h4>Click event test case with button</h4>
      <button onClick={() => setHeading("Updated Heading Here.")}>Click Here</button>
      <h3>{heading}</h3>
    </div>
  );
}

export default MyForm;