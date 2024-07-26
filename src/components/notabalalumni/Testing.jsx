import React, { useEffect, useState } from 'react';
import '../../components/notabalalumni/Notabal.css';
import { SlArrowDown } from "react-icons/sl";
import AOS from 'aos';
import 'aos/dist/aos.css';
import founder from "../../images/founder.png";

function Testing() {

    const [screenSize,setScreenSize]=useState(window.screen.width)
    const [count,setCount]=useState(1010)
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const text = `There are many variations of passages of Lorem 
  Ipsum available, but the majority have suffered alteration in 
  some form, by injected humour, or randomised words which don't 
  look even slightly believable. If you are going to use a passage 
  of Lorem Ipsum, you need to be sure there isn't anything embarrassing 
  hidden in the middle of text. All the Lorem Ipsum generators on the 
  Internet tend to repeat predefined chunks as necessary, making this the 
  first true generator on the Internet. It uses a dictionary of over 200 
  Latin words, combined with a handful of model sentence structures, to
   generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum 
   is therefore always free from repetition, injected humour, or 
   non-characteristic words etc.There are many variations of passages 
   of Lorem Ipsum available, but the majority have suffered alteration in 
   some form, by injected humour, or randomised words which don't look even 
   slightly believable. If you are going to use a passage of Lorem Ipsum, you 
   need to be sure there isn't anything embarrassing hidden in the middle of 
   text. All the Lorem  you need to be sure there isn't anything embarrassing 
  hidden in the middle of text. All the Lorem Ipsum generators on the 
  Internet tend to repeat predefined chunks as necessary, making this the 
  first true generator on the Internet. It uses a dictionary of over 200 
  Latin words, combined with a handful of model sentence structures, to
   generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum 
   is therefore always free from repetition, injected humour, or 
   non-characteristic words etc.There are many variations of passages 
   of Lorem Ipsum available, but the majority have suffered alteration in 
   some form, by injected humour, or randomised words which don't look even 
   slightly believable. If you are going to use a passage of Lorem Ipsum, you 
   need to be sure there isn't anything embarrassing hidden in the middle of 
   text. All the Lorem`;

//   const words = text.split(' ');
//   const firstPart = words.slice(0, 184).join(' ');
//   const secondPart = words.slice(185).join(' ');


const firstPart = text.substring(0, count);
const secondPart = text.substring(count+1);


useEffect(() => {
    AOS.init({
      duration: 400,
    });
    let size=window.screen.width;
    setScreenSize(size)
    setCount(Math.ceil((count*(+screenSize))/1320))
  }, []);
  return (
    <>
      <div className="notable-container">
        <div className="title">
          <p className="maintitle">Notable Alumni</p>
        </div>
        <ol className='notable-ol'>
          <div className="notable-card-one">
            <div className="notable-cards">
              <div className='title-cards'>
                <div className="li-title">
                  <li className='li-class'>
                    Mr. Chandresh Makadiya - (Senior VP, GMM pfaudler)
                  </li>
                </div>
                <div
                  className="icon-down-arrow"
                  onClick={() => handleToggle(0)}
                >
                  <SlArrowDown />
                </div>
              </div>
              {expandedIndex === 0 && (
               <div className="class"  data-aos="fade-up">
               <div className="notabal-card-content">
                 <div className="notable-small-img-container">
                   <div className="notable-small-img-background">
                     <img src={founder} alt="aboutusImg" className='notable-small-img' />
                   </div>
                 </div>
                 {/* <div className="responsive-text"></div> */}
                 {/* <div className='person-detail-desc'>
                   <p className='first-text'>{firstPart}</p>
                   {console.log(count)}
                   {console.log(screenSize,"screensize")}
                 </div> */}
               </div>
               <p className='notabal-card-content-text'>{text}</p>
               </div>
              )}
            </div>
          </div>
        </ol>
      </div>
    </>
  );
}

export default Testing;
