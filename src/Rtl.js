
function RtlQuery() {
    return (
        <div>
            <h2>Multiple elements and Custom Role</h2>
            <label htmlFor="input1">User Name</label>
            <input type="text" id="input1" defaultValue="Provide User Name"/>
            <label htmlFor="input2">Age</label>
            <input type="text" id="input2"/>
            <button>Submit</button>
            <button>Cancel</button>
            <div role="dummy">
                Hello Buddy!
            </div>

        </div>
    );
}
export default RtlQuery;