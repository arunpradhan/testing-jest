import { useState } from "react"
import handleOther from "./helper";

function Item () {
    const [data, setData] = useState("");

    const handleData = () => {
        setData("Hello");
    }
    
    return (
        <div>
            <h2>Function Component method testing</h2>
            <button data-testid="btn1" onClick={handleData}>Update</button>
            <h3>{data}</h3>
            <hr/>
            <h5>Using helper function in seprate file. </h5>
            <button onClick={handleOther}>Print</button>
        </div>
    )
}

export default Item;