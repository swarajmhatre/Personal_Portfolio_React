import React from "react";
import SwarajImage from "../assets/Swaraj.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {  Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>
          <div>
            <Link to="experience" smooth duration={500} className="group text-white px-6 py-3 my- w-fit flex items-center rounded-md bg-gradient-to-br from-purple-400 to-purple-900">
              portfolio
              <MdOutlineKeyboardArrowRight className="group-hover:rotate-90 duration-300" />
            </Link>
          </div>
        </div>
        <div>
          <img
            src={SwarajImage}
            alt="My Profile"
            className="rounded-2xl aspect-[4/3] h-80  mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
