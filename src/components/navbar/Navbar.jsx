import React, { Children, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaDribbble, FaGithub } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import profile from "../../assets/profile.jpg";

const BlackTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));
const Navbar = ({ children }) => {
  const [click, setClick] = useState(false);
  const Links = [
    { path: "#hero", name: "Home" },
    { path: "#aboutme", name: "Aboute Me" },
    { path: "#whatdo", name: "what i do" },
    { path: "#resume", name: "resume" },
    { path: "#portfolio", name: "portfolio" },
    { path: "#testimonial", name: "testmonial" },
    { path: "#contact", name: "contact" },
  ];

  const icons = [
    {
      path: "facebook.com",
      icon: <FaFacebookF size={15} />,
      title: "Facebook",
    },
    { path: "facebook.com", icon: <FaTwitter size={15} />, title: "Twitter" },
    { path: "facebook.com", icon: <FaDribbble size={15} />, title: "Dirrble" },
    { path: "facebook.com", icon: <FaGithub size={15} />, title: "github" },
  ];
  return (
    <>
      <div className="sticky md:fixed left-0 top-0 z-10">
        <nav className="md:w-[250px]  bg-dark flex  md:h-screen  text-white items-center  md:pt-10 justify-between px-10 md:px-0  md:items-center md:justify-start md:inline-block md:flex-col  relative">
          <div className=" ">
            <a href="#hero">
              <div className="w-44 h-44 border-8 hidden md:block border-gray-700 rounded-full relative overflow-hidden mx-auto">
                <img
                  src={profile}
                  className="  p-2 mx-auto object-cover  scale-125 "
                  alt=""
                />
              </div>
              <span className="md:block md:pt-5 font-bold text-center text-xl">
                Simone Olivia
              </span>
            </a>
          </div>
          <ul
            className={` md:mt-5 md:text-center ${
              click ? "block" : "hidden"
            } md:relative md:top-0  px-5  absolute left-0 w-full  bg-gray-900/90 md:bg-transparent divide-y-2 md:divide-y-0 md:block divide-gray-700 top-[3.9rem] py-2`}
          >
            {Links.map((link) => (
              <li key={link.name} className=" capitalize ">
                <a onClick={()=>setClick(!click)}
                  className="block py-3 text-md 
                active:text-blue-700 focus:text-blue-700 hover:text-blue-700 duration-300 "
                  href={link.path}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="md:absolute md:bottom-5 md:left-8">
            <ul className=" flex items-center md:justify-center">
              {icons.map((item) => (
                <li key={item.title} className="inline-block relative">
                  <BlackTooltip
                    disableInteractive
                    placement="right"
                    color="black"
                    title={item.title}
                  >
                    <Link className="px-10" to={item.path}>
                      {item.icon}
                    </Link>
                  </BlackTooltip>
                </li>
              ))}
              <li className="inline-block duration-500 md:hidden cursor-pointer">
                <button
                  onClick={() => setClick(!click)}
                  className="focus:outline-none"
                >
                  {!click ? (
                    <AiOutlineMenu size={25} />
                  ) : (
                    <AiOutlineClose size={25} />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
