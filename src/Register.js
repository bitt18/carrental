import "./index.css";
import "./Register.css";

const Register = () => {

    function vname(){
        let x = document.getElementById("fname").value;

        if(x == ""){
            return ["Name field cannot be empty.\n", false];
        }
        
        else if((/^[a-zA-Z\s]+$/.test(x)) == false){
            return ["Full Name should not contain number or special character.\n", false];
        }
        return ["", true];
    }

    function vemail(){
        let z = document.getElementById("email").value;
        
        if(z == ""){
            return["Email field cannot be empty.\n", false];
        }
        
        else if(((/[@.].*[@.]/.test(z)) == false)){
            return["Enter a valid email address.\n", false];
        }

        else if((z.length > 50)){
            return["Enter a valid email address.\n", false];
        }
        return ["", true];
    }

    function vpassword(){
        let pwd = document.getElementById("pwd").value;
        let cpwd = document.getElementById("cpwd").value;
        
        if (pwd == "" || cpwd == "")
        {
            return ["Password field cannot be empty.\n",false];
        }
        
        else if ((/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pwd)) == false){
            return ["Enter a valid password.\n",false];
        }
        
        else if(pwd != cpwd){
            return ["Password and Confirm password do not match.\n", false];
        }

        else
        {
            return ["",true];
        }

    }

    function vphno(){
        let a = document.getElementById("phno").value;
        
        if(a == ""){
            return["Phone number field cannot be empty.\n", false];
        }
        
        else if((/^[6-9]\d{9}$/.test(a)) == false){
            return["Enter a valid phone number.\n",false];
        }
        return ["", true];
    }

    function vdob(){
        let y = document.getElementById("dob").value;
        
        if(y == ""){
            return ["DOB field cannot be empty.\n", false];
        }
        
        else if((/^(0[1-9]|[1-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(y)) == false){
            return ["Enter a valid Date of Birth.\n", false];
        }
        return ["", true];
    }

    function validate(){
        let alertmessage = vname()[0] + vemail()[0] + vpassword()[0] + vphno()[0] + vdob()[0];

        if (alertmessage != ""){
            var myForm = document.getElementById('MainForm');
            myForm.reset();
            alert(alertmessage);
        }
        else{
            alert("User registered successfully. Please login to proceed!");
        }
    }

    return ( 
        <div>
            <div className="registerContainer">
                <div className="registerPage">
                    <h1>Register <br />New User</h1><br />
                    <div>
                        <form id="MainForm">
                            <div className="name">
                                <label for="name">Full Name:</label><br />
                                <input type="text" placeholder="Enter full name" id="fname" name="fname" required /> 
                            </div>
                            <br />
            
                            <div className="email">
                            <label for="email">Email Address:</label><br />
                                <input type="text" placeholder="Enter email address" id="email" name="email" required />
                            </div>
                            <br />
            
                            <div className="pwd">
                                <label for="pwd">Password (must contain at least 8 characters - 1 letter and 1 number):</label><br />
                                <input type="password" placeholder="Enter password" id="pwd" name="pwd" required />
                            </div>
                            <br /><br /><br /><br />
            
                            <div className="pwd">
                                <label for="pwd">Re-enter Password:</label><br />
                                <input type="password" placeholder="Enter password" id="cpwd" name="cpwd" required />
                            </div>
                            <br /><br />
            
                            <div className="mobile">
                                <label for="mobile">Mobile Number:</label><br />
                                <input type="text" placeholder="Enter mobile number" id="phno" name="phno" required />
                            </div>
                            <br />
                            <div className="dob">
                                <label for="dob">Date of Birth (format - dd/mm/yyyy):</label><br />
                                <input type="text" placeholder="Enter DoB" id="dob" name="dob" required />
                            </div>
                            <br />
            
                            <button type="button" className="btn" onClick={validate}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Register;