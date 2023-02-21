import React from "react";
import Slider from "react-slick";
import SectionHeading from "./utils/SectionHeading";
import imgage1 from "../assets/client-sm-1.jpg";
import imgage2 from "../assets/client-sm-2.jpg";
import imgage3 from "../assets/client-sm-3.jpg";
import imgage4 from "../assets/client-sm-4.jpg";
import { Rating } from "@mui/material";

const Testmonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const comment =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae nihil quas beatae quos dicta! Accusamus libero qui et ipsa!";
  const data = [
    { img: imgage1, name: "Dennis Jacques", comment, from: "User from USA" },
    { img: imgage2, name: "Jay Shah", comment, from: "User from USA" },
    { img: imgage3, name: "Patrik Cary", comment, from: "User from USA" },
    { img: imgage4, name: "Cris Tom", comment, from: "User from USA" },
  ];
  return (
    <section id="testimonial" className=" px-20 md:px-10  h-screen">
      <SectionHeading
        title1="testimonial"
        title2="client speack"
        text="100px"
      />
      <div className="space-x-5 ">
        <Slider {...settings}>
          {data.map((data) => (
            <div key={data.name} className="  ">
              <div className="bg-gray-100 p-12 md:p-10 md:mx-5">
                <div className="flex items-center  space-x-5">
                  <img
                    src={data.img}
                    className="rounded-full w-20 h-20"
                    alt={data.name}
                  />
                  <div className="">
                    <p className="font-bold text-lg">{data.name}</p>
                    <p className="text-gray-500 font-medium">{data.from}</p>
                  </div>
                </div>
                <p className="font-bold">&quot;{data.comment}&quot;</p>
                <p>
                  {" "}
                  <Rating readOnly value={5} />{" "}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testmonial;
