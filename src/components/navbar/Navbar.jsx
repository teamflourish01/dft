import React, { useState } from 'react';
import '../navbar/Navbar.css';
import logo from "../../images/dftlogo.png"
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <section className="shadow-full">
      <div className='full-width'>
    
        <div className="main-content-1320">
          <div className="padding-dft">

            <div className="main-navbar">
              <div className="inner-navbar">
                <div className='dft-logo-hamburger'>
                  
                  <img src={logo} alt="Logo" />
                </div>
                <ul className={`navigation-bar ${isOpen ? 'open' : ''}`}>
                  <li>
                    <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="nav-link" onClick={closeMenu}>About DFT Alumni</Link>
                  </li>
                  <li>
                    <Link to="/newsletter" className="nav-link" onClick={closeMenu}>Newsletter</Link>
                  </li>
                  <div className='dft-logo'>
                  <Link to="/" className="nav-link">
                    <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <li>
                    <Link to="/notabalalumni" className="nav-link" onClick={closeMenu}>Notabal Alumni</Link>
                  </li>
                  <li>
                    <Link to="/Gallerypage" className="nav-link" onClick={closeMenu}>Gallery</Link>
                  </li>
                  <li>
                    <Link to="/contactus" className="nav-link" onClick={closeMenu}>Contact Us</Link>
                  </li>
                </ul>
                <div className="hamburger-menu">
                  <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
