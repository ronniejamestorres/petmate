import LandingPage from "./pages/LandingPage";
import ShowAll from "./pages/ShowAll";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ShowOne from "./pages/ShowOne";
import Match from "./pages/Match";
import DashboardTwo from "./pages/DashboardTwo";
import Error404 from "./pages/Error404";
import ChatRoom from "./pages/ChatRoom";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<Hero />}></Route>
          <Route path="/testimonials" element={<Testimonials />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ShowAll" element={<ShowAll />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/showOne/:id" element={<ShowOne />}></Route>
          <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/DashboardTwo" element={<DashboardTwo />}></Route>
          <Route path="/chatRoom/:id" element={<ChatRoom />}></Route>
          <Route path="/Match" element={<Match />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
