import React from 'react';


import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import './App.css';
import Login from './Login';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    //BEM  
    <Router>
    <div className="App">
      <Routes>

        <Route path="/" element={[<Header />,<Home />]} />
        <Route path="/login" element={[<Login/>]}/>

        <Route path="/checkout" element={[<Header />,<Checkout/>]} />

      </Routes>
    </div>
  </Router>
      

    
  );
}

export default App;
