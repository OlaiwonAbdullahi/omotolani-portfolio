import { FaPhoneSquareAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-primary md:text-start text-center leading-tight pl-8">
        <a
          href="#contact"
          className="hover:text-primary-dark transition duration-300"
        >
          Contact Me{" "}
        </a>
      </h1>
      <div className="flex flex-col lg:flex-row justify-around gap-6 p-4">
        {/* Contact Info */}
        <div className="basis-1/3 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-4 rounded-md shadow-md p-4 w-full lg:w-2/3 bg-white">
            {/* Call Us Section */}
            <div className="flex items-center font-medium gap-3">
              <FaPhoneSquareAlt className="rounded-full text-primary h-6 w-6" />
              <span>Call Me</span>
            </div>
            <div className="flex flex-col gap-1 text-gray-600">
              <span>
                Phone: <a href="tel:++447575099570">+447575099570</a>
              </span>
            </div>

            <hr className="border-t border-gray-200" />

            {/* Write to Us Section */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 font-medium">
                <CiMail className="h-7 w-7 bg-primary text-white rounded-full p-1" />
                <span>Write to Me</span>
              </div>
              <div className="text-gray-600 flex flex-col">
                <span>
                  Emails:{" "}
                  <a href="mailto: omotolaniosems@gmail.com">
                    {" "}
                    omotolaniosems@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-2/3 bg-white p-4 rounded-md shadow-md justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
