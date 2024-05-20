import React from "react";
import gitHubLogo from "../assets/images/logos svg/github.svg";
import linkedInLogo from "../assets/images/logos svg/linkedin.svg";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white fixed z-10 top-0 p-3.5 w-full">
      <nav className="container flex justify-between items-center">
        <div className="text-3xl font-bold font-roboto text-[#70FF00]">
          Elbee
        </div>
        <div className="space-x-4 pr-7">
          <a
            href="#about"
            className="hover:text-gray-400 font-roboto font-bold text-2xl"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-gray-400 font-roboto font-bold text-2xl"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-gray-400 font-roboto font-bold text-2xl"
          >
            Projects
          </a>
        </div>
        <div className="space-x-4 pr-7 flex">
          <a
            href="https://ng.linkedin.com/in/bukunmi-layeni-678b541a9"
            className="flex"
          >
            <img src={linkedInLogo} alt="linkedin-logo" className="h-9 w-14" />
            {/* <span>Linkedin</span> */}
          </a>
          <a href="https://github.com/Elb33" className="flex">
            <img src={gitHubLogo} alt="github-logo" className="h-9 w-14" />
            {/* <span>Github</span> */}
          </a>
          <button className="border-2 border-[#70FF00] rounded-lg p-2">
            <a
              href="../../public/Layeni-Oluwabukunmi-Iyanuoluwa-Resume.pdf"
              download
            >
              Download Resume
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
