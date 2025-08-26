import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToUp from "./components/defaultComponents/ScrollToup";
import Loading from "./components/defaultComponents/Loading";

// Lazy load sayfalar
const Home = lazy(() => import("./pages/Home"));
const Admin = lazy(() => import("./pages/Admin"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const MissionAndVision = lazy(() => import("./pages/MissionAndVision"));
const Team = lazy(() => import("./pages/Team"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));

// Basit Tailwind spinner component

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission-vision" element={<MissionAndVision />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Suspense>
      <ScrollToUp />
    </>
  );
};

export default App;
