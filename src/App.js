import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Main } from './components/Main/Main';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
     
  <Routes>
    <Route path="/" element={""} />
    <Route path="/" element={""} />
    <Route path="/" element={""} />
    <Route path="/" element={""} />
    <Route path="/" element={""} />
    <Route path="/" element={""} />
  </Routes>

      
    </div>
  );
}

export default App;
