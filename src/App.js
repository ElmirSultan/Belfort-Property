import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Mainhome from './components/Mainhome';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PropertyAgency from './components/PropertyAgency';
import SmartHome from './components/SmartHome';
import AboutUs from './components/AboutUs';
import Error from './components/Error'
import Standartlist from './components/Standartlist';
import Residence from './components/Residence';
import Apartmentlist from './components/Apartmentlist';
import Welcomeaprtmnt from './components/Welcomeaprtmnt';
import Mortrage from './components/Mortrage';
import Faq from './components/Faq';
import Blog from './components/Blog';
import Register from './components/Register';
import GridLoader from "react-spinners/GridLoader";
import { useState,useEffect } from 'react';
import Scrollmagic from './components/Scrollmagic';
// Aos animations
import AOS from 'aos'
import 'aos/dist/aos.css'
import ComingSoon from './components/ComingSoon';
AOS.init();
function App() {
  
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2500)
  },[])
  return (
    <div className="App">
     {
      loading?
      <GridLoader

        color={'burlywood'}
        loading={loading}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      <div className='pages'>
      <BrowserRouter>
      <Header />
      <Routes>

      <Route path='/' element={<Mainhome />} />
       <Route path='/property-agency' element={<PropertyAgency />} />
      <Route path='/smart-home' element={<SmartHome />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/standart-list' element={<Standartlist />} />
      <Route path='/residence' element={<Residence />} />
      <Route path='/apartment-list' element ={<Apartmentlist />} />
      <Route path='/apartment' element={<Welcomeaprtmnt />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/register' element={<Register />} />
      <Route path='/mortrage' element={<Mortrage />} />
      <Route path='*' element={<Error />} />
      <Route path='/belfort' element={<Scrollmagic />} />
      <Route path='/coming-soon' element={<ComingSoon />} />
      </Routes>
      
      <Footer />
      </BrowserRouter>
     
      </div>
}
     
     

    </div>
  );
}

export default App;
