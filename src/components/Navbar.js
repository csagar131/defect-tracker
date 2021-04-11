import React from 'react';
import './Navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link } from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
                <div id='section-main-navbar'>
                    <h1 id='main-heading-left-section' style={{color:"white"}}>Defect Tracker</h1>
                    <div id="nav-right-section">
                        <div id="button-section-left">
                            <button className="btn btn-sm btn-outline-primary mr-10" type="button"><Link to="/addDefect">Add Defect</Link></button>
                            <button className="btn btn-sm btn-outline-primary" type="button"><Link to="/filterView">View Defect</Link></button>
                        </div>
                        <button className="btn btn-sm btn-outline-primary" type="button"><Link to="/login">LogIn</Link></button>
                    </div>
                </div>
        )
    }
}

export default Navbar;