import "./index.css";
import "./BookNow.css";
import { useNavigate } from "react-router";

const BookNow = () => {

    function sendConf() {
        alert("Booking Confirmed.");
    }

    function dispMsg(){
        const arr = [];
        console.log("Clicked");
        var valid = true;
        arr[0] = document.getElementById("bookmodel").value;
        arr[1] = document.getElementById("bookyear").value;
        arr[2] = document.getElementById("bookdn").value;
        arr[3] = document.getElementById("bookdl").value;
        arr[4] = document.getElementById("cb");
        for (let i = 0; i < arr.length; i++){
            if (arr[i] == ""){
                valid = false;
                alert("Please fill out all the fields!");
                break;
            }
        }
        if (valid && arr[4].checked){
            alert('Your order has been placed successfully. The dealership will get in contact with you soon.')
            window.location.href = "confirmation.html";
        }
        else {
            alert("Please agree to the T&C!");
        }
    }

    let nv = useNavigate();

    return (  
        <div>
            <div className="booknowTitle">
                <h2>Book Now</h2>
            </div>
            <div className="booknowContainer">
                <div className="booknow">
                    <form className="bookform" action="#" method="post">
                        <div className="formBorder">
                            <h3>Car Details</h3><br />
                            Model: &nbsp;
                            <input list="CarModel" placeholder="Car Model" id="bookmodel" name="model" required /><br /><br />
                            <datalist id="CarModel">
                                <option value="Haima H1"> Haima H1 </option>
                                <option value="Sinope S1"> Sinope S1 </option>
                                <option value="Sylph S1"> Sylph S1 </option>
                                <option value="Lysander L1"> Lysander L1 </option>
                            </datalist><br />
                            Year: &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" id="bookyear" placeholder="Year" name="year" required /><br /><br /><br />
                            <h3>Dealer Details</h3><br />
                            Dealer Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                            <input type="text" id="bookdn" placeholder="Dealer Name" name="dealer_name" required /><br /><br /><br />
                            Dealer Location: &nbsp;&nbsp;&nbsp;
                            <input type="text" id="bookdl" placeholder="Dealer Location" name="dealer_location" required /><br /><br /><br />    
                        </div>
                
                        <div>
                            <h3 className="disclaimer" id="disclaimers">Disclaimer</h3><br />
                            <p> I agree that by clicking the ‘Submit’ button below, I am explicitly agreeing to following: <br /><br />
                                1 . Soliciting a call and message via WhatsApp or any other medium from Apex Ltd or its affiliates, authorized dealerships, partners, subsidiary companies etc. on Mobile number stated by me.<br /><br />

                                2 . Cancellation charges (Of Rs 500) will be applicable for booking done from the date of Launch (after official price reveal) of the vehicle.<br /><br />

                                3 . In case of cancellation within period of 6 months from date of booking, amount will be refunded online into source account only. For any cancellation beyond this period, refund would be settled offline between customer and dealer selected at time of booking.<br /><br />

                                *Prices/Schemes prevailing at the time of invoice/bill shall be applicable.
                            </p>
                        </div>
                        <input type="checkbox" id="cb" name="disclaimer" /> I agree to the above terms and conditions.<br /><br />
                    
                        <div className="btnContainer">
                            <a className="temp1 loginBtn" type="button" onClick={sendConf}>Submit</a>
                        </div>
                        <br /><br />
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default BookNow;