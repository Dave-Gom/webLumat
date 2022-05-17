import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {/* contexto del enrutador */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
