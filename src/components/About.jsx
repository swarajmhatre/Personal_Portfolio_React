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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eos,
          obcaecati nobis sint laboriosam quis porro est pariatur libero autem
          facilis eligendi expedita accusantium. Mollitia totam eligendi illum
          obcaecati molestias fugiat saepe non, sed aut magnam nisi assumenda
          numquam, ullam ad laudantium. Unde, eligendi asperiores?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          doloremque nulla, sapiente consequatur voluptates adipisci repellendus
          sequi aspernatur? Quas suscipit necessitatibus nisi harum obcaecati
          fugiat odit molestias dolor, ipsam nostrum architecto numquam eveniet
          sed ipsum maxime ullam! Voluptatum sunt dolore quisquam doloremque
          deserunt labore dignissimos omnis officia! Voluptatum, at temporibus!
        </p>
      </div>
    </div>
  );
};

export default About;
