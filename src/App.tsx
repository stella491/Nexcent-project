
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import OurCients from './components/OurCients';
import "./App.css";
import Unseen from './components/Unseen';
import Membership from './components/Membership';
import Pana from './components/Pana';
import Airpod from './components/Airpod';
import Laptops from './components/Laptops';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Feature from './Pages/Feature';




function App() {


  return (
    <>
     <Navbar/>
      <Hero/>
      <OurCients/>
      <Unseen/>
      <Membership/>
      <Pana/>
      <Airpod/>
      <Laptops/>
      <Footer/>
   

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/service" element={<Service />} />

      </Routes>


    </>
  );
}

export default App
