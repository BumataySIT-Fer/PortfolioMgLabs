import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Links/Home';
import NavBar from './Links/Navbar';
import Prelim from './Links/Prelim';
import Midterm from './Links/Midterm';
import Finals from './Links/Finals';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter basename="/Portfolio_Finals">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/prelim" element={<Prelim/>}/>
          <Route path="/midterm" element={<Midterm/>}/>
          <Route path="/finals" element={<Finals/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App