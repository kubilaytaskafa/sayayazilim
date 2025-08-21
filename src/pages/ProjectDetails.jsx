import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/defaultComponents/Header";
import Footer from "../components/defaultComponents/Footer";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
const ProjectDetails = () => {
  const { id } = useParams(); // URL'den parametreyi alıyoruz
  const projects = useSelector((state) => state.projects.projects);

  // Slice içindeki projelerden id eşleşenini bul
  const project = projects.find((p) => p.id === id);

  return (
    <>
      {/* SEO için title ve meta description */}
      <title>{`Saya Yazılım - ${project.title}`}</title>
      <meta name="description" content={project.description.slice(0, 160)} />

      <Header />
      <main className="bg-secondary p-8 h-screen w-full">
        {project ? (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center gap-8 lg:mt-6 "
          >
            <h1 className="text-xl lg:text-3xl font-bold text-main text-center  ">
              {project.title}
            </h1>
            <p className="p-4 text-sm  font-semibold text-gray-600 lg:text-xl   lg:p-12 text-left lg:text-center">
              {project.description}
            </p>
          </motion.section>
        ) : (
          <section>
            <h1>Proje Bulunamadı ya da henüz bizlere başvurmadınız</h1>
            <Link smooth to="/#contact">
              Lütfen Bizimle İletişime Gecin
            </Link>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetails;
