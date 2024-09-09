// import React, { useEffect, useState } from "react";
// import gimg from "../../images/gimg.png";
// import "./gallery.css";
// import Button from "../button/Button";

// const Galleryimg = () => {
//   const [data, setData] = useState(null);

//   const url = "http://localhost:8080/gallery";

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
//     getData();
//   }, []);

//   return (
//     <>
//       <section>
//         <div className="full-width">
//           <div className="main-content-1320">
//             <div className="padding-dft"></div>

//             <div className="gallery-padding">
//               <div className="title">
//                 <p className="maintitle">DFT Alumni Family Meet 2023 Images</p>
//               </div>
//               <div className="gimg-container">
//                 {data &&
//                   data[2] &&
//                   data[2].Gallery_images.map((image, index) => (
//                     <div key={index}>
//                       <img
//                         src={`${url}/${image}`}
//                         alt={`Gallery Image ${index + 1}`}
//                         className="gimgs"
//                       />
//                     </div>
//                   ))}
//               </div>

//               <div className="btn-gallery">
//                 <Button label="View More" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Galleryimg;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./gallery.css";
import Button from "../button/Button";

const Galleryimg = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [data, setData] = useState(null);
  const url = process.env.REACT_APP_URL;

  const getData = async () => {
    try {
      let response = await fetch(`${url}/gallery/${id}`); // Fetch data for the specific ID
      let data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  return (
    <>
      <section>
        <div className="full-width">
          <div className="main-content-1320">
            <div className="padding-dft"></div>
            <div className="gallery-padding">
              <div className="title">
                <p className="maintitle">DFT Alumni Family Meet 2023 Images</p>
              </div>
              <div className="gimg-container">
                {data?.Gallery_images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={`${url}/gallery/${image}`}
                      alt={`Gallery Image ${index + 1}`}
                      className="gimgs"
                    />
                  </div>
                ))}
              </div>
             
               <div className="btn-gallery">
               <a
                    href={data?.gallary_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="devlopedby"
                  >
                 <Button label="View More" />
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Galleryimg;

