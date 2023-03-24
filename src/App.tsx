import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import ShowAll from "./pages/ShowAll";



import { BrowserRouter ,Route,Routes,Navigate } from "react-router-dom";





function App() {
  return (
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/ShowAll" element={<ShowAll />}></Route>
      
      
      
      
    </Routes>
  </BrowserRouter>
  )
}

export default App;
