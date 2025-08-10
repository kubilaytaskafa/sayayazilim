import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ScrollToUp from "./components/defaultComponents/ScrollToup";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <ScrollToUp />
    </>
  );
};

export default App;
