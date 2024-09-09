import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../homesectionthree/HomeSectionThree.css";
import card1 from "../../images/cardOne.png";
import card2 from "../../images/cardTwo.png";
import card3 from "../../images/cardThree.png";
import NewsUpdateImg from "../../images/update.png";
import EventImg from "../../images/event.png";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeSectionThree() {
  const [data, setData] = useState([]);

  const [event, setEvent] = useState(null);
  const url = process.env.REACT_APP_URL;


  const urlEvent =`${url}/home`;

  const getData = async () => {
    try {
      let data = await fetch(`${url}/notablealumni`);
      data = await data.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };


  const getEvents = async () =>{
    try {
      let event = await fetch(`${urlEvent}`);
      event = await event.json();
      setEvent(event[0]);
      console.log(event[0],"event")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    AOS.init();
    getData();
    getEvents();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <section>
        <div className="full-width">
          <div className="home-section-three-bgimg ">
            <div className="main-content-1320">
              <div className="padding-dft">
                <div className="section-three">
                  <div className="title">
                    <p className="maintitle section-three-title">
                      Notable Alumni
                    </p>
                  </div>
                  {/* <p className='section-three-title'> Notable Alumni</p> */}
                  <div className="notable-alumni-cards">
                    <Slider {...sliderSettings}>
                      {data?.map((item, index) => (
                        <div className="notable-card-height" key={index}>
                          <div className="notable-card">
                            <div className="notable-card-img">
                              <img
                                src={`${url}/notablealumni/${item?.Notable_images}`}
                                alt={item?.Notable_name}
                                className="img-circle-css"
                              />
                              {console.log('asd',`${url}/${item?.Notable_images}`)}
                            </div>
                            <p className="notable-card-text">
                              {item?.Notable_name}
                              <span className="notable-span-text"></span>(
                              {item?.Notable_designation})
                            </p>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="news-update-event-cards">
                  {/* {event && */}
                    <div
                      className="news-update-event-card first-card"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="news-update-event-card-image">
                        <img src={NewsUpdateImg} alt="news update img" />
                        <div className="overlay"></div>
                        <div className="card-image-text">
                          <p className="card-title">{event?.event_heading[0]}</p>
                          <p className="card-date">{formatDate(event?.event_date[0])}</p>
                        </div>
                      </div>
                      <div className="news-update-event-card-description">
                        <p className="description-text">
                          {event?.event_text[0]}
                        </p>
                      </div>
                    </div>
                    <div
                      className="news-update-event-card"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div className="news-update-event-card-image">
                        <img src={EventImg} alt="news update img" />
                        <div className="overlay"></div>
                        <div className="card-image-text event">
                          <p className="card-title">{event?.event_heading[1]}</p>
                          <p className="card-date">{formatDate(event?.event_date[1])}</p>
                        </div>
                      </div>
                      <div className="news-update-event-card-description">
                        <p className="description-text">
                        {event?.event_text[1]}
                        </p>
                      </div>
                    </div>
                  
                {/* } */}
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














// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../homesectionthree/HomeSectionThree.css";
// import card1 from "../../images/cardOne.png";
// import card2 from "../../images/cardTwo.png";
// import card3 from "../../images/cardThree.png";
// import NewsUpdateImg from "../../images/update.png";
// import EventImg from "../../images/event.png";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function HomeSectionThree() {
//   const [data, setData] = useState([]);

//   const url = "http://localhost:8080/notablealumni";

//   const getData = async () => {
//     try {
//       let data = await fetch(`${url}`);
//       data = await data.json();
//       setData(data);
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     AOS.init();
//     getData();
//   }, []);

//   const sliderSettings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: false,
//           arrows: false,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <section>
//         <div className="full-width">
//           <div className="home-section-three-bgimg ">
//             <div className="main-content-1320">
//               <div className="padding-dft">
//                 <div className="section-three">
//                   <div className="title">
//                     <p className="maintitle section-three-title">
//                       Notable Alumni
//                     </p>
//                   </div>
//                   {/* <p className='section-three-title'> Notable Alumni</p> */}
//                   <div className="notable-alumni-cards">
//                     <Slider {...sliderSettings}>
//                       {data.map((item, index) => (
//                         <div className="notable-card-height" key={index}>
//                           <div className="notable-card">
//                             <div className="notable-card-img">
//                               <img
//                                 src={`http://localhost:8080/images/${item.Notable_images}`}
//                                 alt={item.Notable_name}
//                                 className="img-circle-css"
//                               />
//                             </div>
//                             <p className="notable-card-text">
//                               {item.Notable_name}
//                               <span className="notable-span-text"></span>(
//                               {item.Notable_designation})
//                             </p>
//                           </div>
//                         </div>
//                       ))}
//                     </Slider>
//                   </div>
//                   <div className="news-update-event-cards">
//                     <div
//                       className="news-update-event-card first-card"
//                       data-aos="fade-up"
//                       data-aos-duration="1000"
//                     >
//                       <div className="news-update-event-card-image">
//                         <img src={NewsUpdateImg} alt="news update img" />
//                         <div className="overlay"></div>
//                         <div className="card-image-text">
//                           <p className="card-title">News and update</p>
//                           <p className="card-date">May 14, 2023</p>
//                         </div>
//                       </div>
//                       <div className="news-update-event-card-description">
//                         <p className="description-text">
//                           Department of Fabrication Technology Alumni Family
//                           organised 1st time meet up event on celebrating 4
//                           Decades of DFT for Alumni & Students of DFT
//                         </p>
//                       </div>
//                     </div>
//                     <div
//                       className="news-update-event-card"
//                       data-aos="fade-up"
//                       data-aos-duration="2000"
//                     >
//                       <div className="news-update-event-card-image">
//                         <img src={EventImg} alt="news update img" />
//                         <div className="overlay"></div>
//                         <div className="card-image-text event">
//                           <p className="card-title">Event</p>
//                           <p className="card-date">18 June 2023</p>
//                         </div>
//                       </div>
//                       <div className="news-update-event-card-description">
//                         <p className="description-text">
//                           DFT Alumni Family Meet Location: Five Petals Hotel &
//                           Banquate, Ahmedabad
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default HomeSectionThree;
