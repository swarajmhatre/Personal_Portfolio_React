import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";

const experience = () => {
  const list = [
    {
      id: 1,
      src: html,
      techname: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 1,
      src: css,
      techname: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 1,
      src: javascript,
      techname: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 1,
      src: reactImage,
      techname: "REACT-JS",
      style: "shadow-cyan-500",
    },
    {
      id: 1,
      src: github,
      techname: "GITHUB",
      style: "shadow-white",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl border-b-4 inline border-purple-500 font-bold">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {list.map(({ id, src, techname, style }) => (
            <div
              key={id}
              className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} className="w-20 mx-auto" alt="sm"></img>
              <p className="mt-4">{techname}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default experience;
