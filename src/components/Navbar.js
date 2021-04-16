import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import  useAuth  from "../contexts/AuthContext";
import {useHistory} from 'react-router-dom'

export function Navbar() {
  const currentUser = useAuth();
  const {logout} = useAuth();
  const history = useHistory()


  const handleLogout = async () =>{
    await logout();
    history.push('/login')
  }

  const checkLoginBtn = () => {
    let btnLoginStatus = "";
    if (currentUser.currentUser !== null) {
      btnLoginStatus = (
        <button className="btn btn-sm btn-outline-primary" onClick={handleLogout} type="button">
          <Link to="/login">LogOut</Link>
        </button>
      );
    } else {
      btnLoginStatus = (
        <button className="btn btn-sm btn-outline-primary" type="button">
          <Link to="/login">LogIn</Link>
        </button>
      );
    }
    return btnLoginStatus;
  };

  return (
    <div id="section-main-navbar">
      <h1 id="main-heading-left-section" style={{ color: "white" }}>
        Defect Tracker
      </h1>
      <div id="nav-right-section">
        <div id="button-section-left">
          <button
            className="btn btn-sm btn-outline-primary mr-10"
            type="button"
          >
            <Link to="/addDefect">Add Defect</Link>
          </button>
          <button className="btn btn-sm btn-outline-primary" type="button">
            <Link to="/filterView">View Defect</Link>
          </button>
        </div>
        {checkLoginBtn()}
      </div>
    </div>
  );
}

export default Navbar;
