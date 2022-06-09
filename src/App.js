
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Main } from './components/Main/Main';
import { Routes, Route } from "react-router-dom";
import About from './components/Pages/About/About';
import Services from './components/Pages/Services/Services';
import Nfts from './components/Pages/Nfts/Nfts';
import Contact from './components/Pages/Contact/Contact';



function App() {
  return (
    <div className="App">
      <Navbar/>
      
     
  <Routes>
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/NFTS" element={<Nfts/>} />
    <Route path="/" element={<Main/>} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>

      
    </div>
  );
}

export default App;
