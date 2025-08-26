import Contact from "../components/homeComponents/Contact";
import Footer from "../components/defaultComponents/Footer";
import Header from "../components/defaultComponents/Header";
import Hero from "../components/homeComponents/Hero";
import Projects from "../components/homeComponents/Projects";
import Services from "../components/homeComponents/Services";
import Technologies from "../components/homeComponents/Technologies";
import Xlog from "../components/homeComponents/Xlog";

const Home = () => {
  return (
    <>
      {/* SEO Meta Etiketleri */}
      <title>Saya Yazılım | 23 Yıllık Terzi Usulü Yazılım Çözümleri</title>
      <meta
        name="description"
        content="Saya Yazılım, 23 yıllık deneyimle Antalya ve Türkiye genelinde terzi usulü web geliştirme, mobil uygulama, fabrika otomasyon ve CRM çözümleri sunar. +60 referans."
      />
      <meta
        name="keywords"
        content="yazılım, web geliştirme, React, Node.js, JavaScript, TypeScript, frontend, backend, fullstack, dijital çözümler, İstanbul"
      />
      <meta name="author" content="Saya Yazılım" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="tr" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://sayayazilim.com" />

      {/* Open Graph Meta Etiketleri */}
      <meta
        property="og:title"
        content="Saya Yazılım - Modern Web Yazılım Çözümleri"
      />
      <meta
        property="og:description"
        content="Antalya ve Türkiye genelinde terzi usulü web, mobil, fabrika otomasyon ve CRM çözümleri. +60 firma tarafından tercih edildi."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sayayazilim.com" />
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
        content="Saya Yazılım - Modern Web Yazılım Çözümleri"
      />
      <meta
        name="twitter:description"
        content="Antalya ve Türkiye genelinde terzi usulü web, mobil, fabrika otomasyon ve CRM çözümleri sunuyoruz. +60 referans."
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
          address: {
            "@type": "PostalAddress",
            addressCountry: "TR",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
          },
          sameAs: ["https://github.com/sayayazilim"],
        })}
      </script>

      {/* Sayfa İçeriği */}
      <Header />
      <main id="home" className="bg-secondary">
        <Hero />
        <Services />
        <Projects />
        <Xlog />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
