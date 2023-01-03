import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="bg-[#1f1f1f]  justify-center items-center">
    <div
      name="contact"
      className="w-full h-screen bg-[#1f1f1f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/cb5bab2d-19ed-4bf4-a0b7-90597e715e8c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="border-b-4 border-rose-700 text-4xl inline font-bold text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or send me an Email - Jaycholker@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-slate-300 placeholder:text-gray-700 outline-none"
          type="text"
          placeholder="Full Name"
          name="name"
        />
        <input
          className="p-2 mt-2 bg-slate-300 placeholder:text-gray-700 outline-none"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="mt-2 p-2 bg-slate-300 placeholder:text-gray-700 outline-none"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="mt-8 flex items-center mx-auto p-2 px-4 border-2 text-white hover:bg-rose-700 hover:border-rose-800">
          Send !
        </button>
      </form>
    </div>
        <div className="flex items-center justify-center px-4 gap-8 md:hidden pb-6">
          <li className="w-[60px] h-[60px] flex  items-center bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/jayesh-cholkar-845057254"
              target="_blank"
              rel="noopener noreferrer"
            ><FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex items-center  bg-gray-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/jayeshcholkar"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex items-center bg-red-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:jaycholker@gmail.com"
              
            >
              <MdMailOutline size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex justify-between items-center  bg-[#363838]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/jayeshcholker.pdf"
              download={true}
              
            ><AiOutlineProfile size={30} />
            </a>
          </li>
        </div>
      </div>
  );
};

export default Contact;
