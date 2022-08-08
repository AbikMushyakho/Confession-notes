import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
