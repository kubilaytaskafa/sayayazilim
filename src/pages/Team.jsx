import React from "react";
import Header from "../components/defaultComponents/Header";
import Footer from "../components/defaultComponents/Footer";
import { motion } from "framer-motion";
import Employees from "../components/teamPageComponents/Employees";

const Team = () => {
  return (
    <>
      <title>Saya Yazılım - Hakkımızda</title>
      <Header />
      <main className="bg-secondary flex flex-col items-center justify-center px-4 sm:px-6 md:px-12">
        {/* Başlık */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black text-shadow-lg text-shadow-main text-center mt-8 sm:mt-12"
        >
          Ekibimiz
        </motion.h1>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col w-full mb-12 mt-12 flex-wrap"
        >
          <Employees />
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default Team;
