import React from "react";
import "../../components/visionmission/VisionMission.css";
import mission from "../../images/mission.png";
import vision from "../../images/vision.png";
function VisionMission() {
  return (
    <>
      <div className="vision-mission-container">
        <div className="vision-mission-card-height mission">
          <div className="vision-mission-card">
            <div className="vision-mission-card-img">
              <img src={mission} alt="mission-one-img" />
            </div>
            <p className="vision-mission-card-text">Our Mission</p>
            <p className="vision-mission-span-text">
              To create a lifelong and worldwide community of DFT alumni through
              increased opportunities for meaningful engagement, thereby
              enhancing networking, volunteer involvement in social work, and
              commitment to fellow DFTians.
            </p>
          </div>
        </div>
        <div className="vision-mission-card-height vision-height">
          <div className="vision-mission-card">
            <div className="vision-mission-card-img">
              <img src={vision} alt="mission-one-img" />
            </div>
            <p className="vision-mission-card-text">Our Vision</p>
            <p className="vision-mission-span-text">
              To promote goodwill and a sense of pride among alumni and
              students. To help and support alumni in developing and spreading
              an entrepreneurial mindset among students. To advise on and
              conduct activities that will motivate and upgrade skill sets.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisionMission;
