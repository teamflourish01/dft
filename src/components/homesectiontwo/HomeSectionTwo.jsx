import React, { useEffect, useRef, useState } from "react";
import aboutImg from "../../images/aboutfullimage.png";

import "../../components/homesectiontwo/HomeSectionTwo.css";
import Button from "../button/Button.jsx";
import aboutBg from "../../images/aboutBg.png";

function HomeSectionTwo() {
  const aboutSectionRef = useRef(null);
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

  useEffect(() => {
    const aboutSection = aboutSectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }
    getData();

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <section ref={aboutSectionRef}>
      <div className="full-width">
        <div className="about-background about-page fade-on-scroll"></div>
        <div className="main-content-1320">
          <div className="padding-dft">
            <div className="about-us">
              <p className="maintitle fontt about-title-responsive animate__animated animate__fadeInRight animate__slower">
                {data?.About_heading}
              </p>
              {/* {data?.About_images && ( */}
                <div className="about-img-container animate__animated animate__fadeInLeft animate__slower">
                <div className="about-img-background">
                  <img
                    src={`http://localhost:8080/aboutimage/${data?.About_images}`}
                    alt="aboutusImg"
                    className="about-img"
                  />
                  </div>
                </div>
              {/* )} */}
              {data && (
                <div className="about-txt animate__animated animate__fadeInRight animate__slower">
                  {/* <p className='about-title'>About DFT Alumni</p> */}
                  <div>
                    <p className="maintitle about-title">
                      {/* {data[0].About_heading} */}
                      {/* xyz */}
                      {data?.About_heading}
                    </p>
                  </div>
                  <p className="about-description">
                    {console.log(data?.About_text, "about")}
                    {data?.About_text}
                    {/* We are a group of professionals passed out from Diploma in
                  Fabrication Technology (DFT), Sir Bhavsinhji Polytechnic
                  institute, Bhavnagar, Gujarat. Diploma in Fabrication
                  Technology is a specialized branch which prepares the students
                  in the core area of Fabrication & Welding. Our Alumni are
                  Business Professionals & Working with reputable companies
                  across the world like Larsen & Toubro, Reliance Group, GMM
                  Pfaudler, Inox Group, TEMA, ISGEC, Godrej, Adani Group, Anup
                  Engineering, SGS, TUV etc. */}
                  </p>
                  <div className="btn-about about-page">
                    <a href="/about">
                      <Button label="Read More" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSectionTwo;

// import React, { useEffect, useRef } from "react";
// import aboutImg from "../../images/aboutfullimage.png";

// import "../../components/homesectiontwo/HomeSectionTwo.css";
// import Button from "../button/Button.jsx";
// import aboutBg from "../../images/aboutBg.png";

// function HomeSectionTwo() {
//   const aboutSectionRef = useRef(null);

//   useEffect(() => {
//     const aboutSection = aboutSectionRef.current;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate");
//           } else {
//             entry.target.classList.remove("animate");
//           }
//         });
//       },
//       { threshold: 0.1 } // Adjust this value as needed
//     );

//     if (aboutSection) {
//       observer.observe(aboutSection);
//     }

//     return () => {
//       if (aboutSection) {
//         observer.unobserve(aboutSection);
//       }
//     };
//   }, []);

//   return (
//     <section ref={aboutSectionRef}>
//       <div className="full-width">
//         <div className="about-background about-page fade-on-scroll"></div>
//         <div className="main-content-1320">
//           <div className="padding-dft">
//             <div className="about-us">
//               <p className="maintitle fontt about-title-responsive animate__animated animate__fadeInRight animate__slower">
//                 About DFT Alumni
//               </p>
//               {/* <p className='about-title-responsive animate__animated animate__fadeInRight animate__slower'>About DFT Alumni</p> */}
//               <div className="about-img-container animate__animated animate__fadeInLeft animate__slower">
//                 <div className="about-img-background">
//                   <img src={aboutImg} alt="aboutusImg" className="about-img" />
//                 </div>
//               </div>
//               <div className="about-txt animate__animated animate__fadeInRight animate__slower">
//                 {/* <p className='about-title'>About DFT Alumni</p> */}
//                 <div>
//                   <p className="maintitle about-title">About DFT Alumni</p>
//                 </div>
//                 <p className="about-description">
//                   We are a group of professionals passed out from Diploma in
//                   Fabrication Technology (DFT), Sir Bhavsinhji Polytechnic
//                   institute, Bhavnagar, Gujarat. Diploma in Fabrication
//                   Technology is a specialized branch which prepares the students
//                   in the core area of Fabrication & Welding. Our Alumni are
//                   Business Professionals & Working with reputable companies
//                   across the world like Larsen & Toubro, Reliance Group, GMM
//                   Pfaudler, Inox Group, TEMA, ISGEC, Godrej, Adani Group, Anup
//                   Engineering, SGS, TUV etc.
//                 </p>
//                 <div className="btn-about about-page">
//                   <a href="/about">
//                     <Button label="Read More" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HomeSectionTwo;
