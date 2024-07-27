import React, { useEffect } from "react";

import "../Homesection1/homesection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import bleft from "../../images/bleft.png";
import bright from "../../images/bright.png";
import banner from "../../images/banner.png";
import dft from "../../images/dft.png";
import welcome from "../../images/welcome.png";
import homebanner from "../../images/homebanner.png";

const Homesection = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <>
      <section>
        <div className="full-width">
        <div className="width-img" data-aos="slide-right"></div>
        <div className="full-widths" data-aos="fade-left">
          <div className="content-flex">
            <div className="main-content-1320">
              <div className="padding-dft">
                <div className="adventure">
                  <div className="adventure-main">
                    <div className="adventure-flex">
                      <div className="adventure-left" data-aos="slide-right">
                        <p className="find">FIND YOUR ADVENTURE</p>
                      
                        <p className="let">LET’S GO!</p>
                        <p className="amet">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                          sed diam nonummy nibh euismod tincidunt ut laoreet
                        </p>
                        <p className="nonummy">
                          
                        </p>
                      </div>
                      <div className="adventure-right">
                        <div className="adv-flex">
                          <div className="adv-left" data-aos="slide-right">
                            <img src={homebanner} alt="Home Banner"  className="home-banner"/>
                            
                          </div>
                          <div className="adv-right" data-aos="slide-left">
                            <div className="img-animation">
                              <img src={dft} alt="DFT" className="dft-image"/>
                            </div>
                            <div className="img-animation">
                              <img src={welcome} alt="Welcome"  className="welcome-img"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Homesection
