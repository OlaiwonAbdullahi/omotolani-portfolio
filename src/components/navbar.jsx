import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-white border border-primary rounded-full top-0 sticky w-11/12 md:w-4/5 mx-auto mt-4 p-3 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="text-xl font-semibold text-primary font-sora">
        <Link to="/">Omotolani</Link>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={() => setActive(link.name)}
              className={`cursor-pointer transition hover:text-primary ${
                active === link.name ? "text-primary font-semibold" : ""
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="flex items-center gap-4 z-10">
        <Link to="/">
          <button className="cursor-pointer hidden md:block bg-primary hover:bg-[#7a45e6] text-white text-sm px-4 py-1.5 rounded-full transition duration-300">
            Download CV
          </button>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden text-2xl text-primary">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <LiaTimesSolid /> : <CiMenuFries />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white mt-2 rounded-xl shadow-md p-4 flex flex-col gap-4 md:hidden text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => {
                  setActive(link.name);
                  setIsOpen(false);
                }}
                className={`cursor-pointer transition hover:text-primary ${
                  active === link.name ? "text-primary font-semibold" : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className=" flex flex-col gap-2 justify-center ">
            <button className="bg-primary hover:bg-[#7a45e6] text-white text-sm px-4 py-1.5 rounded-full transition duration-300">
              Download CV
            </button>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
