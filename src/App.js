
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Main } from './components/Main/Main';
import { Routes, Route } from "react-router-dom";
import About from './components/Pages/About/About';



function App() {
  return (
    <div className="App">
      <Navbar/>
      
     
  <Routes>
    <Route path="/about" element={<About/>} />
    <Route path="/" element={<Main/>} />
  </Routes>

      
    </div>
  );
}

export default App;
