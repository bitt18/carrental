import { Routes } from 'react-router';
import About from './About';
import BookNow from './BookNow';
import Confirmation from './Confirmation';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import Register from './Register';
import Service from './Service';
import TestDrive from './TestDrive';
import Vehicles from './Vehicles';
import './index.css';
import { Route } from 'react-router-dom';

function App() {
  console.log("checking");
  return (
    <div>
        <Navbar />
          <div>
            <Routes>
              <Route index element={<Login />} />
              <Route path="/vehicles" element={<Vehicles />}/>
              <Route path="/service" element={<Service />} /> 
              <Route path="/testdrive" element={<TestDrive />} /> 
              <Route path="/booknow" element={<BookNow />} /> 
              <Route path="/about" element={<About />}/>  
              <Route path="/confirmation" element={<Confirmation />}/>
              <Route path="/login" element = {<Login/>} />
              <Route path="/home_page" element = {<Home/>} />

            </Routes>
          </div> 
    </div>
  );
}

export default App;

