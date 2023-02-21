import SectionHeading from './utils/SectionHeading';
import { useState } from 'react'
import { Tab, Transition } from '@headlessui/react'
import project1 from '../assets/project-1.jpg'
import project2 from '../assets/project-2.jpg'
import project3 from '../assets/project-3.jpg'
import project4 from '../assets/project-4.jpg'
import project5 from '../assets/project-5.jpg'
import project7 from '../assets/project-7.jpg'
import { motion } from "framer-motion"
import Modal from './utils/Modal';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const projectInfo = 'Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
export const data ={
    
  Design: [
    {
      id: 1,
      title: 'Project 1',
      date: 'July 16, 2019',
      url: 'www.example.com',
      technologies: 'ios,html5,css3,php,java',
      industry: 'Art & design',
      projectInfo,
      img:[
        project1,project2,project3
      ]
    },
    {
      id: 2,
      title: 'Project 2',
      date: 'July 16, 2019',
      url: 'www.example.com',
      technologies: 'ios,html5,css3,php,java',
      industry: 'Art & design',
      projectInfo,
      img:[
        project2,project3,project4
      ]
    },
  ],
  Brand: [
    {
      id: 3,
      title: 'Project 3',
      date: 'July 16, 2019',
      url: 'www.example.com',
      technologies: 'ios,html5,css3,php,java',
      industry: 'Art & design',
      projectInfo,
      img:[
        project3,project4,project5
      ]
    },
    {
      id: 4,
      title: 'Project 4',
      date: 'July 16, 2019',
      url: 'www.example.com',
      technologies: 'ios,html5,css3,php,java',
      industry: 'Art & design',
      projectInfo,
      img:[
        project4,project5,project7
      ]
    },
  ],
  Photots: [
    {
      id: 5,
      title: 'Project 5',
      date: 'July 16, 2019',
      url: 'www.example.com',
      technologies: 'ios,html5,css3,php,java',
      industry: 'Art & design',
      projectInfo,
      img:[
        project5,project7,project1
      ]
    },
    {
      id: 6,
      title: 'Project 6',
      date: 'July 16, 2019',
      url: 'www.example.com',
      technologies: 'ios,html5,css3,php,java',
      industry: 'Art & design',
      projectInfo,
      img:[
        project7,project1,project2
      ]
    },
  ],
}

const Portfolio = () => {
  
  const [isShowing, setIsShowing] = useState(true)
  let [categories] = useState(data)

  const [model, setModel] = useState(false);
  const [tempData, setTempData] = useState();

  const getData = (item) => {
    setTempData(item)
    return setModel(true)

  }
  
  return (
      <>
    <section id="portfolio" className='md:px-20 px-16'>
      <SectionHeading title1='Portfolio' title2='my work'  />
      <div className=""> 
        <Tab.Group>
          <Tab.List className='flex justify-center  space-x-5 rounded-xl bg-blue900/20 p1'>
          <Tab  className={({selected})=> classNames('text-gray-500   text-lg font-medium  focus-none outline-none',
              selected
                ? 'border-b-2 border-blue-700'
                : '')}>
                  All
            </Tab>
            {Object.keys(categories).map((ctg,ind)=>(
              <Tab key={ctg} className={({selected})=> classNames('text-gray-500   text-lg font-medium  focus-none outline-none',
              selected
                ? 'border-b-2 border-blue-700'
                : '')}>
                  {ctg}
                </Tab>
            ))}
          </Tab.List>
          <Tab.Panels   className='mt-2'>
          <motion.div layout className="mt-7">
          <Tab.Panel>
                 <div  className="grid grid-cols-2 md:grid-cols-3 gap-5">
                 {
                   Object.values(categories).map((item,ind)=>(
                     <div key={ind} className="space-y-3 duration-500 ">
                        {item.map(item=>(
                          <div onClick={()=>getData(item)} key={item.title} className="relative protfolio_img before:rounded duration-500 before:duration-500">
                            <img className=' ' src={item.img[0]} alt="" />
                            <div className="protfolio_content text-2xl font-bold duration-500">
                              {item.title}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))
                  }
                 </div>
                 
            </Tab.Panel>
            {Object.values(categories).map((posts,idx)=>(
              <Tab.Panel key={idx} className={classNames(
                'rounded-xl bg-white p-3 mt-7',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}>
                <motion.div layout className='grid grid-cols-2 md-grid-cols-3 gap-5'>
                {posts.map((post) => (
                  <div className="">
                    <img className='rounded' src={post.img[0]} alt="" />
                  </div>
                ))}
              </motion.div>
              </Tab.Panel>
            ))}
          </motion.div>
          </Tab.Panels
          >
        </Tab.Group>
      </div>
    
    </section>
    {
      model === true ? <Modal data={tempData} hide={() => setModel(false)}/> : ''
    }
    </>
  )
}

export default Portfolio