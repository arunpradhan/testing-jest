
function Rtl() {
    return (
        <div>
            <h2>RTL: getAllByLabelText with multiple elements</h2>
            <label htmlFor="user-name1">User Name</label>
            <input type="text" id="user-name1"/>
            <label htmlFor="user-name2">User Name</label>
            <input type="text" id="user-name2"/>
            <label htmlFor="user-name3">User Name</label>
            <input type="text" id="user-name3"/>
            
            <label htmlFor="skills1">Skills</label>
            <input type="checkbox" id="skills1" defaultChecked={true} />
            <label htmlFor="skills2">Skills</label>
            <input type="checkbox" id="skills2" defaultChecked={true}/>
            <label htmlFor="skills3">Skills</label>
            <input type="checkbox" id="skills3" defaultChecked={true}/>
            <label htmlFor="skills4">Skills</label>
            <input type="checkbox" id="skills4" defaultChecked={true}/>

        </div>
    );
}
export default Rtl;