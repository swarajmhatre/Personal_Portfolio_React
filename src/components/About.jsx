import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          As an exceptionally skilled computer engineering student and a
          passionate expert in frontend web development, I possess a remarkable
          aptitude for crafting robust and innovative software solutions. My
          expertise lies in seamlessly blending technical prowess with creative
          thinking to deliver cutting-edge applications.
        </p>
        <br />
        <p className="text-xl">
          With a solid background in computer engineering, I have acquired a
          comprehensive understanding of diverse programming languages, data
          structures, algorithms, and computer hardware. This knowledge empowers
          me to delve into the inner workings of software systems, enabling me
          to optimize performance, implement efficient algorithms, and leverage
          the latest advancements in technology.
        </p>
      </div>
    </div>
  );
};

export default About;
