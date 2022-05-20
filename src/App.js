
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import Login from "./Components/Login"

import Home from './Components/Home';
function App() {
  return (
    <div className="App">
        <Router>
     
       
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          
        </Routes>
      { /* <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          
  </Routes>*/}
     
    </Router>
     
    </div>
  );
}

export default App;
