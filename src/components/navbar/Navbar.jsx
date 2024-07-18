import React, { useState } from 'react';
import '../navbar/Navbar.css';
import logo from "../../images/dftlogo.png"
import Hamburger from 'hamburger-react'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

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
                  <li><a href="">Home</a></li>
                  <li><a href="">About DFT Alumni</a></li>
                  <li><a href="">Newsletter</a></li>
                  <div className='dft-logo'>
                    <img src={logo} alt="Logo" />
                  </div>
                  <li><a href="">Notable Alumni</a></li> 
                  <li><a href="">Gallery</a></li>
                  <li><a href="">Contact us</a></li> 
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
