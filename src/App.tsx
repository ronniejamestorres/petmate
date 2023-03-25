import LandingPage from "./pages/LandingPage";
import ShowAll from "./pages/ShowAll";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <Router>

    <div>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/ShowAll" element={<ShowAll />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/Login" element={<Login />}></Route>
    </Routes>
    </div>
  
  </Router>
  )
}

export default App;
