import "./index.css";
import "./Confirmation.css";

const Confirmation = () => {

    function redirect(){
        window.location.href = "./home.html";
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.classList.add('show1');
            }
            else {
                entry.target.classList.remove('show1');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden1');
    hiddenElements.forEach((el) => observer.observe(el));

    return (  
        <div>
            <div className="tagline hidden1" id="dispmsgdiv">
                <h1 className="tag"><br /><br />Congratulations! <br /> Your car booking has been confirmed! <br /> Get ready for a smooth ride.<br /><br /></h1>
            </div>
            <div className="btnContainer hidden1">
            <a href="./booknow.html"><button className="loginBtn" type="submit" id="okbutton" onClick={redirect}>OK </button></a><br />
            </div>
            <br /><br /><br />
        </div>
    );
}
 
export default Confirmation;