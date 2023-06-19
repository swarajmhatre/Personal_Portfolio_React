import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full p-4 h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-purple-500">Contact Me</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className=" flex justify-center items-center ">
          <form className="flex flex-col w-full  md:w-1/2" action="https://getform.io/f/0891bc22-6fd0-41fd-9411-8a2311beb08f" method="POST">
            <input type="text" name="name" placeholder="Enter your Name"  className="p-2 border-2 rounded-md bg-transparent text-white focus:outline-none"/>
            <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 border-2 rounded-md bg-transparent text-white focus:outline-none"/>
            <textarea type="message" name="message" rows="10"  placeholder="Type your message" className="p-2 border-2 rounded-md bg-transparent text-white focus:outline-none"/>
            <button className="text-white  bg-gradient-to-br from-purple-400 to-purple-800 px-6 py-3 rounded-md my-8 mx-auto  flex hover:scale-110 duration-500">Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
