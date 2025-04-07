import { LiaLinkedin, LiaWhatsapp } from "react-icons/lia";
import { RiMediumFill, RiTwitterXFill } from "react-icons/ri";
import { SiGithub, SiGmail, SiTableau } from "react-icons/si";

export default function Footer() {
  return (
    <div>
      <div className="px-4 md:px-0 flex flex-col md:flex-row items-center justify-between mt-8">
        <div className="basis-full md:basis-1/2 mb-6 md:mb-0">
          <h2 className="text-footer font-inter text-3xl md:text-5xl text-center md:text-left md:ml-24">
            Let's
            <br />
            Work Together -
          </h2>
        </div>

        <div className="bg-Background border border-footer w-full md:w-auto h-14 rounded-md flex justify-center items-center mx-auto">
          <button className="flex items-center gap-2 px-4 py-2">
            <SiGmail className="h-5 w-7" alt="Gmail Icon" />
            <span className="text-footer font-poppins text-sm md:text-base">
              <a href="mailto:omotolaniosems@gmail.com">
                omotolaniosems@gmail.com
              </a>
            </span>
          </button>
        </div>
      </div>

      <hr className="border-t border-footer mt-6" />

      <div className="flex flex-col md:flex-row">
        <div className="basis-1/2 my-8">
          <span className="text-footer md:ml-24 text-center flex mx-auto justify-center md:justify-start">
            &copy; {new Date().getFullYear()} All Rights footer
          </span>
        </div>
        <div className="basis-1/2 flex mx-auto justify-center my-6 gap-3">
          <a href="https://github.com/omotolani12">
            <SiGithub className="h-9 w-9" />
          </a>
          <a href="https://public.tableau.com/app/profile/kehinde.osems.omotolani">
            <SiTableau className="h-9 w-9" />
          </a>
          <a href="https://x.com/abdullahiola_05">
            <RiTwitterXFill className="h-9 w-9" />
          </a>
          <a href="https://www.linkedin.com/in/omotolani-kehinde-osems-98140818b/">
            <LiaLinkedin className="h-9 w-9" />
          </a>
          <a href="https://medium.com/@omotolaniosems">
            <RiMediumFill className="h-9 w-9" />
          </a>
        </div>
      </div>
    </div>
  );
}
