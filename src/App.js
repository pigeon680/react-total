//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import CompressorComp 
    from "./Components/ImageCompressor/Compressor";
import CurrencyComp 
    from "./Components/CurrencyConvert/Currency";
import PasswordForm 
    from "./Components/PasswordManager/PasswordForm";
import RegisterPanel 
    from "./Components/RegisterPanel/RegisterPanel";
    
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <Router>
      <div className="">
        {/* <ButtonNavigation/> */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/compressor" className="nav-link">Compressor</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/currency" className="nav-link">Currency</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/password" className="nav-link">PasswordManager</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Register</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/compressor" element={<CompressorComp />} />
          <Route path="/currency" element={<CurrencyComp />} />
          <Route path="/password" element={<PasswordForm />} />
          <Route path="/register" element={<RegisterPanel />} />

        </Routes>
      </div>
    </Router>
  );
}

function ButtonNavigation() {
  const navigate = useNavigate();

  return (
      <div className="mb-3">
          <button className="btn btn-primary m-1" onClick={() => navigate('/')}>Home</button>
          <button className="btn btn-primary m-1" onClick={() => navigate('/compressor')}>Compressor</button>
          <button className="btn btn-primary m-1" onClick={() => navigate('/currency')}>Currency</button>
      </div>
  );
}
export default App;