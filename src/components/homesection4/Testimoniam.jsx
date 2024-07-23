import React from "react";
import "./testimoniam.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import left from "../../images/left.png";

import right from "../../images/right.png";


const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{ ...style, display: "block", background: "black" }} 
        onClick={onClick}
      >
      <img src={right} alt="" srcset=""  className="arrow"/>
      </div>
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white" }} 
        onClick={onClick}
      >
      <img src={left} alt="" srcset="" className="arrow" />
      </div>
    );
  };
const Testimoniam = () => {
    const sliderSettings = {
        dots: true, 
        arrows: true, 
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
        
    }
  return (
    <>
      <section>
        <div className="full-width">
        <div className="width-imgs"></div>
          <div className="main-content-1320">
            <div className="padding-dft">
              <div className="tesmoniom-container">
              <div className="title">
                  <p className="maintitle">Testimonials</p>
                </div>
                <div className="slider-wrapper">
                <Slider {...sliderSettings}>
                
                <div className="tesmonion-main">
                  <img src={img1} alt="" srcset=""  className="tesmo-img"/>
                  <div className="testim-p">
                  <p className="tesmoniam-p">
                    ‘’Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. ’’
                  </p>
                  <p className="alexander">Leslie Alexander</p>
                  </div>
                </div>


                <div className="tesmonion-main">
                  <img src={img1} alt="" srcset="" className="tesmo-img"/>
                  <div className="testim-p">
                  <p className="tesmoniam-p">
                    ‘’Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. ’’
                  </p>
                  <p className="alexander">Leslie Alexander</p>
                  </div>
                </div>


                <div className="tesmonion-main">
                  <img src={img1} alt="" srcset="" className="tesmo-img" />
                  <div className="testim-p">
                  <p className="tesmoniam-p">
                    ‘’Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. ’’
                  </p>
                  <p className="alexander">Leslie Alexander</p>
                  </div>
                </div>
                </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimoniam;
