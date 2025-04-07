import hero from "../assets/omotolani.jpg"; // Importing the hero image
import { LiaGithub, LiaLinkedin } from "react-icons/lia";
import { RiMediumFill } from "react-icons/ri";
import { SiTableau } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row justify-between px-6 md:px-20  bg-[#f9f9ff] min-h-[40vh] items-center gap-3 md:gap-0"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 ">
        <span>Hey, I'm</span>
        <h1 className="text-3xl md:text-4xl font-bold text-primary md:text-left text-center leading-tight font-sora">
          Omotolani Kehide-Osems
        </h1>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-md md:text-left text-center mt-1">
          ~ ML Engineer | Data Scientist | Software Engineer
        </p>
        <div className="flex gap-2 mt-2  justify-center md:justify-start">
          <button className="bg-primary text-white  p-3 rounded-full hover:shadow-md transition duration-300">
            <LiaLinkedin className=" size-6  bg-primary text-white rounded-full " />
          </button>
          <button className="bg-primary text-white  p-3 rounded-full hover:shadow-md transition duration-300">
            <RiMediumFill className=" size-6  bg-primary text-white rounded-full " />
          </button>
          <button className="bg-primary text-white  p-3 rounded-full hover:shadow-md transition duration-300">
            <LiaGithub className=" size-6  bg-primary text-white rounded-full " />
          </button>
          <button className="bg-primary text-white  p-3 rounded-full hover:shadow-md transition duration-300">
            <SiTableau className=" size-6  bg-primary text-white rounded-full " />
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 h-screen flex justify-center  pt-0 md:pt-16">
        <img
          src={hero}
          alt="Hero"
          className="w-full max-w-md mx-auto h-4/5 rounded-full shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
