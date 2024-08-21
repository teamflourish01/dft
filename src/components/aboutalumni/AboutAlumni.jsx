import React, { useEffect, useRef, useState } from 'react';
import aboutImg from '../../images/aboutfullimage.png';
import '../../components/homesectiontwo/HomeSectionTwo.css';
import '../../components/aboutalumni/AboutAlumni.css';
import Button from '../button/Button.jsx';
import aboutBg from '../../images/aboutBg.png';

function AboutAlumni() {
    const [data, setData] = useState(null);

    const url = "http://localhost:8080/about";
  
    const getData = async () => {
      try {
        let data = await fetch(`${url}`);
        data = await data.json();
        setData(data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(()=>{
        getData();
    },[]);
     
    return (
        <section>
            <div className='full-width'>
                <div className="main-content-1320">
                    <div className="padding-dft">
                        <div className="about-us-page">
                            {/* <p className='about-title-responsive '>About DFT Alumni</p> */}
                            <p className="maintitle about-title-responsive ">{data?.About_heading}</p>
                            <div className="about-img-container ">
                                <div className="about-img-background">
                                    {/* <img src={aboutImg} alt="aboutusImg" className='about-img' /> */}
                                    <img src={`http://localhost:8080/aboutimage/${data?.About_images}`} alt="aboutusImg" className='about-img' />
                                    
                                </div>
                            </div>
                            <div className="about-txt">
                            <div>
                                    <p className="maintitle about-title">{data?.About_heading}</p>
                                </div>
                                {/* <p className='about-title'>About DFT Alumni</p> */}
                                <p className='about-description'>
                                {data?.About_text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutAlumni;
