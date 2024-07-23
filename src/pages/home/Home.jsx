import React from 'react'
import Homesection from '../../components/Homesection1/Homesection'

import HomeSectionTwo from '../../components/homesectiontwo/HomeSectionTwo'
import HomeSectionThree from '../../components/homesectionthree/HomeSectionThree'
import Testimoniam from '../../components/homesection4/Testimoniam'
import Contact from '../../components/contact/Contact'

const Home = () => {
  return (
    <div>
      <Homesection/>
      <HomeSectionTwo/>
      <HomeSectionThree/>
      <Testimoniam/>
      <Contact/>
      
      
    </div>
  )
}

export default Home
