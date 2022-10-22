import React from "react";
import "../styles/Footer.css";
import { BsInstagram} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {FiTwitter} from "react-icons/fi";
import {BsLinkedin} from "react-icons/bs";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <BsInstagram/> <BsFacebook/> <FiTwitter/> <BsLinkedin/>
      </div>
      <p> &copy; ABUD </p>
    
    </div>
  );
}

export default Footer;