import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="home" className="bg-[#1f1f1f] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-rose-800 font-semibold">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Jayesh Cholkar
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full-Stack web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Full-Stack Developer specializing in building and designing
          exceptional digital experiences. Currently, I’m focused on building
          responsive Web Applications.
        </p>
        <div>
          <Link to="works" smooth={true} duration={500}>
            <button className="group flex items-center justify-between p-2 border-2 text-white hover:bg-rose-700 hover:border-rose-800">
              view work
              <span className="group-hover:rotate-90 duration-300">
                <HiOutlineArrowNarrowRight className="ml-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
