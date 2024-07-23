import React from 'react';
import '../../components/visionmission/VisionMission.css';
import mission from '../../images/mission.png';
import vision from '../../images/vision.png';
function VisionMission() {
    return (
        <>
        <div className="vision-mission-container">
            <div className="vision-mission-card-height">
                <div className="vision-mission-card">
                    <div className="vision-mission-card-img">
                        <img src={mission} alt="mission-one-img" />
                    </div>
                    <p className='vision-mission-card-text'>OUR MISION</p>
                        <p className='vision-mission-span-text'>
                            To create a lifelong and worldwide community 
                            of DFT alumni through increased opportunities 
                            for meaningful engagement in order to increase 
                            networking, volunteer involvement in social work 
                            and commitment to DFTians.
                        </p>
                </div>
            </div>
            <div className="vision-mission-card-height">
                <div className="vision-mission-card">
                    <div className="vision-mission-card-img">
                        <img src={vision} alt="mission-one-img" />
                    </div>
                    <p className='vision-mission-card-text'>OUR MISION</p>
                        <p className='vision-mission-span-text'>
                        To promote good will and sense of pride to alumni 
                        and students. To help and support alumni to develop 
                        and spread entrepreneurial mind-set among students. 
                        To advice and conduct activities that shall motivate 
                        and upgrade skill sets.
                        </p>
                </div>
            </div>
            </div>
        </>
    );
}

export default VisionMission;
