import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Technologies from "../components/Technologies";

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
