import React, { useEffect } from 'react';
import aboutImg from '../../images/about.png';
import './HomeSectionTwo.css';
import Button from '../button/Button.jsx';
import aboutBg from '../../images/aboutBg.png';


function HomeSectionTwo() {
    return (
        <>
            <section>
                <div className='full-width '>
                    <div className="about-background animate__animated animate__fadeInLeft animate__slower" ></div>
                        <div className="main-content-1320">
                            <div className="padding-dft">
                                <div className="about-us">
                                    <p className='about-title-responsive animate__animated animate__fadeInRight animate__slower'>About DFT Alumni</p>
                                    <div className="about-img-container animate__animated animate__fadeInLeft animate__slower" >
                                        <div className="about-img-background">
                                            <img src={aboutImg} alt="aboutusImg" className='about-img' />
                                        </div>
                                    </div>
                                    <div className="about-txt animate__animated animate__fadeInRight animate__slower">
                                        <p className='about-title'>About DFT Alumni</p>
                                        <p className='about-description'>
                                            We are a group of professionals passed out from Diploma in
                                            Fabrication Technology (DFT), Sir Bhavsinhji Polytechnic
                                            institute, Bhavnagar, Gujarat. Diploma in Fabrication Technology
                                            is a specialized branch which prepares the students in the core area
                                            of Fabrication & Welding. Our Alumni are Business Professionals & Working
                                            with reputable companies across the world like Larsen & Toubro, Reliance Group,
                                            GMM Pfaudler, Inox Group, TEMA, ISGEC, Godrej, Adani Group, Anup Engineering, SGS,
                                            TUV etc.</p>
                                        <div className="btn-about">
                                            <Button label="Read More" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  
                </div>
            </section>
        </>
    );
}

export default HomeSectionTwo;
