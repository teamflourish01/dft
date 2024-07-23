import React from 'react';
import commitee1 from '../../images/commiteeOne.png';
import '../../components/alumnicommitee/AlumniCommitee.css';
import commitee2 from '../../images/commiteeTwo.png';
import commitee3 from '../../images/commiteeThree.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AlumniCommitee() {
 
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
         <div className="title">
                    <p className="maintitle alumni-commitee-title">Alumni Commitiee</p>
                </div>
            <div className="alumni-commitee-container">
                <div className="alumni-commitee-cards">
                <Slider {...sliderSettings}>
                    <div className="alumni-card-height">
                    <div className="alumni-commitee-card">
                        <div className="alumni-commitee-card-img">
                            <img src={commitee1} alt="alumni-commitee-card-one-img" />
                        </div>
                        <p className='alumni-commitee-card-text uppercase'>Mr. haresh mandaliya</p>
                        <p className='alumni-commitee-span-text'>President</p>
                        <p className='alumni-commitee-span-text'>DFT Batch (1983)</p>
                    </div>
                    </div>
                    <div className="alumni-card-height">
                    <div className="alumni-commitee-card">
                        <div className="alumni-commitee-card-img">
                            <img src={commitee2} alt="alumni-commitee-card-one-img" />
                        </div>
                        <p className='alumni-commitee-card-text uppercase'>Mr. mahesh patel</p>
                        <p className='alumni-commitee-span-text'>Secretory
                        </p>
                        <p className='alumni-commitee-span-text'>DFT Batch (1991)</p>
                    </div>
                    </div>
                    <div className="alumni-card-height">
                    <div className="alumni-commitee-card">
                        <div className="alumni-commitee-card-img">
                            <img src={commitee3} alt="alumni-commitee-card-one-img" />
                        </div>
                        <p className='alumni-commitee-card-text uppercase'>Mr. ashok pansuriya</p>
                        <p className='alumni-commitee-span-text'>
                            Treasurer</p>
                        <p className='alumni-commitee-span-text'>DFT Batch (1989)</p>
                    </div>
                    </div>
                    </Slider>
                    {/* <div className="alumni-commitee-card">
                        <div className="alumni-commitee-card-img">
                            <img src={commitee1} alt="alumni-commitee-card-one-img" />
                        </div>
                        <p className='alumni-commitee-card-text uppercase'>Mr. haresh mandaliya</p>
                        <p className='alumni-commitee-span-text'>President</p>
                        <p className='alumni-commitee-span-text'>DFT Batch (1983)</p>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default AlumniCommitee;


// import React, { useEffect, useRef } from 'react';
// import commitee1 from '../../images/commiteeOne.png';
// import commitee2 from '../../images/commiteeTwo.png';
// import commitee3 from '../../images/commiteeThree.png';
// import '../../components/alumnicommitee/AlumniCommitee.css';

// function AlumniCommitee() {
//     const scrollRef = useRef(null);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (scrollRef.current) {
//                 scrollRef.current.scrollRight = scrollRef.current.scrollWidth;
//             }
//         }, 500);

//         // return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="alumni-commitee-container" ref={scrollRef}>
//             <div className="title">
//                 <p className="maintitle">Alumni Committee</p>
//             </div>
//             <div className="alumni-commitee-cards">
//                 <div className="alumni-commitee-card">
//                     <div className="alumni-commitee-card-img">
//                         <img src={commitee1} alt="alumni-commitee-card-one-img" />
//                     </div>
//                     <p className='alumni-commitee-card-text uppercase'>Mr. Haresh Mandaliya</p>
//                     <p className='alumni-commitee-span-text'>President</p>
//                     <p className='alumni-commitee-span-text'>DFT Batch (1983)</p>
//                 </div>
//                 <div className="alumni-commitee-card">
//                     <div className="alumni-commitee-card-img">
//                         <img src={commitee2} alt="alumni-commitee-card-one-img" />
//                     </div>
//                     <p className='alumni-commitee-card-text uppercase'>Mr. Mahesh Patel</p>
//                     <p className='alumni-commitee-span-text'>Secretary</p>
//                     <p className='alumni-commitee-span-text'>DFT Batch (1991)</p>
//                 </div>
//                 <div className="alumni-commitee-card">
//                     <div className="alumni-commitee-card-img">
//                         <img src={commitee3} alt="alumni-commitee-card-one-img" />
//                     </div>
//                     <p className='alumni-commitee-card-text uppercase'>Mr. Ashok Pansuriya</p>
//                     <p className='alumni-commitee-span-text'>Treasurer</p>
//                     <p className='alumni-commitee-span-text'>DFT Batch (1989)</p>
//                 </div>
//                 <div className="alumni-commitee-card">
//                     <div className="alumni-commitee-card-img">
//                         <img src={commitee1} alt="alumni-commitee-card-one-img" />
//                     </div>
//                     <p className='alumni-commitee-card-text uppercase'>Mr. Haresh Mandaliya</p>
//                     <p className='alumni-commitee-span-text'>President</p>
//                     <p className='alumni-commitee-span-text'>DFT Batch (1983)</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AlumniCommitee;
