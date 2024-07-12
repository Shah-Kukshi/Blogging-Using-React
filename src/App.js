
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header.js";  
import Features from './components/pages/Features.js';
import AboutUs from './components/pages/AboutUs.js';
import Join from './components/pages/Join.js'
import './components/assets/css/style.css';
import Home from './components/pages/Home.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Join" element={<Join />} />
      </Routes>
    </div>
    <Footer  />
  </BrowserRouter>
    
  );
}

export default App;
