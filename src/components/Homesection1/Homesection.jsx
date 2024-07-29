import React, { useEffect, useState } from "react";
import "../Homesection1/homesection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import homebanner from "../../images/homebanner.png";
import dft from "../../images/dft.png";
import welcome from "../../images/welcome.png";

const images = [
  homebanner,
  dft,
  welcome
];

const Homesection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

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
                          <p className="nonummy"></p>
                        </div>
                        <div className="adventure-right">
                          <div className="image-container">
                            {images.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt={`slide ${index}`}
                                className={`slide ${index === current ? 'active' : ''}`}
                              />
                            ))}
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
  );
};

export default Homesection;
