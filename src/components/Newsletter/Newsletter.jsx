import React from "react";
import "./newsletter.css";
import Button from "../button/Button";
import pdf from "../../images/pdf.png";
import Banner from "../banner/Banner";

const Newsletter = () => {
  return (
    <>
      <section>
        <div className="full-width">
            <Banner currentTabName="Newsletter" />
          <div className="main-content-1320">
            <div className="padding-dft">

            <div className="title">
              <p className="maintitle">Newsletter</p>
            </div>
            <div className="news-latter-container">
              <div className="news-flex">
                <div className="news-main">
                  <div className="news-section">
                    <img src={pdf} alt="" srcset="" />
                  </div>
                  <div className="news-containers">20/10/2023</div>
                  <div className="downlod-btn">
                    <Button label="downlod" />
                  </div>
                </div>

                <div className="news-main">
                  <div className="news-section">
                    <img src={pdf} alt="" srcset="" />
                  </div>
                  <div className="news-containers">20/10/2023</div>
                  <div className="downlod-btn">
                    <Button label="downlod" />
                  </div>
                </div>

                <div className="news-main">
                  <div className="news-section">
                    <img src={pdf} alt="" srcset="" />
                  </div>
                  <div className="news-containers">20/10/2023</div>
                  <div className="downlod-btn">
                    <Button label="downlod" />
                  </div>
                </div>

                {/* <div className="news-containers">
                    <div className="news-section">
                  
                    </div>
                  </div>
                  <div className="news-containers">
                    <div className="news-section">4455</div>
                  </div> */}
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
