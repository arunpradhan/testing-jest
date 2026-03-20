
function Rtl() {
    return (
        <div>
            <h2>RTL: getByLabelText | checkbox testing with get by label text</h2>
            <label htmlFor="user-name">User Name</label>
            <input type="text" id="user-name" defaultValue="Sam"/>
            
            <label htmlFor="skills">Skills</label>
            <input type="checkbox" id="skills" defaultChecked />

        </div>
    );
}
export default Rtl;