import Contact from "../components/homeComponents/Contact";
import Footer from "../components/defaultComponents/Footer";
import Header from "../components/defaultComponents/Header";
import Hero from "../components/homeComponents/Hero";
import Projects from "../components/homeComponents/Projects";
import Services from "../components/homeComponents/Services";
import Technologies from "../components/homeComponents/Technologies";

const Home = () => {
  return (
    <>
      <title>Saya Yazılım - Anasayfa</title>
      <Header />
      <main id="home" className="bg-secondary">
        <Hero />
        <Services />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
