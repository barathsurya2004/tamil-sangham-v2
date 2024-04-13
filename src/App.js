import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import VasagarVattam from './pages/VasagarVattam';
import { useEffect } from 'react';

function App() {
  const {pathname}= useLocation();
  // console.log(pathname);
  useEffect(()=>{
    window.scrollTo(0,0);

  },[pathname]);
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/events' element ={<Events/>}/>
      <Route path='/vasagar-vattam' element ={<VasagarVattam/>}/>
    </Routes>
  );
}

export default App;
