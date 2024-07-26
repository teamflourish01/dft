import React, { useEffect, useRef } from 'react';
import aboutImg from '../../images/aboutfullimage.png';
import '../../components/homesectiontwo/HomeSectionTwo.css';
import Button from '../button/Button.jsx';
import aboutBg from '../../images/aboutBg.png';

function AboutAlumni() {
     
    return (
        <section>
            <div className='full-width'>
                <div className="main-content-1320">
                    <div className="padding-dft">
                        <div className="about-us">
                            {/* <p className='about-title-responsive '>About DFT Alumni</p> */}
                            <p className="maintitle about-title-responsive ">About DFT Alumni</p>
                            <div className="about-img-container ">
                                <div className="about-img-background">
                                    <img src={aboutImg} alt="aboutusImg" className='about-img' />
                                </div>
                            </div>
                            <div className="about-txt">
                            <div>
                                    <p className="maintitle about-title">About DFT Alumni</p>
                                </div>
                                {/* <p className='about-title'>About DFT Alumni</p> */}
                                <p className='about-description'>
                                    We are a group of professionals passed out from Diploma in
                                    Fabrication Technology (DFT), Sir Bhavsinhji Polytechnic
                                    institute, Bhavnagar, Gujarat. Diploma in Fabrication Technology
                                    is a specialized branch which prepares the students in the core area
                                    of Fabrication & Welding. Our Alumni are Business Professionals & Working
                                    with reputable companies across the world like Larsen & Toubro, Reliance Group,
                                    GMM Pfaudler, Inox Group, TEMA, ISGEC, Godrej, Adani Group, Anup Engineering, SGS,
                                    TUV etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutAlumni;
