import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import logo from "../../images/dftlogo.png";
import '../navbar/Navbar.css';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const closeMenu = () => {
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <section>
      <div className='full-width shadow-navbar'>
        <div className="main-content-1320">
          <div className="padding-dft">
            <div className="main-navbar">
              <div className="inner-navbar" ref={menuRef}>
                <div className='dft-logo-hamburger'>
                  <Link to="/" className="nav-link">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
                <ul className={`navigation-bar ${isOpen ? 'open' : ''}`}>
                  <li>
                    <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={closeMenu}>About DFT Alumni</Link>
                  </li>
                  <li>
                    <Link to="/newsletter" className={`nav-link ${isActive('/newsletter') ? 'active' : ''}`} onClick={closeMenu}>Newsletter</Link>
                  </li>
                  <div className='dft-logo'>
                    <Link to="/" className="nav-link">
                      <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <li>
                    <Link to="/notabalalumni" className={`nav-link ${isActive('/notabalalumni') ? 'active' : ''}`} onClick={closeMenu}>Notabal Alumni</Link>
                  </li>
                  <li>
                    <Link to="/Gallerypage" className={`nav-link ${isActive('/Gallerypage') ? 'active' : ''}`} onClick={closeMenu}>Gallery</Link>
                  </li>
                  <li>
                    <Link to="/contactus" className={`nav-link ${isActive('/contactus') ? 'active' : ''}`} onClick={closeMenu}>Contact Us</Link>
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
