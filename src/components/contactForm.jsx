import Aos from "aos";
import { useEffect } from "react";
import { BiSend } from "react-icons/bi";

const ContactForm = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 }); // Initialize AOS with a duration option (optional)
  }, []);
  return (
    <div>
      <form action="" className=" flex flex-col gap-3 w-full p-5">
        <span className="text-2xl text-primary" data-aos="fade-left">
          Message Me
        </span>
        <div className=" flex flex-col md:flex-row gap-3 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className=" bg-primary/10 md:w-1/3 w-full p-2 focus:outline-none text-sm rounded text-primary border border-primary"
            data-aos="fade-left"
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            className=" bg-primary/10 p-2 md:w-1/3 w-full focus:outline-none text-sm rounded text-primary border border-primary"
            data-aos="fade-left"
          />
          <input
            type="tel"
            required
            placeholder="Phone Number"
            className=" bg-primary/10 p-2 md:w-1/3 w-full focus:outline-none text-sm rounded text-primary border border-primary"
            data-aos="fade-left"
          />
        </div>
        <div className="">
          <textarea
            name=""
            id=""
            placeholder=" Your Message"
            className=" bg-primary/10 p-2 focus:outline-none text-sm rounded text-primary w-full h-36 border border-primary"
            data-aos="fade-left"
          />
        </div>
        <div className=" flex justify-end ">
          <a href="mailto: omotolaniosems@gmail.com">
            <button
              className="bg-primary text-white p-1.5 px-2 rounded-full flex flex-row gap-2 items-center hover:bg-[#7a45e6] transition duration-300"
              data-aos="fade-left"
            >
              Send Message <BiSend className=" bg-primary size-5" />
            </button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
