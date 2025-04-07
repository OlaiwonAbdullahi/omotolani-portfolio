import { SiMysql, SiPython } from "react-icons/si";
import about from "../assets/hero.png"; // Importing the hero image
import { LiaAws } from "react-icons/lia";
import { BiLogoDjango } from "react-icons/bi";
import { PiBrainThin } from "react-icons/pi";

const About = () => {
  return (
    <div
      id="
    about"
      className="bg-[#f9f9ff] min-h-screen flex items-center justify-center"
    >
      <div className=" flex md:flex-row flex-col">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 h-screen flex justify-center  pt-0 md:pt-16 p-6">
          <img
            src={about}
            alt="Hero"
            className=" max-w-md mx-auto  rounded-2xl shadow-lg object-fill"
          />
        </div>
        <div className=" w-1/2 flex flex-col justify-center items-start p-6">
          <h1 className="text-4xl font-bold text-primary">About Me</h1>
          <p className="text-lg font-normal text-gray-700 mt-4">
            I am a highly motivated analytics engineer with a passion for
            solving complex data challenges. I hold a Master's degree in Data
            Science and have several years of experience as a Product Manager in
            the Fintech industry. My background in both technical and business
            domains allows me to bridge the gap between data science and
            business, bringing valuable insights to stakeholders. My expertise
            in data modeling and architecture, combined with my programming
            skills in Python and SQL, enables me to develop scalable and robust
            data pipelines. I also have experience leading cross-functional
            teams to deliver high-quality products. With a commitment to
            continuous learning and staying up-to-date with the latest industry
            trends, I am dedicated to helping organizations turn their data into
            actionable insights.
          </p>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex flex-col items-center">
              <SiPython className="text-4xl text-primary" />
              <span className="text-sm text-gray-700 mt-1">Python</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMysql className="text-4xl text-primary" />
              <span className="text-sm text-gray-700 mt-1">MySQL</span>
            </div>
            <div className="flex flex-col items-center">
              <LiaAws className="text-4xl text-primary" />
              <span className="text-sm text-gray-700 mt-1">AWS</span>
            </div>
            <div className="flex flex-col items-center">
              <BiLogoDjango className="text-4xl text-primary" />
              <span className="text-sm text-gray-700 mt-1">Django</span>
            </div>
            <div className="flex flex-col items-center">
              <PiBrainThin className="text-4xl text-primary" />
              <span className="text-sm text-gray-700 mt-1">ML</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
