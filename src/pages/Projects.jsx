import React from "react";
import Header from "../components/defaultComponents/Header";
import Footer from "../components/defaultComponents/Footer";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
const Projects = () => {
  const projects = useSelector((state) => state.projects.projects);
  console.log(projects);
  return (
    <>
      <title>Saya Yazılım - Projelerimiz</title>
      <Header />
      <main className="bg-secondary">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-black text-shadow-lg text-shadow-main text-center mt-12"
        >
          Projelerimiz
        </motion.h1>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center flex-wrap gap-6 lg:gap-12 mt-12 w-full mb-12"
          >
            {projects &&
              projects.map((project) => {
                return (
                  <div
                    key={project.id}
                    className="flex items-center justify-between p-4 flex-col lg:p-12 gap-4 text-center w-80 h-80 lg:w-96 lg:h-96 border border-gray-500 shadow-md shadow-main rounded-md hover:scale-105 transition duration-300"
                  >
                    <h2 className="text-md lg:text-xl font-semibold text-main mt-6">
                      {project.title}
                    </h2>
                    <p className="text-sm font-semibold text-gray-600">
                      {project.description.split(".")[0]}.
                    </p>
                    <div className=""></div>
                    <button className="flex text-sm items-center justify-center px-8 py-2 bg-main text-white rounded-md hover:shadow-md hover:shadow-main">
                      <a href={`/projects/${project.id}`}>Detaylar</a>
                    </button>
                  </div>
                );
              })}
          </motion.article>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
