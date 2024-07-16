
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import Footer from './components/footer/Footer';

import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
