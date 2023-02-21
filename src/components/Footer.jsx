import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center md:justify-around flex-col md:flex-row py-14 space-y-5'>
        <div className="">
            <p>Copyright © 2023 <a href="#"className='font-semibold text-gray-500'>Simone</a>. All Rights Reserved.</p>
        </div>
        <div className="divide-x ">
            <a className='pr-3 hover:text-gray-500 duration-500 font-medium' href="">Terms & Policy</a>
            <a className='pl-3 hover:text-gray-500 duration-500 font-medium' href="">Disclamer</a>
        </div>
    </footer>
  )
}

export default Footer