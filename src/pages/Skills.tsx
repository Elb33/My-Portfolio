import React from "react";
import tsLogo from "../assets/images/logos svg/typescript-svgrepo-com.svg";
import jsLogo from "../assets/images/logos svg/javascript-svgrepo-com.svg";
import htmlLogo from "../assets/images/logos svg/html-5-svgrepo-com.svg";
import cssLogo from "../assets/images/logos svg/css-3-svgrepo-com.svg";
import reactLogo from "../assets/images/logos svg/react-logo-svgrepo-com.svg";
import reduxLogo from "../assets/images/logos svg/redux-svgrepo-com.svg";
import nodejsLogo from "../assets/images/logos svg/nodejs-icon-svgrepo-com.svg";
import figmaLogo from "../assets/images/logos svg/figma-svgrepo-com.svg";
import psLogo from "../assets/images/logos svg/photoshop-svgrepo-com.svg";
import pythonLogo from "../assets/images/logos svg/python-svgrepo-com.svg";
import tailwindLogo from "../assets/images/logos svg/tailwind-svgrepo-com.svg";

const Skills: React.FC = () => {
  return (
    <div>
      <section className="py-10 ">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold font-roboto mb-12 pl-5 text-[#70FF00]">
            skills
            <span className="text-[#fff]">( )</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 pl-5">
            <img
              src={jsLogo}
              alt="javascript-logo"
              className="w-24 h-24 mb-8"
            />
            <img
              src={tsLogo}
              alt="typescript-logo"
              className="w-24 h-24 mb-8"
            />
            <img src={htmlLogo} alt="html5-logo" className="w-24 h-24 mb-8" />
            <img src={cssLogo} alt="css3-logo" className="w-24 h-24 mb-8" />
            <img src={reactLogo} alt="react-logo" className="w-24 h-24 mb-8" />
            <img src={reduxLogo} alt="redux-logo" className="w-24 h-24 mb-8" />
            <img
              src={nodejsLogo}
              alt="nodejs-logo"
              className="w-24 h-24 mb-8"
            />
            <img src={figmaLogo} alt="figma-logo" className="w-24 h-24 mb-8" />
            <img src={psLogo} alt="adobeps-logo" className="w-24 h-24 mb-8" />
            <img
              src={pythonLogo}
              alt="python-logo"
              className="w-24 h-24 mb-8"
            />
            <img
              src={tailwindLogo}
              alt="tailwindcss-logo"
              className="w-24 h-24"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
