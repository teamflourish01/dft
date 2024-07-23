import React from 'react'
import Purpose from '../../components/purposedft/Purpose'
import React from 'react';
import Banner from '../../components/banner/Banner';
import '../about/About.css';
import VisionMission from '../../components/visionmission/VisionMission';
import AlumniCommitee from '../../components/alumnicommitee/AlumniCommitee';
import AboutAlumni from '../../components/aboutalumni/AboutAlumni';

const About = () => {
  return (
    
     
    
    <>
      <section className='About'>
        <div className='full-width'>
        <Banner currentTabName="About DFT Alumni" />
          <div className="main-content-1320">
            <div className="padding-dft">
              <AboutAlumni />
              <VisionMission />
              <AlumniCommitee/>
            </div>
          </div>
        </div>
      </section>
      <Purpose/>
    </>
  )
}

export default About