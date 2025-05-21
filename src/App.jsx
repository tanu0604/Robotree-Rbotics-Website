import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
// import About from "./components/About"
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import FutureRobotics from "./components/FutureRobotics";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      {/* Entire layout with min-h-screen to fix spacing */}
      <div className="min-h-screen flex flex-col">
        <Navigation />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/future" element={<FutureRobotics />} />
            <Route path="/whychooseus" element={<WhyChooseUs />} /> */}
            <Route path="/services" element={<Services />} />

          </Routes>
        </main>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
