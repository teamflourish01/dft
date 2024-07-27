import React from "react";
import gimg from "../../images/gimg.png";
import "./gallery.css";
import Button from '../button/Button';
const Galleryimg = () => {
  return (
    <>
      <section>
        <div className="full-width">
          <div className="main-content-1320">
            <div className="padding-dft"></div>

            <div className="gallery-padding">
              <div className="title">
                <p className="maintitle">DFT Alumni Family Meet 2023 Images</p>
              </div>
              <div className="gimg-container">
                <div>
                  <img src={gimg} alt="" srcset="" className="gimgs" />
                </div>
                <div>
                  <img src={gimg} alt="" srcset="" className="gimgs" />
                </div>
                <div>
                  <img src={gimg} alt="" srcset="" className="gimgs" />
                </div>



          
              

                <div>
                  <img src={gimg} alt="" srcset="" className="gimgs" />
                </div>
                <div>
                  <img src={gimg} alt="" srcset="" className="gimgs" />
                </div>
                <div>
                  <img src={gimg} alt="" srcset="" className="gimgs" />
                </div>



           
            

                <div>
                  <img src={gimg} alt="" srcset="" className="gimgs" />
                </div>
                <div>
                  <img src={gimg} alt="" srcset="" className="gimgs" />
                </div>
                <div>
                  <img src={gimg} alt="" srcset="" className="gimgs" />
                </div>
              </div>


              <div className="btn-gallery">
                <Button label="View More" />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Galleryimg;
