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
    <section>
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
                  <li><a href="">Newsletter</a></li>
                  <div className='dft-logo'>
                    <img src={logo} alt="Logo" />
                  </div>
                  <li>
                    <Link to="/notabalalumni" className="nav-link" onClick={closeMenu}>Notabal Alumni</Link>
                  </li>
                  <li><a href="">Gallery</a></li>
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
