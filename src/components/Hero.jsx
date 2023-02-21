import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section id="hero" className="relative">
      <div className="w-full video relative">
        <video
          className="object-cover  h-[92vh] md:h-screen"
          width="100%"
          src="./hero.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="absolute top-0 left-0 text-white w-full h-full flex justify-center items-center flex-col">
        <div className="text-center space-y-5">
          <h1 className="text-3xl capitalize ">welcome</h1>

          <h1 className="lg:text-5xl  text-4xl font-extrabold font-sans py-4 ">
            <Typewriter
              words={[
                "I'am Simone Olivia.",
                "I'am a Designer.",
                "I'am a Developer.",
                "I'am a Freelancer.",
                "I'am a Photographer.",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="lg:text-2xl text-xl">based in Los Angeles, California.</p>
          <div className="mt-10">
          <button className="border border-blue-700 text-blue-700 block mx-auto  rounded-full px-10 py-3 hover:bg-blue-700 hover:text-white duration-500 ">Hire Me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
