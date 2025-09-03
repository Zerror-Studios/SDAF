import React from 'react'
import MainBtn from '../buttons/MainBtn'

const Header = () => {
  return (
    <div>
      <div className="w-full h-16 text-white fixed top-0 left-0 z-[999]  px-[5.5vw] flex items-center justify-between">
        <div className="flex w-[25%]  uppercase text-xs items-center h-full gap-12">
          <p className='block group overflow-hidden relative cursor-pointer hover:opacity-60 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]'>
            <a href="#hero">
            home
            </a>
            <span className="w-full h-[1px] bg-white absolute bottom-0.5 left-[-100%] group-hover:left-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] rounded-full"></span>
          </p>
          <p className='block group overflow-hidden relative cursor-pointer hover:opacity-60 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]'>
            <a href="#about">
            about
            </a>
            <span className="w-full h-[1px] bg-white absolute bottom-0.5 left-[-100%] group-hover:left-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] rounded-full"></span>
          </p>
          <p className='block group overflow-hidden relative cursor-pointer hover:opacity-60 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]'>
            <a href="#focus">
            focus
            </a>
            <span className="w-full h-[1px] bg-white absolute bottom-0.5 left-[-100%] group-hover:left-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] rounded-full"></span>
          </p>
          <p className='block group overflow-hidden relative cursor-pointer hover:opacity-60 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]'>
            <a href="#gallery">
            gallery
            </a>
            <span className="w-full h-[1px] bg-white absolute bottom-0.5 left-[-100%] group-hover:left-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] rounded-full"></span>
          </p>
        </div>
        <div className="w-[50%] h-full  center ">
          <img className='w-[18%] opacity-0 translate-y-[1vw]' src="/logo/SDAF white.png" alt="" />
        </div>
        <div className="w-[25%] flex justify-end">
          <a href="#contact">
          <MainBtn txt="RSVP" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header