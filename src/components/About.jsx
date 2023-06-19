import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full" >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Here we are on the third article of the Tailwind CSS series. I hope
          you are enjoying it. This time around though, we will take the entire
          process a notch up by caring more about different screen sizes, doing
          a bit of clean-up of our HTML code with the help of some utilities of
          our own, and adding common interactions to the hero section of the
          webpage. As always there will be plenty of explanations and code
          examples along the way. The best part is we will be using the demo
          used in the previous article to make all things happen.
        </p>
        <br />
        <p  className="text-xl">
          Here we are on the third article of the Tailwind CSS series. I hope
          you are enjoying it. This time around though, we will take the entire
          process a notch up by caring more about different screen sizes, doing
          a bit of clean-up of our HTML code with the help of some utilities of
          our own, and adding common interactions to the hero section of the
          webpage. As always there will be plenty of explanations and code
          examples along the way. The best part is we will be using the demo
          used in the previous article to make all things happen.
        </p>
      </div>
    </div>
  );
};

export default About;
