import React, { useEffect, useState } from "react";
import "../../components/notabalalumni/Notabal.css";
import { SlArrowDown } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";

function Notabal() {
  const [data, setData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const url = process.env.REACT_APP_URL;

  const getData = async () => {
    try {
      let response = await fetch(`${url}/notablealumnipage`);
      let result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 400,
    });
    getData();
  }, []);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="notable-container">
      <div className="title">
        <p className="maintitle">Notable Alumni</p>
      </div>
      <ol className="notable-ol">
        {data.map((item, index) => (
          <div key={item._id} className={`notable-card-${index + 1}`}>
            <div className="notable-cards">
              <div className="title-cards">
                <div className="li-title">
                  <li className="li-class">
                    {item.notableAlumniPages_name} - {item.notableAlumniPages_designation}
                  </li>
                </div>
                <div className="icon-down-arrow" onClick={() => handleToggle(index)}>
                  <SlArrowDown />
                </div>
              </div>
              {expandedIndex === index && (
                <div className="notabal-card-content">
                  <p data-aos="fade-up">
                    {item.notableAlumniPages_text}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
}

export default Notabal;















// import React, { useEffect, useState } from "react";
// import "../../components/notabalalumni/Notabal.css";
// import { IoIosArrowDown } from "react-icons/io";
// import { SlArrowDown } from "react-icons/sl";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Notabal() {
//   const [data, setData] = useState(null);

//   const url = "http://localhost:8080/notablealumnipage";

//   const getData = async () => {
//     try {
//       let data = await fetch(`${url}`);
//       data = await data.json();
//       console.log(data);
//       setData(data[0]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     AOS.init({
//       duration: 400,
//     });
//     getData();
//   }, []);

//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const handleToggle = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <>
//       <div className="notable-container">
//         <div className="title">
//           <p className="maintitle">Notable Alumni</p>
//         </div>
//         <ol className="notable-ol">
//           <div className="notable-card-one">
//             <div className="notable-cards">
//               <div className="title-cards">
//                 <div className="li-title">
//                   <li className="li-class">
//                     Mr. Chandresh Makadiya - (Senior VP, GMM pfaudler)
//                   </li>
//                 </div>
//                 <div
//                   className="icon-down-arrow"
//                   onClick={() => handleToggle(0)}
//                 >
//                   <SlArrowDown />
//                 </div>
//               </div>
//               {expandedIndex === 0 && (
//                 <div className="notabal-card-content">
//                   <p data-aos="fade-up">
//                     There are many variations of passages of Lorem Ipsum
//                     available, but the majority have suffered alteration in some
//                     form, by injected humour, or randomised words which don't
//                     look even slightly believable. If you are going to use a
//                     passage of Lorem Ipsum, you need to be sure there isn't
//                     anything embarrassing hidden in the middle of text. All the
//                     Lorem Ipsum generators on the Internet tend to repeat
//                     predefined chunks as necessary, making this the first true
//                     generator on the Internet. It uses a dictionary of over 200
//                     Latin words, combined with a handful of model sentence
//                     structures, to generate Lorem Ipsum which looks reasonable.
//                     The generated Lorem Ipsum is therefore always free from
//                     repetition, injected humour, or non-characteristic words
//                     etc.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="notable-card-two">
//             <div className="notable-cards">
//               <div className="title-cards">
//                 <div className="li-title">
//                   <li className="li-class">
//                     Mr. Gautam Gohil - (Operation Head - Gujrat, Inox India Pvt.
//                     Ltd.)
//                   </li>
//                 </div>
//                 <div
//                   className="icon-down-arrow"
//                   onClick={() => handleToggle(1)}
//                 >
//                   <SlArrowDown />
//                 </div>
//               </div>
//               {expandedIndex === 1 && (
//                 <div className="notabal-card-content">
//                   <p data-aos="fade-up">
//                     There are many variations of passages of Lorem Ipsum
//                     available, but the majority have suffered alteration in some
//                     form, by injected humour, or randomised words which don't
//                     look even slightly believable. If you are going to use a
//                     passage of Lorem Ipsum, you need to be sure there isn't
//                     anything embarrassing hidden in the middle of text. All the
//                     Lorem Ipsum generators on the Internet tend to repeat
//                     predefined chunks as necessary, making this the first true
//                     generator on the Internet. It uses a dictionary of over 200
//                     Latin words, combined with a handful of model sentence
//                     structures, to generate Lorem Ipsum which looks reasonable.
//                     The generated Lorem Ipsum is therefore always free from
//                     repetition, injected humour, or non-characteristic words
//                     etc.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="notable-card-three">
//             <div className="notable-cards">
//               <div className="title-cards">
//                 <div className="li-title">
//                   <li className="li-class">
//                     Mr. Haresh Akhja - (Operation Head - Praj Industries Ltd.){" "}
//                   </li>
//                 </div>
//                 <div
//                   className="icon-down-arrow"
//                   onClick={() => handleToggle(2)}
//                 >
//                   <SlArrowDown />
//                 </div>
//               </div>
//               {expandedIndex === 2 && (
//                 <div className="notabal-card-content">
//                   <p data-aos="fade-up">
//                     There are many variations of passages of Lorem Ipsum
//                     available, but the majority have suffered alteration in some
//                     form, by injected humour, or randomised words which don't
//                     look even slightly believable. If you are going to use a
//                     passage of Lorem Ipsum, you need to be sure there isn't
//                     anything embarrassing hidden in the middle of text. All the
//                     Lorem Ipsum generators on the Internet tend to repeat
//                     predefined chunks as necessary, making this the first true
//                     generator on the Internet. It uses a dictionary of over 200
//                     Latin words, combined with a handful of model sentence
//                     structures, to generate Lorem Ipsum which looks reasonable.
//                     The generated Lorem Ipsum is therefore always free from
//                     repetition, injected humour, or non-characteristic words
//                     etc.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="notable-card-four">
//             <div className="notable-cards">
//               <div className="title-cards">
//                 <div className="li-title">
//                   <li className="li-class">
//                     Mr. Dhaval Vora - (SGS Head, Baroda)
//                   </li>
//                 </div>
//                 <div
//                   className="icon-down-arrow"
//                   onClick={() => handleToggle(3)}
//                 >
//                   <SlArrowDown />
//                 </div>
//               </div>
//               {expandedIndex === 3 && (
//                 <div className="notabal-card-content">
//                   <p data-aos="fade-up">
//                     There are many variations of passages of Lorem Ipsum
//                     available, but the majority have suffered alteration in some
//                     form, by injected humour, or randomised words which don't
//                     look even slightly believable. If you are going to use a
//                     passage of Lorem Ipsum, you need to be sure there isn't
//                     anything embarrassing hidden in the middle of text. All the
//                     Lorem Ipsum generators on the Internet tend to repeat
//                     predefined chunks as necessary, making this the first true
//                     generator on the Internet. It uses a dictionary of over 200
//                     Latin words, combined with a handful of model sentence
//                     structures, to generate Lorem Ipsum which looks reasonable.
//                     The generated Lorem Ipsum is therefore always free from
//                     repetition, injected humour, or non-characteristic words
//                     etc.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="notable-card-five">
//             <div className="notable-cards">
//               <div className="title-cards">
//                 <div className="li-title">
//                   <li className="li-class">Mr. Vipul Chapla</li>
//                 </div>
//                 <div
//                   className="icon-down-arrow"
//                   onClick={() => handleToggle(4)}
//                 >
//                   <SlArrowDown />
//                 </div>
//               </div>
//               {expandedIndex === 4 && (
//                 <div className="notabal-card-content">
//                   <p data-aos="fade-up">
//                     There are many variations of passages of Lorem Ipsum
//                     available, but the majority have suffered alteration in some
//                     form, by injected humour, or randomised words which don't
//                     look even slightly believable. If you are going to use a
//                     passage of Lorem Ipsum, you need to be sure there isn't
//                     anything embarrassing hidden in the middle of text. All the
//                     Lorem Ipsum generators on the Internet tend to repeat
//                     predefined chunks as necessary, making this the first true
//                     generator on the Internet. It uses a dictionary of over 200
//                     Latin words, combined with a handful of model sentence
//                     structures, to generate Lorem Ipsum which looks reasonable.
//                     The generated Lorem Ipsum is therefore always free from
//                     repetition, injected humour, or non-characteristic words
//                     etc.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </ol>
//       </div>
//     </>
//   );
// }

// export default Notabal;
