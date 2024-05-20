import React from "react";
import avatar from "../assets/images/logos svg/Lukita.svg";

const Intro: React.FC = () => {
  return (
    <div>
      <section className="pt-20 flex">
        <div className="container mx-2 w-[50%] ">
          <h2 className="text-2xl font-bold font-roboto mb-4 pl-5 text-[#E0E0E0]">
            Hello, i am
          </h2>
          <h2 className="text-5xl font-bold font-roboto mb-10 pl-5 leading-normal text-[#70FF00] w-[45%]">
            {`< Layeni Bukunmi />`}
          </h2>
          <h2 className="text-3xl font-bold mb-4 pl-5 font-roboto text-[#E0E0E0] ">
            Frontend Web Developer & Designer
          </h2>
          <div className="flex mt-10">
            <h2 className="text-6xl font-bold font-roboto mb-4 pl-5 text-[#4F4F4F] ">
              3
            </h2>
            <span className="text-gray-400 font-regular font-roboto text-2xl ml-3 mr-12 ">
              YEARS OF <br />
              EXPERIENCE
            </span>
            <h2 className="text-6xl font-bold font-roboto mb-4 ml-12 pl-5 text-[#4F4F4F] ">
              2
            </h2>
            <span className="text-gray-400 font-regular font-roboto text-2xl ml-3">
              COMPANIES I'VE <br /> WORKED AT
            </span>
          </div>
          <p className="text-gray-700 text-2xl pl-5 w-[110%]"></p>
        </div>
        <div className="container mx-5 w-[50%] items-center justify-center flex">
          <img src={avatar} alt="human-avatar" />
        </div>
      </section>
    </div>
  );
};

export default Intro;
