import React from "react";
import SectionHeading from "./utils/SectionHeading";
import {FaDownload} from 'react-icons/fa'

const Resume = () => {
  const desc =
    "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.";
  const educationData = [
    {
      year: "2000-2004",
      degree: "Computer Science",
      university: "International University",
      desc,
    },
    {
      year: "2005-2008",
      degree: "Bacelor Degree",
      university: "University of California",
      desc,
    },
    {
      year: "2009-2012",
      degree: "Master Degree",
      university: "Harvard University",
      desc,
    },
  ];
  const experienceData = [
    {
      year: "2012-2013",
      workiing: "Jr. UI UX Designer",
      company: "Themeforest",
      desc,
    },
    {
      year: "2014-2016",
      workiing: "Jr. Product Designer",
      company: "Dribble",
      desc,
    },
    { year: "2017-2019", workiing: "Product Designer", company: "Adobe", desc },
  ];
  const skills = [
    { skill: "Web Design", px: "65%" },
    { skill: "HTML/CSS", px: "95%" },
    { skill: "Javascript", px: "80%" },
    { skill: "React JS", px: "70%" },
    { skill: "Angular JS", px: "60%" },
    { skill: "Bootstrap", px: "99%" },
  ];
  const px = "90%";
  return (
    <section id="resume" className="mx-20 pb-20">
      <SectionHeading title1="Summary" title2="resume" />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 ">
        <div className="">
          <h1 className="text-2xl font-[600] mb-5">My Education</h1>
          <div className="flex flex-col  gap-8">
            {educationData.map((item) => (
              <div
                className="space-y-3 p-6 border rounded-md"
                key={item.degree}
              >
                <p className="bg-blue-700 inline text-white p-1 rounded-md text-sm">
                  {item.year}
                </p>
                <h4 className="text-xl font-bold">{item.degree}</h4>
                <p className="text-red-700">{item.university}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-[600] mb-5">My Expericence</h1>
          <div className="flex flex-col  gap-8">
            {experienceData.map((item) => (
              <div
                className="space-y-3 p-6 border rounded-md"
                key={item.workiing}
              >
                <p className="bg-blue-700 inline text-white p-1 rounded-md text-sm">
                  {item.year}
                </p>
                <h4 className="text-xl font-bold">{item.workiing}</h4>
                <p className="text-red-700">{item.company}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl font-[600] mb-5">My Sills</h3>
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 gap-5">
            <div className="">
              <div className="flex w-full justify-between ">
                <p className="font-bold">Web Design</p>
                <p className="font-bold">90%</p>
              </div>
              <div className={`h-2 relative bg-gray-400 rounded`}>
                <div
                  className={`w-[90%] bg-blue-700 rounded absolute top-0 left-0 h-full`}
                ></div>
              </div>
            </div>
            <div className="">
              <div className="flex w-full justify-between ">
                <p className="font-bold">HTML/CSS</p>
                <p className="font-bold">95%</p>
              </div>
              <div className={`h-2 relative bg-gray-400 rounded`}>
                <div
                  className={`w-[90%] bg-blue-700 rounded absolute top-0 left-0 h-full`}
                ></div>
              </div>
            </div>
            <div className="">
              <div className="flex w-full justify-between ">
                <p className="font-bold">JavaScript</p>
                <p className="font-bold">80%</p>
              </div>
              <div className={`h-2 relative bg-gray-400 rounded`}>
                <div
                  className={`w-[80%] bg-blue-700 rounded absolute top-0 left-0 h-full`}
                ></div>
              </div>
            </div>
            <div className="">
              <div className="flex w-full justify-between ">
                <p className="font-bold">React JS</p>
                <p className="font-bold">70%</p>
              </div>
              <div className={`h-2 relative bg-gray-400 rounded`}>
                <div
                  className={`w-[70%] bg-blue-700 rounded absolute top-0 left-0 h-full`}
                ></div>
              </div>
            </div>
            <div className="">
              <div className="flex w-full justify-between ">
                <p className="font-bold">Angular JS</p>
                <p className="font-bold">60%</p>
              </div>
              <div className={`h-2 relative bg-gray-400 rounded`}>
                <div
                  className={`w-[60%] bg-blue-700 rounded absolute top-0 left-0 h-full`}
                ></div>
              </div>
            </div>
            <div className="">
              <div className="flex w-full justify-between ">
                <p className="font-bold">Bootstrap</p>
                <p className="font-bold">99%</p>
              </div>
              <div className={`h-2 relative bg-gray-400 rounded`}>
                <div
                  className={`w-[99%] bg-blue-700 rounded absolute top-0 left-0 h-full`}
                ></div>
              </div>
            </div>
          </div>
          <div className="mt-10 ">
            <button className="flex-center gap-2 border-2 border-gray1 px-10 py-3 uppercase text-sm font-bold text-gray1 mx-auto rounded-full hover:bg-gray1 hover:text-white duration-500">download cv <FaDownload /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
