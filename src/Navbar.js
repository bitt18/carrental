import './index.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    let nv = useNavigate();

    return ( 
        <div className="navbar">
            <div className="grp1">
                <a onClick={() => nv({ pathname: "" })} id="websiteName">Apex</a>
                <p><a onClick={() => nv({ pathname: "/vehicles"})} id="booknow" className="content">Models</a></p>
                <p><a onClick={() => nv({ pathname: "/service"})} id="vehicles" className="content">Service</a></p>
                <p><a onClick={() => nv({ pathname: "/testdrive"})} id="locations" className="content">Test Drive</a></p>
                <p><a onClick={() => nv({ pathname: "/booknow"})} id="bookings" className="content">Book Now</a></p>
                <p><a onClick={() => nv({ pathname: "/about"})} id="about" className="content">About Us</a></p>
            </div>          
        
            <div className="grp2">
                <p><a onClick={() => nv({ pathname: "/login"})}  id="signoutbutton" className="content">Logout</a></p>
            </div>   
        </div>
 
    );
}
 
export default Navbar;