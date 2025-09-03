import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className=" w-full  px-[5.5vw]">
        <div className="w-full h-[30vh] flex">
          <div className="w-1/2 h-full flex items-center">
            <img className='h-[50%]' src="/logo/SDAF white.png" alt="" />
          </div>

          <div className="w-1/2 h-full uppercase flex flex-col justify-center items-end">
            <h2 className='block group overflow-hidden relative cursor-pointer hover:opacity-60 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]'>
              <a href="#hero">
                home
              </a>
              <span className="w-full h-[1px] bg-white absolute bottom-0.5 left-[-100%] group-hover:left-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] rounded-full"></span>
            </h2>
            <h2 className='block group overflow-hidden relative cursor-pointer hover:opacity-60 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]'>
              <a href="#about">
                about
              </a>
              <span className="w-full h-[1px] bg-white absolute bottom-0.5 left-[-100%] group-hover:left-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] rounded-full"></span>
            </h2>
            <h2 className='block group overflow-hidden relative cursor-pointer hover:opacity-60 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]'>
              <a href="#focus">
                focus
              </a>
              <span className="w-full h-[1px] bg-white absolute bottom-0.5 left-[-100%] group-hover:left-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] rounded-full"></span>
            </h2>
            <h2 className='block group overflow-hidden relative cursor-pointer hover:opacity-60 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]'>
              <a href="#gallery">
                gallery
              </a>
              <span className="w-full h-[1px] bg-white absolute bottom-0.5 left-[-100%] group-hover:left-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] rounded-full"></span>
            </h2>
            <h2 className='block group overflow-hidden relative cursor-pointer hover:opacity-60 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]'>
              <a href="#contact">
                contact
              </a>
              <span className="w-full h-[1px] bg-white absolute bottom-0.5 left-[-100%] group-hover:left-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] rounded-full"></span>
            </h2>
          </div>
        </div>
        <div className="w-full h-10 mb-5 border-t border-white/50 flex items-center justify-between ">
          <p className='text-sm text-white/50'>© 2025 SDAF. All rights reserved.</p>
          <div className="flex space-x-4">
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer