import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import FooterLanding from "../components/FooterLanding";
import Faq from "../components/Faq";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Faq />
      <FooterLanding />
    </>
  );
}

export default LandingPage;
