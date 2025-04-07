import React, { useEffect } from "react";
import Aos from "aos";
import hero from "../assets/omotolani.jpg"; // Importing the hero image
import { LiaGithub, LiaLinkedin } from "react-icons/lia";
import { RiMediumFill } from "react-icons/ri";
import { SiTableau } from "react-icons/si";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 }); // Initialize AOS with a duration option (optional)
  }, []);

  return (
    <section
      id="home"
      className="z-20 flex flex-col-reverse md:flex-row justify-between px-6 md:px-20 bg-[#f9f9ff] min-h-[40vh] items-center gap-0"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center items-center md:items-start p-6">
        <span data-aos="fade-up-right">Hey, I'm</span>
        <h1
          data-aos="fade-up-right"
          className="text-3xl md:text-4xl font-bold text-primary md:text-left text-center leading-tight font-sora whitespace-nowrap"
        >
          Omotolani Kehide-Osems
        </h1>
        <p
          data-aos="fade-up-right"
          className="text-gray-700 text-sm md:text-base leading-relaxed max-w-md md:text-left text-center mt-1"
        >
          ~ ML Engineer | Data Scientist | Software Engineer
        </p>
        <div className="flex gap-2 mt-2 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/omotolani-kehinde-osems-98140818b/">
            <button
              className="bg-primary text-white p-3 rounded-full hover:shadow-md transition duration-300"
              data-aos="fade-up-right"
            >
              <LiaLinkedin className="size-6 bg-primary text-white rounded-full" />
            </button>
          </a>
          <a href="https://medium.com/@omotolaniosems">
            <button
              className="bg-primary text-white p-3 rounded-full hover:shadow-md transition duration-300"
              data-aos="fade-up-right"
            >
              <RiMediumFill className="size-6 bg-primary text-white rounded-full" />
            </button>
          </a>
          <a href="https://github.com/omotolani12">
            <button
              className="bg-primary text-white p-3 rounded-full hover:shadow-md transition duration-300"
              data-aos="fade-up-right"
            >
              <LiaGithub className="size-6 bg-primary text-white rounded-full" />
            </button>
          </a>
          <a href="https://public.tableau.com/app/profile/kehinde.osems.omotolani">
            <button
              className="bg-primary text-white p-3 rounded-full hover:shadow-md transition duration-300"
              data-aos="fade-up-right"
            >
              <SiTableau className="size-6 bg-primary text-white rounded-full" />
            </button>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 mb-0 flex justify-center pt-0 md:pt-16 mt-2 md:mt-0">
        <img
          src={hero}
          alt="Hero"
          className="md:w-3/5 w-3/5 max-w-md mx-auto md:h-3/4 h-1/2 rounded-full shadow-lg object-cover"
          data-aos="fade-up-left"
        />
      </div>
    </section>
  );
};

export default Hero;
