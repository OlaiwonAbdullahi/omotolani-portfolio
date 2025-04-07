import About from "../components/about";
import Contact from "../components/contact";
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
    </div>
  );
};

export default Home;
