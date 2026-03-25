
function Rtl() {
    return (
        <div>
            <h2>RTL: Overriding data-testid</h2>
            {/* <div data-testid="div_test_id">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div> */}
            {/* 
                If we want to use another id like element-id in place of data-testid 
            */}
            <div element-id="div_test_id">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>

        </div>
    );
}
export default Rtl;