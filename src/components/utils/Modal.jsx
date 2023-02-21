import React, { Component } from "react";
import { AiOutlineClose,AiOutlineGoogle,AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF,FaTwitter,  }  from "react-icons/fa";
import { GrMail  }  from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Modal extends Component {
    render(){
        const {hide,data} = this.props
        let modalStyle ={
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)'
        }
        const share = [
            {path: 'example.com', icons: <FaFacebookF size={22} />},
            {path: 'example.com', icons: <FaTwitter size={22} />},
            {path: 'example.com', icons: <AiOutlineGoogle size={22} />},
            {path: 'example.com', icons: <AiOutlineInstagram size={22} />},
            {path: 'example.com', icons: <GrMail size={22} />},
        ]
  return (
    <>
      <div style={modalStyle}
        className="modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-500 md:px-32 px-16"
      >
        <div className="relative w-auto my-10 mx-auto ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-8">
            {/*header*/}
            <button
                className="pt-4 8 ml-auto bg-transparent border-0 text-black hover:text-red-600 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                
              >
              <AiOutlineClose onClick={hide} />
              </button>
            <div className="text-center">
              <h3 className="text-2xl   text-red-700 font-semibold">
                {data.title}
               
              </h3>
              
            </div>
            {/*body*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            <div className="px-5 py-10 relative ">
              <Slider dots>
                {
                  data?.img?.map((img,inx)=>(
                    <div className="w-full  h-[60vh] modalmg">
                      <img  className="max-w-full object-cover  h-auto align block " src={img} alt="" />
                    </div>
                  ))
                }
              </Slider>
            </div>
            <div className="space-y-3">
               <div className="">
                <h5 className="text-lg font-bold">Project Info:</h5>
                <p>{data.projectInfo}</p>
               </div>
               <div className="">
                <h5 className="text-lg font-bold">Project Details</h5>
                <div className="space-y-3 py-6 divide-y-2 flex flex-col jusrify-center">
                    <p>Client: {data.client|| 'Ruby Clinton'}</p>
                    <p>
                        Technologies: <span className="uppercase">{data.technologies}</span>
                    </p>
                    <p>Industry: {data.industry}</p>
                    <p>Date: {data.date}</p>
                    <p>Url: <a className="text-blue-700" href={data.url}>{data.url}</a></p>
                    <ul className="space-x-3 pt-4  flex items-center">
                        <li className="inline-block">Share: </li>
                        {share.map((item,ind)=>(
                            <li className="inline-block ">
                                <a className="text-gray-500 hover:text-blue-700 duration-500" href={item.path}>{item.icons}</a>
                            </li>
                        ))}
                    </ul>
                </div>
               
               </div>
            </div>
            
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
  }
}