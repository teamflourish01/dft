import React from 'react';
import '../../components/banner/Banner.css';
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';


function Banner({ currentTabName }) {
    return (
        <>
            <div className="banner-container">
                <div className="banner-title">
                    <p className="home-tab">
                    <Link to="/" className="pointer">Home</Link>
                        <span className="icon"><MdOutlineArrowForwardIos /></span>
                        <span className="current-tab-name">
                            {currentTabName}
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Banner;
