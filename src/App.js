import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import VasagarVattam from './pages/VasagarVattam';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='events' element ={<Events/>}/>
      <Route path='vasagar-vattam' element ={<VasagarVattam/>}/>
    </Routes>
  );
}

export default App;
