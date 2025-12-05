import React from 'react'

const Footer = () => {

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#the-series", label: "The Series" },
    { href: "#the-exhibition", label: "The Exhibition" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
  ]

  return (
    <div>
      <div className=" w-full  px-[4vw]  ">
        <div className="w-full h-[30vh] flex">
          <div className="w-1/2 h-full flex items-center">
          <a href="#hero" className='h-[30%] lg:h-[50%]'>
            <img className=' w-[80%]  md:w-[40%] ' src="/logo/SDAF black.png" alt="logo_black" />
          </a>
          </div>

          <div className="w-1/2 h-full uppercase flex flex-col justify-center items-end">
            {
              navLinks.map((link, i) => (
                <p key={i} className='block group text-sm overflow-hidden relative cursor-pointer hover:opacity-60 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]'>
                  <a href={link.href}>
                    {link.label}
                  </a>
                  <span className="w-full h-[1px] bg-black absolute bottom-0.5 left-[-100%] group-hover:left-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] rounded-full"></span>
                </p>
              ))
            }

          </div>
        </div>
        <div className="w-full h-10 mb-5 border-t border-black/50 flex items-center justify-between ">
          <p className='text-sm text-black'>© {currentYear} SDAF. All rights reserved.</p>
          <div className="flex space-x-4">
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer