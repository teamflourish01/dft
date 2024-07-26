import React, { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import "../footer/Footer.css";
import fimg from "../../images/fimg.png";
import flogo from "../../images/flogo.png";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* <div className="fimg"><img src={fimg} alt="" srcset="" className="fimg-end" /> </div> */}
      <div className="footer-padding">
        <div className="footer-main">
          <div className="under-1320">
            <div className="under-1026">
            <div className="logoimg">
                <Link to="/">
                  <img src={flogo} alt="DFT Alumni Family Logo" />
                </Link>
              </div>
              <div className="since">
                <p>Since : 1983</p>
                <p>DFT Alumni Family, Bhavnagar</p>
              </div>
              <div className="link">
                <div className="link-flex">
                  <Link to="/" className="footer-link">
                    <li className="style">Home</li>
                  </Link>
                  <li className="style">
                    <Link to="/about" className="nav-link">About DFT Alumni</Link>
                  </li>
                  <li className="style">
                    <Link to="/newsletter" className="nav-link">Newsletter</Link>
                  </li>
                  <li className="style">
                    <Link to="/notabalalumni" className="nav-link">Notable Alumni</Link>
                  </li>
                  <li className="style">
                    <Link to="/Gallerypage" className="nav-link">Gallery</Link>
                  </li>
                  <li className="style">
                    <Link to="/contactus" className="nav-link">Contact Us</Link>
                  </li>
                </div>
              </div>
              <div className="f-link">
  <p>All Rights Reserved DFT Alumni Family | Developed By : 
    <a href="https://teamflourish.co/" target="_blank" rel="noopener noreferrer" className="devlopedby">
      Flourish Creations Private Limited
    </a>
  </p>
</div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
