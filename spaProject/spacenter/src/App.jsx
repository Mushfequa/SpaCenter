import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Opening from "./pages/Opening.jsx";
import Price from "./pages/Price.jsx";
import Service from "./pages/Service.jsx";
import Appointment from "./pages/Appointment.jsx";
import Team from "./pages/Team.jsx";
import Testimonial from "./pages/Testimonial.jsx";

import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <Carousel />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/price" element={<Price />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/opening" element={<Opening />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
