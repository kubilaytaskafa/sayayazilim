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
      {/* SEO Meta Etiketleri */}
      <title>
        {project
          ? `Saya Yazılım - ${project.title} `
          : "Proje Bulunamadı - Saya Yazılım"}
      </title>
      <meta
        name="description"
        content={
          project
            ? project.description.slice(0, 160)
            : "Aradığınız proje bulunamadı. Saya Yazılım olarak geliştirdiğimiz diğer projeleri inceleyebilirsiniz."
        }
      />
      <meta
        name="keywords"
        content={
          project
            ? `${project.title}, yazılım projesi, web uygulaması, Saya Yazılım, ${project.title} projesi`
            : "yazılım projeleri, web uygulamaları, Saya Yazılım"
        }
      />
      <meta name="author" content="Saya Yazılım" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="tr" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href={`https://sayayazilim.com/projects/${id}`} />

      {/* Open Graph Meta Etiketleri */}
      <meta
        property="og:title"
        content={
          project
            ? `${project.title} - Saya Yazılım Projesi`
            : "Proje Bulunamadı - Saya Yazılım"
        }
      />
      <meta
        property="og:description"
        content={
          project
            ? project.description.slice(0, 160)
            : "Aradığınız proje bulunamadı. Saya Yazılım olarak geliştirdiğimiz diğer projeleri inceleyebilirsiniz."
        }
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://sayayazilim.com/projects/${id}`}
      />
      <meta
        property="og:image"
        content="https://sayayazilim.com/src/images/saya-logo.webp"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Saya Yazılım" />
      <meta property="og:locale" content="tr_TR" />

      {/* Twitter Card Meta Etiketleri */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={
          project
            ? `${project.title} - Saya Yazılım Projesi`
            : "Proje Bulunamadı - Saya Yazılım"
        }
      />
      <meta
        name="twitter:description"
        content={
          project
            ? project.description.slice(0, 160)
            : "Aradığınız proje bulunamadı. Saya Yazılım olarak geliştirdiğimiz diğer projeleri inceleyebilirsiniz."
        }
      />
      <meta
        name="twitter:image"
        content="https://sayayazilim.com/src/images/saya-logo.webp"
      />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/src/images/saya-logo.ico" />
      <link rel="apple-touch-icon" href="/src/images/saya-logo.webp" />

      {/* Schema.org Structured Data */}
      {project && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: project.title,
            description: project.description,
            url: `https://sayayazilim.com/projects/${project.id}`,
            applicationCategory: "WebApplication",
            operatingSystem: "Web Browser",
            author: {
              "@type": "Organization",
              name: "Saya Yazılım",
              url: "https://sayayazilim.com",
            },
            creator: {
              "@type": "Organization",
              name: "Saya Yazılım",
            },
          })}
        </script>
      )}

      {/* Sayfa İçeriği */}
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
