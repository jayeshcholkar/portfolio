import React from "react";
import JavaScript from "../photos/javascript.png";
import CSS from "../photos/css.png";
import HTML from "../photos/html.png";
import ReactImg from "../photos/react.png";
import Tailwind from "../photos/tailwind.png";
import GitHub from "../photos/github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#1f1f1f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-rose-700 ">
            Skills
          </p>
          <p className="py-4"> These are the technologies I know</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-7 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:shadow-[#00d7ff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:shadow-[#e44d26] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:shadow-[#0277bd] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:shadow-yellow-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:shadow-[#70c5f7] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:shadow-gray-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
