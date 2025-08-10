import React, { useEffect, useRef, useState } from "react";
import Service from "./Service";
import { motion } from "framer-motion";
import Statistics from "./Statistics";

const Services = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Sadece bir kez tetiklensin
        }
      },
      { threshold: 0.3 } // %30'u görünürse tetiklenir
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="w-full flex flex-col items-center justify-center gap-12 mt-20 mb-20 scroll-mt-40 lg:scroll-mt-32"
      id="services"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-[700] text-4xl font-main text-shadow-2xs text-shadow-main"
      >
        Hizmetlerimiz
      </motion.h2>

      <motion.article
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full flex items-center justify-center flex-wrap gap-4"
      >
        <Service />
      </motion.article>
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full flex items-center justify-center flex-wrap gap-4"
      >
        <Statistics />
      </motion.article>
    </section>
  );
};

export default Services;
