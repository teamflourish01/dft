import React, { useEffect, useState } from "react";
import "../../components/visionmission/VisionMission.css";
import mission from "../../images/mission.png";
import vision from "../../images/vision.png";


function VisionMission() {
  const [data, setData] = useState(null);
  const url = process.env.REACT_APP_URL;

  const getData = async () => {
    try {
      let data = await fetch(`${url}/about`);
      data = await data.json();
      setData(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
      getData();
  },[]);




  return (
    <>
      <div className="vision-mission-container">
        <div className="vision-mission-card-height mission">
          <div className="vision-mission-card">
            <div className="vision-mission-card-img">
              <img src={mission} alt="mission-one-img" />
            </div>
            <p className="vision-mission-card-text">{data?.Our_mision_heading}</p>
            <p className="vision-mission-span-text">
              {data?.Our_mision_text}
            </p>
          </div>
        </div>
        <div className="vision-mission-card-height vision-height">
          <div className="vision-mission-card">
            <div className="vision-mission-card-img">
              <img src={vision} alt="mission-one-img" />
            </div>
            <p className="vision-mission-card-text">{data?.Our_vision_heading}</p>
            <p className="vision-mission-span-text">
            {data?.Our_vision_text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisionMission;
