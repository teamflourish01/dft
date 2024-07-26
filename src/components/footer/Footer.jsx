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

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

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
              <div className="link-icons">
                <a>
                  <img src={whatapp} alt="" srcset="" />
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
              {/* <div className="link">
                <div className="link-flex">

                  <Link to="/" className="footer-link">
                    <li className="style">Home</li>
                  </Link>
                  <li className="style">
                    <Link to="/about" className="nav-link">
                      About DFT Alumni
                    </Link>
                  </li>
                  <li className="style">
                    <Link to="/newsletter" className="nav-link">
                      Newsletter
                    </Link>
                  </li>
                  <li className="style">
                    <Link to="/notabalalumni" className="nav-link">
                      Notable Alumni
                    </Link>
                  </li>
                  <li className="style">
                    <Link to="/Gallerypage" className="nav-link">
                      Gallery
                    </Link>
                  </li>
                  <li className="style">
                    <Link to="/contactus" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </div>
              </div> */}
              <div className="link">
                <div className="link-flex">
                  <li className={isActive('/')}>
                    <Link to="/" className="footer-link">Home</Link>
                  </li>
                  <li className={isActive('/about')}>
                    <Link to="/about" className="nav-link">About DFT Alumni</Link>
                  </li>
                  <li className={isActive('/newsletter')}>
                    <Link to="/newsletter" className="nav-link">Newsletter</Link>
                  </li>
                  <li className={isActive('/notabalalumni')}>
                    <Link to="/notabalalumni" className="nav-link">Notable Alumni</Link>
                  </li>
                  <li className={isActive('/Gallerypage')}>
                    <Link to="/Gallerypage" className="nav-link">Gallery</Link>
                  </li>
                  <li className={isActive('/contactus')}  >
                    <Link to="/contactus" className="nav-link">Contact Us</Link>
                  </li>
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
      </div>
    </>
  );
};

export default Footer;
