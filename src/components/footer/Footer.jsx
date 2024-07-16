import React from "react";
import "../footer/Footer.css";
import fimg from "../../images/fimg.png";
import flogo from "../../images/flogo.png"
const Footer = () => {
  return (
    <>
      <div className="fimg">{/* <img src={fimg} alt="" srcset="" /> */}</div>
      <div className="footer-main">
        <div className="under-1320">
          <div className="under-1026">
          <div className="logoimg">
            <img src={flogo} alt="" srcset="" />
          </div>
          <div className="since">
            <p>Since : 1983</p>
            <p>DFT Alumni Family, Bhavnagar</p>
          </div>
          <div className="link">
          <div className="link-flex">
            <li>Home</li>
            <li>About DFT Alumni</li>
            <li>Newsletter</li>
            <li>Notable Alumni</li>
            <li>Gallery</li>
            <li>Contact us</li>
            </div>
       
          </div>
          <div className="f-link">
            <p>All Rights Reserved DFT Alumni Family | Developed By: Flourish Creations Private Limited</p>
          </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
