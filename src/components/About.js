import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1f1f1f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-rose-700">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">
              Hi, I'm Jayesh, nice to meet you. Please take a look around
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent Web Applications that
              improves the lives of those around me. I specialize in creating
              responsive web apps for clients ranging from individuals and
              small-businesses. What would you do if you had a responsive full-stack web
              devloper available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
