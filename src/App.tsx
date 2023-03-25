import { useState } from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import ShowAll from "./pages/ShowAll";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter ,Route,Routes,Navigate } from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/ShowAll" element={<ShowAll />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      
    </Routes>
  </BrowserRouter>
  )
}

export default App;
