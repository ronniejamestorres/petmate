import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import FooterLanding from "../components/FooterLanding";
import Faq from "../components/Faq";
import { useLocation } from "react-router-dom";

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <Testimonials />
      <Faq />
      <FooterLanding />
    </>
  );
}

export default LandingPage;
