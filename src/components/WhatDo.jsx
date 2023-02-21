import React from 'react'
import {MdColorLens} from 'react-icons/md'
import {RiComputerLine} from 'react-icons/ri'
import {FaPencilRuler,FaPaintBrush,FaBullhorn} from 'react-icons/fa'
import {AiOutlineAreaChart} from 'react-icons/ai'
import SectionHeading from './utils/SectionHeading';

const WhatDo = () => {
    const text = 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
    const data =[
        {icon: <MdColorLens size={30} />,title:'Grapic Design',desc:text},
        {icon: <RiComputerLine size={30} />,title:'Web Design',desc:text},
        {icon: <FaPencilRuler size={30} />,title:'UI/UX design',desc:text},
        {icon: <FaPaintBrush size={30} />,title:'App Design & Develop',desc:text},
        {icon: <AiOutlineAreaChart size={30} />,title:'Buisness Analysis',desc:text},
        {icon: <FaBullhorn size={30} />,title:'SEO Marketing',desc:text},
    ]
  return (
    <section id="whatdo" className='relative pb-20 bg-gray-100 '>
        <SectionHeading title1="Services" title2="What i do" />
        <div className="mx-20 md:mx-20 grid grid-cols-1 md:grid-cols-2 md:gap-y-16 gap-10">
            {
                data.map(item=>(
                    <div className="flex gap-5" key={item.title}>
                        <div className=" w-28 h-20 shadow-md rounded-lg text-blue-700 bg-white flex-center size={30}">
                            {item.icon}
                        </div>
                       <div className="">
                       <h4 className='text-xl font-bold mb-2'>{item.title}</h4>
                        <p>{item.desc}</p>
                       </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default WhatDo