import React from "react";
import weather from "../photos/weather.png";
import movie from "../photos/movie.png";
import ecommerce from "../photos/Ecommercer.png";
import landing from "../photos/landing.jpg";
import todoo from "../photos/todoo.png";
import news from "../photos/news.png";

const Works = () => {
  return (
    <div name="works" className="w-full md:h-screen text-gray-300 bg-[#1f1f1f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-rose-700">
            Work
          </p>
          <p className="py-6">Check out some of my recent project</p>
        </div>
        {/* container */}

        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* grid items */}
          <div
            style={{ backgroundImage: `url(${weather})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div max-sm:h-[170px] max-sm:w-[90%]"
          >
            {/* hoverEffect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://virtualweather.netlify.app/"
                target="_blank"
              rel="noopener noreferrer">
                  <button className="text-center rounded-full px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jayeshcholkar"
                target="_blank"
              rel="noopener noreferrer">
                  <button className="text-center rounded-full px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid items */}
          <div
            style={{ backgroundImage: `url(${movie})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div  max-sm:h-[170px] max-sm:w-[90%]"
          >
            {/* hoverEffect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Movie Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://moviesbytes.netlify.app/"
                target="_blank"
              rel="noopener noreferrer">
                  <button className="text-center rounded-full px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jayeshcholkar"
                target="_blank"
              rel="noopener noreferrer">
                  <button className="text-center rounded-full px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid items */}
          <div
            style={{ backgroundImage: `url(${ecommerce})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div max-sm:h-[170px] max-sm:w-[90%]"
          >
            {/* hoverEffect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                E-Commerce App
              </span>
              <div className="pt-8 text-center">
                <a href="https://superwalmart.netlify.app/"
                target="_blank"
              rel="noopener noreferrer">
                  <button className="text-center rounded-full px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jayeshcholkar"
                target="_blank"
              rel="noopener noreferrer">
                  <button className="text-center rounded-full px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid items */}
          <div
            style={{ backgroundImage: `url(${landing})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div  max-sm:h-[170px] max-sm:w-[90%]"
          >
            {/* hoverEffect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-center flex items-center justify-center text-2xl font-semibold text-white tracking-wider">
                Landing Page
              </span>
              <div className="pt-8 text-center">
                <a href="https://jayeshcholkar.github.io/myproject3"
                target="_blank"
              rel="noopener noreferrer">
                  <button className="text-center rounded-full px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jayeshcholkar"
                 target="_blank"
              rel="noopener noreferrer">
               <button className="text-center rounded-full px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid items */}
          <div
            style={{ backgroundImage: `url(${todoo})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div  max-sm:h-[170px] max-sm:w-[90%]"
          >
            {/* hoverEffect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-center flex items-center justify-center text-2xl font-semibold text-white tracking-wider">
                ToDo App
              </span>
              <div className="pt-8 text-center">
                <a href="https://tectodo.netlify.app"
                target="_blank"
              rel="noopener noreferrer">
                  <button className="text-center rounded-full px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jayeshcholkar"
                 target="_blank"
              rel="noopener noreferrer">
               <button className="text-center rounded-full px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid items */}
          <div
            style={{ backgroundImage: `url(${news})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div  max-sm:h-[170px] max-sm:w-[90%]"
          >
            {/* hoverEffect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-center flex items-center justify-center text-2xl font-semibold text-white tracking-wider">
                News App
              </span>
              <div className="pt-8 text-center">
                <a href="https://newsbiz.netlify.app/"
                target="_blank"
              rel="noopener noreferrer">
                  <button className="text-center rounded-full px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jayeshcholkar"
                 target="_blank"
              rel="noopener noreferrer">
               <button className="text-center rounded-full px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
