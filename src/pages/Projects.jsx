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
      {/* SEO Meta Etiketleri */}
      <title>
        Saya Yazılım - Projelerimiz | 23 Yıllık Deneyimle Terzi Usulü Yazılım
        Çözümleri
      </title>
      <meta
        name="description"
        content="Saya Yazılım olarak geliştirdiğimiz başarılı projeleri keşfedin. Web uygulamaları, mobil uygulamalar ve özel yazılım çözümlerimizle müşterilerimizin ihtiyaçlarını karşılıyoruz."
      />
      <meta
        name="keywords"
        content="yazılım projeleri, web uygulamaları, mobil uygulamalar, React projeleri, Node.js projeleri, özel yazılım çözümleri, İstanbul yazılım şirketi,Xlog Firewall"
      />
      <meta name="author" content="Saya Yazılım" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="tr" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://sayayazilim.com/projects" />

      {/* Open Graph Meta Etiketleri */}
      <meta
        property="og:title"
        content="Saya Yazılım - Projelerimiz | Başarılı Yazılım Projeleri"
      />
      <meta
        property="og:description"
        content="Saya Yazılım olarak geliştirdiğimiz başarılı projeleri keşfedin. Web uygulamaları, mobil uygulamalar ve özel yazılım çözümlerimizle müşterilerimizin ihtiyaçlarını karşılıyoruz."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sayayazilim.com/projects" />
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
        content="Saya Yazılım - Projelerimiz | Başarılı Yazılım Projeleri"
      />
      <meta
        name="twitter:description"
        content="Saya Yazılım olarak geliştirdiğimiz başarılı projeleri keşfedin. Web uygulamaları, mobil uygulamalar ve özel yazılım çözümlerimizle müşterilerimizin ihtiyaçlarını karşılıyoruz."
      />
      <meta
        name="twitter:image"
        content="https://sayayazilim.com/src/images/saya-logo.webp"
      />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/src/images/saya-logo.ico" />
      <link rel="apple-touch-icon" href="/src/images/saya-logo.webp" />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Saya Yazılım Projeleri",
          description: "Saya Yazılım olarak geliştirdiğimiz başarılı projeler",
          url: "https://sayayazilim.com/projects",
          numberOfItems: projects ? projects.length : 0,
          itemListElement: projects
            ? projects.map((project, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "SoftwareApplication",
                  name: project.title,
                  description: project.description,
                  url: `https://sayayazilim.com/projects/${project.id}`,
                  applicationCategory: "WebApplication",
                  operatingSystem: "Web Browser",
                },
              }))
            : [],
        })}
      </script>

      {/* Sayfa İçeriği */}
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
