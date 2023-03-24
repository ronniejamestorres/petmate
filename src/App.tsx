import { useState } from "react";
import "./App.css";
import Register from "./pages/Register";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
