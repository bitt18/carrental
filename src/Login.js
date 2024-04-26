import "./Login.css";
import "./index.css";

import img from "./Images/logo2.png";
import { useEffect,useRef,useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {

    let [v,set_v] = useState(0);

    let r = useRef(null);
    let nv = useNavigate();

    
    useEffect(function(){
        const observer = new IntersectionObserver(([entries]) => {
            if(entries.isIntersecting==true){

                let dfg = document.querySelectorAll(".hidden");
                for(let rsd = 0;rsd<dfg.length;rsd++){
                    let yjk = dfg[rsd];
                    yjk.classList.add('show');
                }



            }
            else{
                let dfg = document.querySelectorAll(".show");
                for(let rsd = 0;rsd<dfg.length;rsd++){
                    let yjk = dfg[rsd];
                    yjk.classList.remove('show');
                }

            }
            
        });

        observer.observe(r.current);

        return() => {
            observer.disconnect();
        }



    },[]);

    let submit_form = (e)=>{
        e.preventDefault();

        if(document.querySelector("#email").value == "shaleen02@gmail.com" && document.querySelector("#pwd").value == "JonSnow"){
            nv({
                pathname:'/home_page'
            })





        }
        else{
            alert("incorrect user credentials");
        }




    }



    return (  
        <div className="page">
            <div className="loginForm">
                <form onSubmit={submit_form}>
                    <div className="heading">
                        <p id="signin">Sign in</p>
                    </div>
                    <div className="username">
                        
                        <input type="text" placeholder="Username" id="email" name="email" required />
                    </div>
                    <br /><br />

                    <div className="pwd">
                        
                        <input type="password" placeholder="Password" id="pwd" name="pwd" required />
                    </div>
                    <br /><br /><br />

                    <div className="forgotpwd">
                        <a href="./register.html">Forgot Password?</a>
                    </div>
                    <br />

                    <button type="submit" className="loginBtn">Login</button>

                    <div className="Register">
                        <p>Don't have an account?<br />
                        <a href="register.html">Register</a></p>
                    </div>
                    <div ref={r} className="image">
                        <img src={img} className="hidden" />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;