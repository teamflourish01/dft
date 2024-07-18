
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import Footer from './components/footer/Footer';
import HomeSectionTwo from './components/homesectiontwo/HomeSectionTwo';
import Navbar from './components/navbar/Navbar';
import HomeSectionThree from './components/homesectionthree/HomeSectionThree';
// import About from './components/aboutus/About';


function App() {
  return (
    <div className="App">
      <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
