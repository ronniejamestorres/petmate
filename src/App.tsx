import LandingPage from "./pages/LandingPage";
import ShowAll from "./pages/ShowAll";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ShowAll" element={<ShowAll />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route
            path="/Dashboard"
            element={
              <Dashboard onPictureAdded={() => console.log("Picture added")} />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
