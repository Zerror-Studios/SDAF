import React from 'react'
import MainBtn from '../buttons/MainBtn'
import { RiCloseLine, RiMenuLine } from '@remixicon/react'
import gsap from 'gsap'


const navLinks = [
  { href: "#hero", label: "home" },
  { href: "#about", label: "about" },
  { href: "#vision", label: "vision" },
  { href: "#focus", label: "focus" },
  { href: "#gallery", label: "gallery" },
]

const Header = () => {

  const openMenu = () => {
    gsap.to(".open_menu", {
      right: 0,
      // clipPath: "polygon(0% 0, 0% 0, 0% 100%, 0% 100%)",
      duration: 1,
      ease: "custom",
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
      ease: "custom",
      onComplete: () => {
        gsap.set(".nav", { pointerEvents: "auto" });
      }
    });
  }

  return (
    <div>

      <div
        // style={{clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"}}
        className=" open_menu right-[-100%] w-full h-[100dvh] bg-[#020202] text-white p-5 fixed z-[99999]">
        <div className=" absolute  right-5 w-full flex justify-end">
          <RiCloseLine size={30} onClick={closeMenu} />
        </div>
        <div className="w-full h-full center flex-col gap-5">
          {navLinks.map((link, i) => (
            <a
              onClick={closeMenu}
              key={link.label}
              href={link.href}
              className="relative text-white  overflow-hidden flex flex-col items-center"
            >
              <h2 className=" anii text-3xl uppercase">{link.label}</h2>
            </a>
          ))}
        </div>
      </div>

      <div className=" nav w-full h-16 text-white fixed top-0 left-0 z-[999]  px-[5.5vw] flex items-center justify-between">
        <div className=" hidden lg:flex w-[25%]  uppercase text-xs items-center h-full gap-5">
          {navLinks.map((link, i) => (
            <p
              key={i}
              className="block group overflow-hidden relative cursor-pointer hover:opacity-60 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)]"
            >
              <a href={link.href}>{link.label}</a>
              <span className="w-full h-[1px] bg-white absolute bottom-0.5 left-[-100%] group-hover:left-0 transition-all duration-[0.735s] ease-[cubic-bezier(0.625,0.05,0,1)] rounded-full"></span>
            </p>
          ))}
        </div>
        <div className="w-[50%] h-full flex items-center ">
          <img className=' w-[50%] md:w-[25%] lg:opacity-0 translate-y-[1vw]' src="/logo/SDAF white.png" alt="" />
        </div>
        <div className="lg:w-[25%] flex items-center gap-2 justify-end">
          <a href="#contact">
            <MainBtn txt="RSVP" />
          </a>
          <RiMenuLine onClick={openMenu} className='lg:hidden' size={30} />
        </div>
      </div>
    </div>
  )
}

export default Header