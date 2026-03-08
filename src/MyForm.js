import { useState } from "react";

function MyForm() {
    const [fullName, setfullName] = useState("");
  return (
    <div>
      <h4>Test on change event | event fire</h4>
      <div>
        <input type="text" value={fullName} onChange={(e) => setfullName(e.target.value)}/>
      </div>
    </div>
  );
}

export default MyForm;