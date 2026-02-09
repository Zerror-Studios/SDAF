"use client";
import React from 'react'
import MainBtn from '../buttons/MainBtn'
import { RiCloseLine, RiCornerDownRightLine, RiMenuLine } from '@remixicon/react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
import { navLinks } from '../helpers/Links';
gsap.registerPlugin(CustomEase);


const Header = () => {

  CustomEase.create("art-details", "0.65, 0.01, 0.05, 0.99")


  const openMenu = () => {
    gsap.to(".open_menu", {
      right: 0,
      // clipPath: "polygon(0% 0, 0% 0, 0% 100%, 0% 100%)",
      duration: 1,
      ease: "art-details",
      onComplete: () => {
        gsap.set(".nav", { pointerEvents: "none" });
      }
    });
    gsap.fromTo(".anii", {
      y: 50,
    }, {
      y: 0,
      delay: 0.8,
      stagger: 0.05
    })
  }
  const closeMenu = () => {
    gsap.to(".anii", {
      y: -50,
      stagger: 0.05
    })
    gsap.to(".open_menu", {
      right: "-100%",
      delay: 0.4,
      duration: .8,
      ease: "art-details",
      onComplete: () => {
        gsap.set(".nav", { pointerEvents: "auto" });
      }
    });
  }

  return (
    <>

      <div
        // style={{clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"}}
        className=" open_menu   right-[-100%] w-full h-[100dvh] bg-[#ECE7D9] text-[#020202] p-5 fixed z-[99999]">
        <div className=" absolute  right-5 w-full flex justify-end">
          <RiCloseLine size={30} onClick={closeMenu} />
        </div>
        <div className="w-full h-full center flex-col gap-5">
          {navLinks.map((link, i) => (
            <a
              onClick={closeMenu}
              key={link.label}
              href={link.href}
              className="relative   overflow-hidden flex flex-col items-center"
            >
              <h2 className=" anii text-2xl uppercase">{link.label}</h2>
            </a>
          ))}
          <a
            onClick={closeMenu}
            href="#contact"
            className="relative   overflow-hidden flex flex-col items-center"
          >
            <h2 className=" anii text-2xl uppercase">Join the community</h2>
          </a>
        </div>
      </div>

      <div className=" nav w-full h-16  absolute    lg:fixed top-0 left-0 z-[999] px-[4vw] flex items-center justify-between">
        <div className=" hidden lg:flex whitespace-nowrap  uppercase text-sm items-center h-full gap-5">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="block group  w-fit  relative cursor-pointer  transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]"
            >
              <span className=' group-hover:opacity-60 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]'>{link.label}</span>
              <span className="w-0 h-[1px]  absolute bg-black bottom-0.5 group-hover:w-full left-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] rounded-full"></span>
              {link?.desc &&(
                <span className='absolute z-[999]  flex items-center overflow-hidden pointer-events-none max-w-0 px-0 gap-x-1 -bottom-[140%] left-1/2  h-7 group-hover:px-2 group-hover:max-w-52 bg-[#EB8529]  transition-all duration-500 shrink-0' > 
                <RiCornerDownRightLine className='shrink-0' size={14}/>
                <span className='translate-y-[2px] shrink-0'>
                   { link.desc}
                  </span>
                </span>
              )}
            </a>
          ))}
        </div>
        <div className="w-[50%]  flex lg:justify-center ">
          <a href="/" className='w-[50%] md:w-[35%] lg:w-[25%]'>
            <img className=' w-full  lg:opacity-100 translate-y-[1vw]' src="/logo/SDAF black.png" alt="logo_black" />
          </a>
        </div>
        <div className=" lg:w-[25%] gap-2 flex items-center justify-end h-full ">
          <div className="flex items-center gap-2">
            <a href="#contact" className='hidden md:block'>
              <MainBtn txt="Join the Community" />
            </a>
            <RiMenuLine onClick={openMenu} className='lg:hidden' size={30} />
          </div>
          {/* <a href="https://maps.app.goo.gl/fLQy21BRnGkxEJpb6"
            target="_blank"
            rel="noopener noreferrer"
            className=' hidden lg:block  w-[10%]'>

            <img
              className="hover-orange transition-all duration-200 w-full"
              src="/images/location_icon2.png"
              alt="Drop Location"
            />
          </a> */}
        </div>
      </div>
    </>
  )
}

export default Header