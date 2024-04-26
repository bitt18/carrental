import "./index.css";
import "./Service.css";

const Service = () => {

    function verify(){
        const arr = [];
        var valid = true;
        arr[0] = document.getElementById("servicemodel").value;
        arr[1] = document.getElementById("serviceaddress").value;
        arr[2] = document.getElementById("serviceissue").value;
        for (let i = 0; i < arr.length; i++){
            if (arr[i] == ""){
                valid = false;
                alert("Please fill out all the fields!");
                break;
            }
        }
        if (valid){
            alert('Your service request has been booked successfully. The dealership will get in contact with you soon.');
        }
    }

    return (  
        <div>
            <div className="serviceContainer">
                <div className="servicePage">
                    <h2 className="serviceHeader">Service Request</h2>
                        <div className="servicenow">
                            <form action="#" method="post" className="registerPage">
                                Vehicle Model: &nbsp;
                                <input list="CarModel" placeholder="Car Model" id="servicemodel" name="model" required /><br /><br />
                                <datalist id="CarModel">
                                    <option value="Haima H1"> Haima H1 </option>
                                    <option value="Sinope S1"> Sinope S1 </option>
                                    <option value="Sylph S1"> Sylph S1 </option>
                                    <option value="Lysander L1"> Lysander L1 </option>
                                </datalist><br />

                                Address: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" placeholder="Address" id="serviceaddress" name="address" required /><br /><br />
                                Issue:-<br /><br />
                                <textarea placeholder="Issues/Comments" id="serviceissue" name="issues" rows="4" cols="50" required></textarea><br /><br />
                                    
                                <div className="btnContainer" id="cont">
                                    <button className="loginBtn" type="button" id="but1" onClick={verify}>Submit</button>
                                </div>
                                <br /><br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
 }
  
 export default Service;