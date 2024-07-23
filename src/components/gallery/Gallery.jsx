import React from "react";
import "./gallery.css";
import gallery from "../../images/gallery.png";
import { Link } from "react-router-dom";
import Galleryimg from "./Galleryimg";
const Gallery = () => {
  return (
    <>
      <section>
        <div className="full-width">
          <div className="main-content-1320">
            <div className="padding-dft"></div>
            <div className="title">
              <p className="maintitle">Gallery</p>
            </div>
            <div className="gried-container">
              <div className="grid-gallery">
                <Link to="/Galleryimg">
                  <img src={gallery} alt="gallery" className="gallery-img" />
                </Link>
                <p className="gallery-text">
                  DFT Alumni Family Meet 2023 Images
                </p>
              </div>

              <div className="grid-gallery">
                <Link to="/Galleryimg">
                  <img src={gallery} alt="gallery" className="gallery-img" />
                </Link>
                <p className="gallery-text">
                  DFT Alumni Family Meet 2023 Images
                </p>
              </div>

              <div className="grid-gallery">
                <Link to="/Galleryimg">
                  <img src={gallery} alt="gallery" className="gallery-img" />
                </Link>
                <p className="gallery-text">
                  DFT Alumni Family Meet 2023 Images
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
