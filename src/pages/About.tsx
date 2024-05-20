import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <section className="py-10 ">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold font-roboto mb-10 pl-5 text-[#70FF00]">
            aboutMe
            <span className="text-[#fff]">( )</span>
          </h2>
          <p className="text-[#E0E0E0] text-2xl pl-5 w-[90%] leading-loose font-roboto font-regular">
            I am a Computer Science graduate and a passionate frontend developer
            with experience in building responsive and interactive web
            applications using modern technologies like React, TypeScript, and
            Tailwind CSS. I have also delved into the field of web designing,
            using tools like Figma, Adobe Photoshop. I love coding and am always
            eager to learn new things.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
