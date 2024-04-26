import "./index.css";
import "./TestDrive.css";

const TestDrive = () => {

    function verify(){
        const arr = [];
        var valid = true;
        arr[0] = document.getElementById("p").value;
        arr[1] = document.getElementById("a").value;
        arr[2] = document.getElementById("cm").value;
        arr[3] = document.getElementById("tm").value;
        arr[4] = document.getElementById("td").value;
        arr[5] = document.getElementById("d").value;
        for (let i = 0; i < arr.length; i++){
            if (arr[i] == ""){
                valid = false;
                alert("Please fill out all the fields!");
                break;
            }
        }
        if (valid){
            alert('Your test drive has been booked successfully. The dealership will get in contact with you soon.');
        }
    }

    return (  
        <div>
            <div className="booknowTitle">
                <h2>Test Drive</h2>
            </div>
        
            <div className="booknowContainer">
                <div className="booknow">
                    <form className="bookform">
                        <div className="formBorder">
                            <br /><br /><br />
                            Pincode: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" id="p" placeholder="Enter Pincode" required /><br /><br /><br />
                            Address: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" id="a" placeholder="Enter Address" required /><br /><br /><br />
                            Car Model: &nbsp;&nbsp;&nbsp;
                            <input list="CarModel" placeholder="Car Model" id="cm" name="model" required /><br /><br /><br />
                            <datalist id="CarModel">
                                <option value="Haima H1"> Haima H1 </option>
                                <option value="Sinope S1"> Sinope S1 </option>
                                <option value="Sylph S1"> Sylph S1 </option>
                                <option value="Lysander L1"> Lysander L1 </option>
                            </datalist>
                            Transmission:
                            <input list="tm1" placeholder="Manual/Automatic" id="tm" name="model" required /><br /><br /><br />
                            <datalist id="tm1">
                                <option value="Manual"> Manual </option>
                                <option value="Automatic"> Automatic </option>
                            </datalist>
                            Test Drive at: <br />
                            <input list="td1" placeholder="Showroom/Doorstep" id="td" name="model" required /><br /><br /><br />
                            <datalist id="td1">
                                <option value="Showroom"> Showroom </option>
                                <option value="Doorstep"> Doorstep </option>
                            </datalist>
                            Select Date: 
                            <input type="date" id="d" placeholder="Enter Date" required /><br /><br /><br />
                            <div className="btnContainer">
                                <button className="loginBtn" type="button" onClick={verify}>Submit</button>
                            </div>
                        </div>
                        <br /><br />    
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default TestDrive;