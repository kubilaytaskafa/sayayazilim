import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBanner from "../images/hero-banner.jpg"; // <-- bu satırı ekle
const Hero = () => {
  const [index, setIndex] = useState(0);
  const textList = [
    "Modern çözümler, yenilikçi yaklaşımlar ve profesyonel hizmet anlayışı",
    "Müşteri odaklı çözümler ve kesintisiz teknik destek",
    "20 yıllık deneyim ile yazılım dünyasında güvenilir çözüm ortağınız",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textList.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section
      className="relative flex items-start p-12 justify-center font-main h-[650px]  lg:h-[700px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      {/* Sadece section içinde kalan siyah katman */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <article className="relative z-10 flex items-center flex-col justify-center gap-12 mt-12 rounded-xl p-8  ">
        <h1 className="text-4xl lg:text-6xl w-full max-w-[500px] lg:max-w-[900px] text-center font-bold text-secondary text-shadow-lg text-shadow-main">
          Projelerimiz ve Kodlarımız İle Geleceği Şekillendiriyoruz
        </h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-secondary text-center max-w-[700px] font-semibold text-shadow-sm text-shadow-main"
          >
            {textList[index]}
          </motion.p>
        </AnimatePresence>

        <button className="py-4 px-8 rounded bg-button text-secondary font-semibold shadow-md shadow-main hover:scale-105 transition duration-300">
          Bizimle İletişime Geçin
        </button>
      </article>
    </section>
  );
};

export default Hero;
