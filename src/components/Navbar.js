import React, { useState } from "react";
import logo from "../photos/logo.png";
import { BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [Nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!Nav);
  };

  return (
    <div
      className="flex items-center justify-between fixed
     w-full h-[88px] bg-[#1f1f1f] text-gray-300 px-4"
    >
      <div>
        <img src={logo} alt="logo" style={{ width: "55px" }} />
      </div>
      {/* Menu */}
      <div>
        <ul className=" items-center justify-between md:flex hidden">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="works" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile menu */}
      <div onClick={handleNav} className="md:hidden z-10">
        {!Nav ? (
          <BiMenuAltRight className="text-3xl" />
        ) : (
          <BiMenuAltLeft className="text-3xl" />
        )}
      </div>
      <ul
        className={
          !Nav
            ? "hidden"
            : "absolute flex flex-col w-full h-screen bg-[#1f1f1f] top-0 right-0 items-center justify-center "
        }
      >
        <li className="py-4 text-2xl">
          <Link onClick={handleNav} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link onClick={handleNav} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link onClick={handleNav} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link onClick={handleNav} to="works" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social menu */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/jayesh-cholkar-845057254"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/jayeshcholkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:jaycholker@gmail.com"
              
            >
              E-mail
              <MdMailOutline size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#363838]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/jayeshcholker.pdf"
              download={true}
              
            >
              Resume <AiOutlineProfile size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
