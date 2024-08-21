import React, { useEffect, useState } from "react";
import "./newsletter.css";
import Button from "../button/Button";
import pdf from "../../images/pdf.png";
import Banner from "../banner/Banner";

const Newsletter = () => {
  const [data, setData] = useState(null);

  const url = "http://localhost:8080/newsletter";

  const getData = async () => {
    try {
      let response = await fetch(url);
      let result = await response.json();
      console.log(result);
      setData(result[0]); // Assuming only one item for now
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section>
        <div className="full-width">
          <Banner currentTabName="Newsletter" />
          <div className="main-content-1320">
            <div className="padding-dft">
              <div className="title">
                <p className="maintitle">Newsletter</p>
              </div>
              <div className="news-latter-container">
                <div className="news-flex">
                  {data && (
                    <div className="news-main">
                      <div className="news-section">
                        <img src={pdf} alt="" />
                      </div>
                      <div className="news-containers"><b>{data.Newsletter_name}</b></div>
                      <div className="downlod-btn">
                        <a href={`http://localhost:8080/newsletter/${data.Newsletter_pdfs}`}>
                        <Button 
                          label="download" 
                          />
                          </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;









// import React, { useEffect, useState } from "react";
// import "./newsletter.css";
// import Button from "../button/Button";
// import pdf from "../../images/pdf.png";
// import Banner from "../banner/Banner";

// const Newsletter = () => {

//   const[data, setData] = useState(null);

//   const url = "http://localhost:8080/newsletter";

//   const getData = async () =>{
//     try {
//       let data = await fetch(`${url}`);
//       data = await data.json();
//       console.log(data);
//       setData(data[0]);
      
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   const handleDownload = (fileUrl) => {
//     const link = document.createElement('a');
//     link.href = fileUrl;
//     link.setAttribute('download', true); 
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
//   };

//   useEffect(() =>{
//     getData();
//   },[]);


//   return (
//     <>
//       <section>
//         <div className="full-width">
//             <Banner currentTabName="Newsletter" />
//           <div className="main-content-1320">
//             <div className="padding-dft">

//             <div className="title">
//               <p className="maintitle">Newsletter</p>
//             </div>
//             <div className="news-latter-container">
//               <div className="news-flex">
//                 {/* {data.map((items,index) => ( */}
//                 {/* <div className="news-main" key={index}> */}
//                 <div className="news-main">

//                   <div className="news-section">
//                     <img src={pdf} alt="" srcset="" />
//                   </div>
//                   <div className="news-containers"><b>{data?.Newsletter_name}</b></div>
//                   <div className="downlod-btn">
//                     <Button label="download" onClick={() => handleDownload(`http://localhost:8080/uploads/newsletter${data.Newsletter_pdfs}`)}/>
//                   </div>
//                 </div>
//                 {/* ))} */}
// {/* 
//                 <div className="news-main">
//                   <div className="news-section">
//                     <img src={pdf} alt="" srcset="" />
//                   </div>
//                   <div className="news-containers"><b>20/10/2023</b></div>
//                   <div className="downlod-btn">
//                     <Button label="download" />
//                   </div>
//                 </div>

//                 <div className="news-main">
//                   <div className="news-section">
//                     <img src={pdf} alt="" srcset="" />
//                   </div>
//                   <div className="news-containers"><b>20/10/2023</b></div>
//                   <div className="downlod-btn">
//                     <Button label="download" />
//                   </div>
//                 </div> */}
//               </div>
//             </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Newsletter;












// import React, { useState } from "react";
// import "./newsletter.css";
// import Button from "../button/Button";
// import pdf from "../../images/pdf.png";
// import Banner from "../banner/Banner";

// const Newsletter = () => {

//   const[data, setData] = useState(null);

//   const url = "http://localhost:8080/newsletter";

//   const getData = async () =>{
//     try {
//       let data = await fetch(`${url}`);
//       data = await data.json();
//       setData(data[0]);
      
//     } catch (error) {
//       console.log(error);
//     }
//   }


//   return (
//     <>
//       <section>
//         <div className="full-width">
//             <Banner currentTabName="Newsletter" />
//           <div className="main-content-1320">
//             <div className="padding-dft">

//             <div className="title">
//               <p className="maintitle">Newsletter</p>
//             </div>
//             <div className="news-latter-container">
//               <div className="news-flex">
//                 <div className="news-main">
//                   <div className="news-section">
//                     <img src={pdf} alt="" srcset="" />
//                   </div>
//                   <div className="news-containers"><b>20/10/2023</b></div>
//                   <div className="downlod-btn">
//                     <Button label="download" />
//                   </div>
//                 </div>

//                 <div className="news-main">
//                   <div className="news-section">
//                     <img src={pdf} alt="" srcset="" />
//                   </div>
//                   <div className="news-containers"><b>20/10/2023</b></div>
//                   <div className="downlod-btn">
//                     <Button label="download" />
//                   </div>
//                 </div>

//                 <div className="news-main">
//                   <div className="news-section">
//                     <img src={pdf} alt="" srcset="" />
//                   </div>
//                   <div className="news-containers"><b>20/10/2023</b></div>
//                   <div className="downlod-btn">
//                     <Button label="download" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Newsletter;
