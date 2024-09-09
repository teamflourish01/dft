import React, { useEffect, useState } from "react";
import "./gallery.css";
import gallery from "../../images/gallery.png";
import { Link } from "react-router-dom";
import Galleryimg from "./Galleryimg";
import Banner from "../banner/Banner";

const Gallery = () => {
  const [data, setData] = useState(null);

  const url = process.env.REACT_APP_URL;


  // const url = "http://localhost:8080/gallery";

  const getData = async () => {
    try {
      let data = await fetch(`${url}/gallery`);
      data = await data.json();
      setData(data);
      console.log(data);
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
          <Banner currentTabName="Gallery" />
          <div className="main-content-1320">
            <div className="padding-dft"></div>

            <div className="title">
              <p className="maintitle">Gallery</p>
            </div>
            <div className="gried-container">
            {data?.map((item, index) => (
                <div className="grid-gallery" key={index}>
                  {/* Pass the item ID as a parameter in the URL */}
                  <Link to={`/gallery/${item._id}`}>
                    <img
                      src={`${url}/gallery/${item?.Gallery_images[0]}`}
                      alt="gallery"
                      className="gallery-img"
                    />
                  </Link>
                  <p className="gallery-text">
                    DFT Alumni Family Meet 2023 Images
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
