import LandingPage from "./pages/LandingPage";
import ShowAll from "./pages/ShowAll";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ShowOne from "./pages/ShowOne";
import ShowOneCopy from "./pages/ShowOneCopy";
import "./App.css";

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
          <Route path="/ShowOne" element={<ShowOne />}></Route>
          <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
          <Route
            path="/Dashboard"
            element={
              <Dashboard onPictureAdded={() => console.log("Picture added")} />
            }
          ></Route>
          <Route path="*" element={<ShowOneCopy />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
