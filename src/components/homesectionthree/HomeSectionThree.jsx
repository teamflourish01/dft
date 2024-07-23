import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../homesectionthree/HomeSectionThree.css';
import card1 from '../../images/cardOne.png';
import card2 from '../../images/cardTwo.png';
import card3 from '../../images/cardThree.png';
import NewsUpdateImg from '../../images/update.png';
import EventImg from '../../images/event.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomeSectionThree() {
    useEffect(() => {
        AOS.init();
    }, []);


    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <>
            <section>
                <div className='full-width'>
                    <div className="home-section-three-bgimg">
                        <div className="main-content-1320">
                            <div className="padding-dft">
                                <div className="section-three">
                                    <div className="title">
                                        <p className="maintitle section-three-title">Notable Alumni</p>
                                    </div>
                                    {/* <p className='section-three-title'> Notable Alumni</p> */}
                                    <div className="notable-alumni-cards">

                                        <Slider {...sliderSettings}>
                                            <div className="notable-card-height">
                                                <div className="notable-card">
                                                    <div className="notable-card-img">
                                                        <img src={card1} alt="card-one-img" />
                                                    </div>
                                                    <p className='notable-card-text'>Mr. Chandresh Makadiya
                                                        <span className='notable-span-text'></span>(Senior VP, GMM pfaudler)</p>
                                                </div>
                                            </div>
                                            <div className="notable-card-height">

                                                <div className="notable-card">
                                                    <div className="notable-card-img">
                                                        <img src={card2} alt="card-one-img" />
                                                    </div>
                                                    <p className='notable-card-text center'>Mr. Gautam Gohil
                                                        <span className='notable-span-text'></span>(Operation Head - Gujrat, Inox India Pvt. Ltd.)</p>
                                                </div>
                                            </div>
                                            <div className="notable-card-height">
                                                <div className="notable-card">
                                                    <div className="notable-card-img">
                                                        <img src={card3} alt="card-one-img" />
                                                    </div>
                                                    <p className='notable-card-text'>Mr. Haresh Akhja
                                                        <span className='notable-span-text'></span>(Operation Head - Praj Industries Ltd.)</p>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                    <div className="news-update-event-cards">
                                        <div className="news-update-event-card first-card" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="news-update-event-card-image">
                                                <img src={NewsUpdateImg} alt="news update img" />
                                                <div className="overlay"></div>
                                                <div className="card-image-text">
                                                    <p className="card-title">News and update</p>
                                                    <p className="card-date">May 14, 2023</p>
                                                </div>
                                            </div>
                                            <div className="news-update-event-card-description">
                                                <p className='description-text'>
                                                    Department of Fabrication Technology Alumni
                                                    Family organised 1st time meet up event on
                                                    celebrating 4 Decades of DFT for Alumni &
                                                    Students of DFT
                                                </p>
                                            </div>
                                        </div>
                                        <div className="news-update-event-card" data-aos="fade-up" data-aos-duration="2000">
                                            <div className="news-update-event-card-image">
                                                <img src={EventImg} alt="news update img" />
                                                <div className="overlay"></div>
                                                <div className="card-image-text event">
                                                    <p className="card-title">Event</p>
                                                    <p className="card-date">18 June 2023</p>
                                                </div>
                                            </div>
                                            <div className="news-update-event-card-description">
                                                <p className='description-text'>
                                                    DFT Alumni Family Meet
                                                    Location: Five Petals Hotel & Banquate, Ahmedabad
                                                </p>
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
}

export default HomeSectionThree;
