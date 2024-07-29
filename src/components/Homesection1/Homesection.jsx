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
                          <p className="find">To the Path of Success</p>

                          <p className="let"> Be a part of us</p>
                          <p className="amet">
                            Create your Future with Diploma in Fabrication Technology. 
                            Learn, Apply, and Be Successful. Start your Journey with DFT.
                          </p>
                          <p className="nonummy">

                          </p>
                        </div>
                        <div className="adventure-right">
                          <div className="adv-flex">
                            <div className="adv-left" data-aos="slide-right">
                              <img src={homebanner} alt="Home Banner" className="home-banner" />

                            </div>
                            <div className="adv-right" data-aos="slide-left">
                              <div className="img-animation">
                                <img src={dft} alt="DFT" className="dft-image" />
                              </div>
                              <div className="img-animation">
                                <img src={welcome} alt="Welcome" className="welcome-img" />
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
