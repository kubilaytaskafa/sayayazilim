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
      {/* SEO Meta Etiketleri */}
      <title>
        Saya Yazılım - Misyon & Vizyon | Antalya'dan Türkiye'ye Terzi Usulü
        Yazılım Çözümleri
      </title>
      <meta
        name="description"
        content="Saya Yazılım'ın misyonu, vizyonu ve temel değerlerini keşfedin. Modern web teknolojileri ile müşterilerimizin dijital dönüşümüne öncülük ediyor, sürdürülebilir çözümler üretiyoruz."
      />
      <meta
        name="keywords"
        content="Saya Yazılım misyon, Saya Yazılım vizyon, şirket değerleri, yazılım şirketi hedefleri, dijital dönüşüm, web teknolojileri, İstanbul yazılım şirketi"
      />
      <meta name="author" content="Saya Yazılım" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="tr" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://sayayazilim.com/mission-vision" />

      {/* Open Graph Meta Etiketleri */}
      <meta
        property="og:title"
        content="Saya Yazılım - Misyon & Vizyon | Şirket Değerlerimiz ve Hedeflerimiz"
      />
      <meta
        property="og:description"
        content="Saya Yazılım'ın misyonu, vizyonu ve temel değerlerini keşfedin. Modern web teknolojileri ile müşterilerimizin dijital dönüşümüne öncülük ediyor, sürdürülebilir çözümler üretiyoruz."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://sayayazilim.com/mission-vision"
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
        content="Saya Yazılım - Misyon & Vizyon | Şirket Değerlerimiz ve Hedeflerimiz"
      />
      <meta
        name="twitter:description"
        content="Saya Yazılım'ın misyonu, vizyonu ve temel değerlerini keşfedin. Modern web teknolojileri ile müşterilerimizin dijital dönüşümüne öncülük ediyor, sürdürülebilir çözümler üretiyoruz."
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
          mission:
            "Modern web teknolojileri ile müşterilerimizin dijital dönüşümüne öncülük etmek",
          foundingDate: "2023",
          address: {
            "@type": "PostalAddress",
            addressCountry: "TR",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
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
