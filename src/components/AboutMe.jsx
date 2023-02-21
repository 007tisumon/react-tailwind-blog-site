import React from "react";
import "./component.css";
import SectionHeading from "./utils/SectionHeading";
const AboutMe = () => {
  return (
    <section id="aboutme" className="relative  bg-white">

    <SectionHeading title1='About Me' title2='Know me more' />
 
      <div className="grid md:grid-cols-8 grid-cols-1 mx-20 md:mx-8 gap-10">
        <div className="space-y-4  text-center md:text-left md:col-span-5  leading-[2rem] tracking-wide ">
          <h3 className="text-2xl font-semibold">
            I'm <span className="text-blue-700">Simone Olivia,</span> a Web
            Developer
          </h3>
          <p>
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <p>
            Delivering work within time and budget which meets client’s
            requirements is our moto. Lorem Ipsum has been the industry's
            standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>
        <div className=" md:col-span-3 col-span-1 md:block divide-emerald-300   divide-y text-gray-700">
          <p className="py-3">
            <strong>Name:</strong> Simone Olivia
          </p>
          <p className="py-3">
            <strong>Email:</strong>
            <a href="email.com" className="text-blue-700">
              {" "}
              chat@simone.com
            </a>
          </p>
          <p className="py-3">
            <strong>Age:</strong> 28
          </p>
          <p className="py-3">
            <strong>From:</strong> Los Angeles, California
          </p>
          <button className=" bg-blue-800 text-white rounded-full px-8 py-3 uppercase">
            Download cv
          </button>
        </div>
        <div className="md:col-span-8 grid my-10 text-center  grid-cols-2 md:grid-cols-4">
          <div className="space-y-2 grid-cols-1  aboutBottom  relative p-5">
            <p className="text-5xl font-[600] text-gray-400">10+</p>
            <p className="text-md font-medium text-gray1">Years Experiance</p>
          </div>
          <div className="space-y-2 grid-cols-1 aboutRight aboutBottom relative p-5">
            <p className="text-5xl font-[600] text-gray-400 ">250+</p>
            <p className="text-md font-medium text-gray1">Happy Clients</p>
          </div>
          <div className="space-y-2 grid-cols-1 md:aboutRight about65 relative p-5">
            <p  className="text-5xl font-[600] text-gray-400">650+</p>
            <p className="text-md font-medium text-gray1">Projects Done</p>
          </div>
          <div className="space-y-2 grid-cols-1 aboutRight relative p-5">
            <p className="text-5xl font-[600] text-gray-400">38</p>
            <p className="text-md font-medium text-gray1">Get Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
