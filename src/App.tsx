import LandingPage from "./pages/LandingPage";
import ShowAll from "./pages/ShowAll";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ShowOne from "./pages/ShowOne";
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ShowAll" element={<ShowAll />}></Route>
          <Route path="/ShowOne" element={<ShowOne />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
