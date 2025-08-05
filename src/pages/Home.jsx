import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Header />
      <main id="home" className="bg-secondary">
        <Hero />
        <Services />
        <Projects />
      </main>
    </>
  );
};

export default Home;
