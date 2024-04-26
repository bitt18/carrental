import "./index.css";
import "./About.css";
import img from "./Images/socialsnew.png";


const About = () => {

    function onclk() {
        const arr = [];
        var valid=true;
        arr[0] = document.getElementById("fname").value;
        arr[1] = document.getElementById("phone").value;
        for (let i = 0; i < arr.length; i++){
            if (arr[i] == ""){
                valid = false;
                alert("Please fill out all the fields!");
                break;
            }
        }
        if (valid){
            alert('Thanks for your response.');
        }
    }
/*
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            }
            else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hidden showElements = document.querySelectorAll('.hidden show');
    hidden showElements.forEach((el) => observer.observe(el));
*/
    return (  
        <div>
            <div className="aboutUs">
                <br /><br /><br />
                <div className="hidden show" style={{"font-weight": 900}}>
                    <h1 id="head1">ABOUT US</h1>
                </div>
                <br /><br /><br />
                <div className="hidden show" style={{"font-weight": 900}}>
                    <h3 id="head2" >ELEVATING AUTOMOTIVE EXCELLENCE SINCE 2000</h3>
                </div>
                <br /><br /><br />
                <div className="hidden show" style={{"font-weight": 900}}>
                    <p>Welcome to APEX, where automotive excellence meets unparalleled innovation. As a pioneering force in the automotive industry, APEX has redefined the driving experience with our commitment to cutting-edge technology, meticulous craftsmanship, and unwavering passion for performance.</p>
                </div>
                <br />
                <div className="hidden show" style={{"font-weight": 900}}>
                    <p>Driven by innovation and guided by a relentless pursuit of excellence, APEX continues to redefine what it means to drive. Join us on this extraordinary journey, where every curve, every detail, and every moment behind the wheel is a testament to our relentless pursuit of automotive greatness. Welcome to APEX – where the future of driving begins.</p>
                </div>
                <br /><br /><br /><br /><br />

                <div className="contactContainer hidden show">
                <div className="contactForm" style={{"font-weight": 900}}>
                <h1>CONTACT US</h1>
                        Full name:<br />
                        <input type="text" id="fname" name="fname" placeholder="Enter your name" required /><br /><br />
                        Contact Number:<br /><br />
                        <input type="number" id="phone" name="phone" placeholder="Enter your contact  number" required /><br /><br />
                        Feedback:<br /><br />
                        <textarea id="review" name="review" rows="4" cols="50" placeholder="Your Feedback is appreciated." required></textarea>
                        <br /><br />
                        <div className="btnContainer">
                            <button className="loginBtn" type="button" onClick={onclk}>Submit</button>
                        </div>
                        <br /><br />
        
                        <h2>SOCIALS:</h2>
                            <img src={img} width="250" height="150" alt="Workplace" usemap="#workmap" />
                        <br /><br />
                    </div>
                    <map name="workmap" >
                        <area shape="center" coords="0,150,83,0" alt="Facebook" href="https://www.facebook.com/" target="_blank" />
                        <area shape="rect" coords="83,150,166,0" alt="Twitter" href="https://twitter.com/home" target="_blank" />
                        <area shape="rect" coords="166,150,250,0" alt="Instagram" href="https://www.instagram.com/" target="_blank" />
                    </map>
                </div>     
            </div>
        </div>
    );
}
 
export default About;