import React from "react";
import './sectionHeading.css'

const SectionHeading = ({title1,title2,text}) => {
  return (
    <div className="relative py-14">
      <h1 className={`${!text ?'text-[120px]' : `text-[100px] md:text-[120px]`} bigtext text-center font-extrabold  opacity-10 uppercase`}>
        {title1}
      </h1>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center capitalize">
        <h2 className="text-4xl  tracking-[.2rem] relative font-[600]">
          {title2}
          <div className="heading"></div>
        </h2>
      </div>
    </div>
  );
};

export default SectionHeading;
