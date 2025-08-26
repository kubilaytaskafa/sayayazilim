import React from "react";
import Header from "../components/defaultComponents/Header";
import Footer from "../components/defaultComponents/Footer";
import { motion } from "framer-motion";
import Employees from "../components/teamPageComponents/Employees";

const Team = () => {
  return (
    <>
      {/* SEO Meta Etiketleri */}
      <title>Saya Yazılım - Ekibimiz </title>
      <meta
        name="description"
        content="Saya Yazılım ekibimizi tanıyın. Deneyimli yazılım geliştiricileri, tasarımcılar ve proje yöneticilerinden oluşan uzman ekibimizle modern web teknolojilerinde çözümler üretiyoruz."
      />
      <meta
        name="keywords"
        content="Saya Yazılım ekibi, yazılım geliştiricileri, web tasarımcıları, proje yöneticileri, uzman ekip, İstanbul yazılım ekibi, React geliştiricileri, Node.js geliştiricileri"
      />
      <meta name="author" content="Saya Yazılım" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="tr" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://sayayazilim.com/team" />

      {/* Open Graph Meta Etiketleri */}
      <meta
        property="og:title"
        content="Saya Yazılım - Ekibimiz | Uzman Yazılım Geliştiricileri"
      />
      <meta
        property="og:description"
        content="Saya Yazılım ekibimizi tanıyın. Deneyimli yazılım geliştiricileri, tasarımcılar ve proje yöneticilerinden oluşan uzman ekibimizle modern web teknolojilerinde çözümler üretiyoruz."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sayayazilim.com/team" />
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
        content="Saya Yazılım - Ekibimiz | Uzman Yazılım Geliştiricileri"
      />
      <meta
        name="twitter:description"
        content="Saya Yazılım ekibimizi tanıyın. Deneyimli yazılım geliştiricileri, tasarımcılar ve proje yöneticilerinden oluşan uzman ekibimizle modern web teknolojilerinde çözümler üretiyoruz."
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
          "@type": "Organization",
          name: "Saya Yazılım",
          url: "https://sayayazilim.com",
          logo: "https://sayayazilim.com/src/images/saya-logo.webp",
          description:
            "Modern web teknolojileri ile özel yazılım çözümleri geliştiren yazılım şirketi",
          employee: [
            {
              "@type": "Person",
              name: "Yazılım Geliştirici",
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Saya Yazılım",
              },
            },
          ],
          address: {
            "@type": "PostalAddress",
            addressCountry: "TR",
          },
        })}
      </script>

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
