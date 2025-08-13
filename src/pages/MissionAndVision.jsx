import React from "react";
import Header from "../components/defaultComponents/Header";
import Footer from "../components/defaultComponents/Footer";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const MissionAndVision = () => {
  const mission = useSelector((state) => state.about.mission);
  const vision = useSelector((state) => state.about.vision);
  const coreValue = useSelector((state) => state.about.coreValue);
  const missionGoals = useSelector((state) => state.about.missionGoals);
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
          Misyon & Vizyon
        </motion.h1>

        {/* İçerik */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col w-full max-w-5xl gap-8 mt-8 sm:mt-12 border border-gray-300 shadow-md shadow-main rounded-md mb-8 sm:mb-12 p-4 sm:p-8 lg:p-12 bg-white"
        >
          {/* misyon kısmı */}
          <article className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-main">
              {mission.title}
            </h2>
            <p className="text-sm sm:text-md md:text-lg font-semibold text-gray-700 leading-relaxed">
              {mission.description}
            </p>
          </article>

          {/* Vizyon  kısmı */}
          <article className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-main">
              {vision.title}
            </h2>
            <p className="text-sm sm:text-md md:text-lg font-semibold text-gray-700 leading-relaxed text-left max-w-3xl">
              {vision.description}
            </p>
          </article>

          {/* temel değerler kısmı */}
          <article className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-main">
              {coreValue.title}
            </h2>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              {coreValue.description.map((item, index) => (
                <li
                  key={index}
                  className="text-sm sm:text-md md:text-lg font-semibold text-gray-700 leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          {/* hedefler kısmı */}

          <article className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-main">
              {missionGoals.title}
            </h2>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              {missionGoals.description.map((item, index) => (
                <li
                  key={index}
                  className="text-sm sm:text-md md:text-lg font-semibold text-gray-700 leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default MissionAndVision;
