import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../footer/Footer.css";
import fimg from "../../images/fimg.png";
import flogo from "../../images/flogo.png";
import whatapp from "../../images/wp.png";
import instagram from "../../images/insta.png";
import facebook from "../../images/fb.png";
import youtube from "../../images/youtube.png";
import linkdin from "../../images/linkdin.png";
import logomain from "../../images/logomain.png"
const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  return (
    <>
     
      <div className="footer-padding">
        <div className="footer-main">
          <div className="under-1320">
            
            <div className="footer-row-main">
            <div className="footer-row-left">
              <div className="logoimg">
                <Link to="/">
                  <img src={flogo} alt="DFT Alumni Family Logo"  className="left-logo"/>
                </Link>
              </div>
              <div className="since">
                <p>Since : 1983</p>
                <p>DFT Alumni Family, Bhavnagar</p>
              </div>
              <div className="link-icons">
                <a
                  href="https://wa.me/7016141186"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={whatapp} alt="WhatsApp" />
                </a>

                <a
                  href="https://www.instagram.com/dftalumnifamily/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="" />
                </a>

                <a
                  href="https://www.facebook.com/dftalumnifamily"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/dft-alumni/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkdin} alt="" srcset="" />
                </a>
                <a
                  href="https://www.youtube.com/@DFTAlumniFamily"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtube} alt="" srcset="" />
                </a>
              </div>
              </div>
             <div className="footer-links">
              <div className="link">
             <p className="Quick">Quick Links</p>
                <div className="link-flex">
                
                  <li className={isActive("/about")}>
                    <Link to="/about" className="nav-link">
                      About DFT Alumni
                    </Link>
                  </li>
                  <li className={isActive("/newsletter")}>
                    <Link to="/newsletter" className="nav-link">
                      Newsletter
                    </Link>
                  </li>
                  
                  
                  <li className={isActive("/contactus")}>
                    <Link to="/contactus" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                  
                </div>
              </div>
              </div>


                <div className="link">
                <p className="policy">Policy</p>
                <div className="link-flex">
                <li className={isActive("/privacy")}>
                    <Link to="/privacyPolicy" className="nav-link">
                      Privacy Policy
                    </Link>
                  </li>



                  <li className={isActive("/terms")}>
                    <Link to="/terms&Conditions" className="nav-link">
                    Terms & Conditions
                    </Link>
                  </li>



                  <li className={isActive("/cancellation")}>
                    <Link to="/Cancellation&RefundPolicy" className="nav-link">
                    Cancellation & Refund Policy
                    </Link>
                  </li>
                </div>
                </div>


               
              </div>
              <div className="f-link">
                <p>
                  All Rights Reserved DFT Alumni Family | Developed By :
                  <a
                    href="https://teamflourish.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="devlopedby"
                  >
                    Flourish Creations Private Limited
                  </a>
                </p>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
