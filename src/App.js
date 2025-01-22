import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import IntroSection from "./Pages/Hero/IntroSection";
// import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import SocialSideBar from "./Pages/Social/SocialSideBar";
import TeamBlogs from "./Pages/Blogs/TeamBlogs";
import OurTeam from "./Pages/OurTeam/OurTeam";
import Contact from "./Pages/Contact/Contact";
import AboutUs from "./Pages/About/AboutMain";
import DetailedServices from "./Pages/Services/DetailedServices";
import Portfolio from "./Pages/Projects/Portfolio";

// import Portfolio from "./Pages/Portfolio/";
// import Pricing from "./Pages/Pricing/";
// import Team from "./Pages/Team/";
// import Contact from "./Pages/Contact/";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<IntroSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<DetailedServices />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<><OurTeam /><TeamBlogs /></>} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
      <SocialSideBar />
    </Router>
  );
};

export default App;
