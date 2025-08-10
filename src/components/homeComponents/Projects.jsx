import React, { useEffect, useRef, useState } from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false); // GÖRÜNÜRLÜK STATE
  const ref = useRef(null); // REF TANIMI

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Bir kez tetiklensin
        }
      },
      { threshold: 0.3 }
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
      id="projects"
      ref={ref} // REF BURAYA EKLENİR
      className="w-full flex flex-col items-center justify-center gap-12 mt-20  scroll-mt-40 lg:scroll-mt-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}} // SADECE GÖRÜNÜRSE ANİMASYON
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-[700] text-4xl font-main text-shadow-2xs text-shadow-main"
      >
        Projelerimiz
      </motion.h2>
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex items-center justify-center  gap-8 flex-wrap w-full"
      >
        <Project />
      </motion.article>
      <Button link={"/projects"}>Bütün Projelerimiz</Button>
    </section>
  );
};

export default Projects;
