
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import Footer from './components/footer/Footer';
import HomeSectionTwo from './components/homesectiontwo/HomeSectionTwo';
import Navbar from './components/navbar/Navbar';
import HomeSectionThree from './components/homesectionthree/HomeSectionThree';
import About from './pages/about/About';
import News from './pages/newsletter/News';
import Gallerypage from './pages/gallerypage/Gallerypage';
import Galleryimg from './components/gallery/Galleryimg';
// import About from './components/aboutus/About';


function App() {
  return (
    <div className="App">
      <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/newsletter' element={<News/>}/>
        <Route path='/Gallerypage' element={<Gallerypage/>}/>
        <Route path='/Galleryimg' element={<Galleryimg/>}/>



        

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
