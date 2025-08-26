import React from "react";
import Header from "../components/defaultComponents/Header";
import Footer from "../components/defaultComponents/Footer";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const About = () => {
  const about = useSelector((state) => state.about.about);
  const experience = useSelector((state) => state.about.experience);
  const companyValues = useSelector((state) => state.about.companyValues);

  return (
    <>
      {/* SEO Meta Etiketleri */}
      <title>
        Saya Yazılım - Hakkımızda | 23 Yıllık Deneyim, Terzi Usulü Yazılım
        Çözümleri
      </title>
      <meta
        name="description"
        content="Saya Yazılım, 23 yıllık deneyimle Antalya ve Türkiye genelinde terzi usulü web, mobil, fabrika otomasyon ve CRM çözümleri sunar. +60 referans ile güçlü ekip."
      />
      <meta
        name="keywords"
        content="Saya Yazılım, hakkımızda, yazılım ekibi, deneyim, şirket değerleri, web geliştirme, İstanbul yazılım şirketi"
      />
      <meta name="author" content="Saya Yazılım" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="tr" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://sayayazilim.com/about" />

      {/* Open Graph Meta Etiketleri */}
      <meta
        property="og:title"
        content="Saya Yazılım - Hakkımızda | Deneyimli Yazılım Ekibi"
      />
      <meta
        property="og:description"
        content="Saya Yazılım ekibi olarak yılların deneyimi ile modern web teknolojilerinde uzmanlaşmış, müşteri odaklı yazılım çözümleri geliştiriyoruz."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sayayazilim.com/about" />
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
        content="Saya Yazılım - Hakkımızda | Deneyimli Yazılım Ekibi"
      />
      <meta
        name="twitter:description"
        content="Saya Yazılım ekibi olarak yılların deneyimi ile modern web teknolojilerinde uzmanlaşmış, müşteri odaklı yazılım çözümleri geliştiriyoruz."
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
          "@type": "AboutPage",
          name: "Saya Yazılım Hakkımızda",
          description:
            "Saya Yazılım ekibi olarak yılların deneyimi ile modern web teknolojilerinde uzmanlaşmış, müşteri odaklı yazılım çözümleri geliştiriyoruz.",
          url: "https://sayayazilim.com/about",
          mainEntity: {
            "@type": "Organization",
            name: "Saya Yazılım",
            description:
              "Modern web teknolojileri ile özel yazılım çözümleri geliştiren yazılım şirketi",
            foundingDate: "2023",
            numberOfEmployees: "5-10",
            address: {
              "@type": "PostalAddress",
              addressCountry: "TR",
            },
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
          Hakkımızda
        </motion.h1>

        {/* İçerik */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col w-full max-w-5xl gap-8 mt-8 sm:mt-12 border border-gray-300 shadow-md shadow-main rounded-md mb-8 sm:mb-12 p-4 sm:p-8 lg:p-12 bg-white"
        >
          {/* Hakkımızda kısmı */}
          <article className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-main">
              {about.title}
            </h2>
            <p className="text-sm sm:text-md md:text-lg font-semibold text-gray-700 leading-relaxed">
              {about.description}
            </p>
            <p className="text-sm sm:text-md md:text-lg font-semibold text-gray-700 leading-relaxed">
              {about.description2}
            </p>
          </article>

          {/* Deneyim kısmı */}
          <article className="flex flex-col items-start text-center gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-main">
              {experience.title}
            </h2>
            <p className="text-sm sm:text-md md:text-lg font-semibold text-gray-700 leading-relaxed text-left max-w-3xl">
              {experience.description}
            </p>
          </article>

          {/* Değerler kısmı */}
          <article className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-main">
              {companyValues.title}
            </h2>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              {companyValues.description.map((item, index) => (
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

export default About;
