import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Project from "../components/projects";

const Home = () => {
  return (
    <div>
      {" "}
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
