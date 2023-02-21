import React from 'react'
import SectionHeading from './utils/SectionHeading';
import {AiFillPhone,AiOutlineDribbble,AiOutlineTwitter,AiOutlineGoogle,AiFillGithub} from 'react-icons/ai'
import {FaFax} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import {GrFacebookOption} from 'react-icons/gr'
const Contact = () => {
  const follw = [
    {path: 'example.com', icon:<AiOutlineDribbble size={24} />},
    {path: 'example.com', icon:<AiOutlineTwitter size={24} />},
    {path: 'example.com', icon:<GrFacebookOption size={24} />},
    {path: 'example.com', icon:<AiOutlineGoogle size={24} />},
    {path: 'example.com', icon:<AiFillGithub size={24} />},
  ]
  return (
    <section id="contact" className="md:px-20 px-16 pb-10 bg-gray-50">
      <SectionHeading title1="Contact" title2="get in Touch" />
      <div className="grid md:grid-cols-8  grid-cols-1 gap-4 ">
        <div className="md:col-span-2 flex flex-col  items-center text-center md:text-start md:items-start order-last md:order-first space-y-5">
          <div className="">
            <p className="font-bold text-2xl uppercase">Address</p>
            <p>4th Floor, Plot No.22,</p>
            <p>145 Murphy Canyon Rd.</p>
            <p>San Diego CA 2028</p>
          </div>
          <div className="">
          <p className='flex items-center'><span className='text-blue-700 mr-3'><AiFillPhone size={22} /></span> (060) 444 434 444</p>
          <p className='flex items-center'><span className='text-blue-700 mr-3'><FaFax size={22} /></span> (060) 555 545 555</p>
          <p className='flex items-center'><span className='text-blue-700 mr-3'><HiMail size={22} /></span> chat@simone.com</p>

          </div>
          <div className="">
          <p className="font-bold text-2xl uppercase">Follow me</p>
          <ul className='space-x-3 mt-5'>
            {
              follw.map((icon,ind)=>(
                <li key={ind} className="inline-block">
                  <a href={icon.path}>{icon.icon}</a>
                </li>
              ))
            }
          </ul>
          </div>
        </div>
        <div className="md:col-span-6">
        <p className="font-bold text-2xl uppercase">Send us note</p>
        <form className=' mt-5 text-center'>
          <div className="grid grid-cols-1 mb-4 md:grid-cols-2 gap-5">
          <input className='py-3 border-2 rounded focus:outline-none pl-5 block' type="text" placeholder='Name' />
          <input className='py-3 border-2 rounded focus:outline-none pl-5 block' type="email" placeholder='Email' />
          <textarea className='md:col-span-2 border-2 rounded focus:outline-none pl-5 pt-5 block' placeholder='Tell us more about you needs' name="" id="" rows='7' ></textarea>
          
          </div>
          <input className='bg-blue-700 hover:bg-blue-800 duration-300 text-white px-10 py-4 rounded-full font-bold my-5 ' type="submit" value="Send Message" />
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contact