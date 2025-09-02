import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="w-full h-16 text-white fixed top-0 left-0 z-[999]  px-[5.5vw] flex items-center justify-between">
        <div className="flex w-[25%]  uppercase text-xs items-center h-full gap-12">
          <p className='block group overflow-hidden relative cursor-pointer hover:opacity-60 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]'>
            home
            <span className="w-full h-[1px] bg-white absolute bottom-0.5 left-[-100%] group-hover:left-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] rounded-full"></span>
          </p>
          <p className='block group overflow-hidden relative cursor-pointer hover:opacity-60 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]'>
            about
            <span className="w-full h-[1px] bg-white absolute bottom-0.5 left-[-100%] group-hover:left-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] rounded-full"></span>
          </p>
          <p className='block group overflow-hidden relative cursor-pointer hover:opacity-60 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]'>
            gallery
            <span className="w-full h-[1px] bg-white absolute bottom-0.5 left-[-100%] group-hover:left-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] rounded-full"></span>
          </p>
        </div>
        <div className="w-[50%] h-full  center ">
          <img className='w-[18%]' src="/logo/SDAF white.png" alt="" />
        </div>
        <div className="w-[25%] flex justify-end">
          <div className="flex group w-fit items-center gap-1">
            {/* Left circle (grows in) */}
            <div className="overflow-hidden w-0 h-0 group-hover:w-9 group-hover:h-9 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] origin-left rounded-full text-[#1e1e1e] flex items-center justify-center bg-[#c9b46d]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50%"
                className="transition-transform duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-rotate-45"
              >
                <polyline
                  points="18 8 18 18 8 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="18"
                  y1="18"
                  x2="5"
                  y2="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* Button */}
            <button className="relative group-hover:text-black overflow-hidden text-xs h-9 px-4 rounded-full border uppercase transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:border-[#c9b46d] border-white">
              <div className="absolute top-[100%] group-hover:top-0 left-0 z-[-1]  h-full w-full bg-[#c9b46d] transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]"></div>
              <p className='z-[99] translate-y-0.5'>contact</p>
            </button>

            {/* Right circle (shrinks out) */}
            <div className="overflow-hidden w-9 h-9 group-hover:w-0 group-hover:h-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] origin-right rounded-full text-[#1e1e1e] flex items-center justify-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50%"
                className="transition-transform duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-rotate-90"
              >
                <polyline
                  points="18 8 18 18 8 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="18"
                  y1="18"
                  x2="5"
                  y2="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header