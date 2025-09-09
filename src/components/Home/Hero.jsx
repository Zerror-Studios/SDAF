import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import MainBtn from '../buttons/MainBtn'
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    useEffect(() => {

        if (window.innerWidth < 1024) return

        const makeSplit = (selector) => {
            const split = new SplitType(selector, {
                types: "lines",
                lineClass: "hero_split-line",
            });

            split.lines.forEach((line) => {
                const wrapper = document.createElement("div");
                wrapper.classList.add("block", "overflow-hidden");
                line.parentNode.insertBefore(wrapper, line);
                wrapper.appendChild(line);
            });
        }
        makeSplit(".hero_split_txt")




        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero_paren",
                start: "top top",
                pin: true,
                scrub: true,
                anticipatePin: 1,
                // markers: true,
            }
        })

        tl.to(".hero_para_1 , .hero_head_1 , .hero_head_2", {
            opacity: 0
        }, "par")

        tl.to(".clip_div", {
            height: "100vh",
            width: "100%",
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
        }, "par")
        tl.to(".clip_img", {
            filter: "brightness(.3)"
        }, "par")
        tl.to(".clip_img_2", {
            opacity: 1
        }, "par")
        tl.from(".hero_left_img", {
            opacity: 0
        }, "pp")
        tl.from(".hero_split-line", {
            y: 100,
            stagger: 0.01
        }, "pp");

    }, [])

    return (
        <div id='hero'>
            <div className=" hero_paren   bg_img w-full h-screen relative">
                <p className=' absolute bottom-[15%] text-xs lg:hidden hero_para_1 ml-[10%] text-left w-[300px] '>A photographic journey through Indian cinema from the Kamat
                    Foto Studio Archive. A tribute to the pioneering photographer,
                    Damodar Kamat.
                </p>
                {/* <img className='w-full pointer-events-none h-full object-cover brightness-75' src="/images/hero_bg.avif" alt="" /> */}
                <div className=" pointer-events-none absolute z-[9] top-[55%] lg:top-1/2 h-screen -translate-y-1/2  left-1/2 -translate-x-1/2  text-center   flex flex-col justify-between">
                    <h1 className='opacity-0 text-xs absolute pointer-events-none'>Enduring Legacies Timeless Frames</h1>
                    <h2 className=' hero_head_1 text-[11vw] translate-y-10 whitespace-nowrap'>Enduring Legacies</h2>
                    <p className=' opacity-0 lg:opacity-100 hero_para_1 ml-[5%] text-lg text-left lg:w-[350px] '>A photographic journey through Indian cinema from the Kamat
                        Foto Studio Archive. A tribute to the pioneering photographer,
                        Damodar Kamat.
                    </p>
                    <h2 className=' hero_head_2 text-[11vw]   whitespace-nowrap translate-y-[-10vw] md:translate-y-[1vw]'>Timeless Frames</h2>
                </div>

                <div className=" clip_div  absolute h-[50vh] lg:h-[70vh]  center w-[80%] md:w-[50%] lg:w-[30%] rounded-t-[1000px] overflow-hidden top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    {/* <img className='clip_img_2 opacity-0  w-full h-full object-cover brightness-75' src="/images/clipImage.avif" alt="Clip Image 2" /> */}
                    <img className=' clip_img absolute  w-full h-full object-cover brightness-[1]' src="/images/focus grid/PYAASA_1_KAMAT.webp" alt="Clip Image" />
                    <div id='schedule' className=" opacity-0 lg:opacity-100 text-white absolute w-full h-[80%] flex flex-col lg:flex-row lg:gap-20 ">
                        <div className="hidden lg:block w-1/2 h-full center">
                            <img className=' hidden lg:block hero_left_img  w-[60%]  brightness-75' src="/images/frame-removebg.png" alt="Silent Era" />
                        </div>
                        <div className="w-full lg:w-1/2 h-full center">
                            <div className="w-full">
                                <h2 className=' hero_split_txt hero whitespace-nowrap  leading-14 text-3xl lg:text-5xl'>Programme & Schedule</h2>
                                <p className='hero_split_txt  w-[35vw]   mt-5'>The Exhibition will be held at the Dilip Piramal Art Gallery NCPA. NCPA is not only one for the most prestigious address but also the Dilip Piramal Art Gallery is the best place to exhibit photographs in Mumbai. This Gallery is specifically created to Exhibit photographs.</p>
                                <p className='  hero_split_txt md:whitespace-nowrap uppercase text-[#EB8529]  text-xs  lg:text-sm mt-10'>Opening Night (By Invitation)</p>

                                <h2 className='   lg:text-2xl  hero_split_txt md:whitespace-nowrap '> Saturday, 20 Sep 2025 | 6 pm – 9 pm</h2>
                                <p className='mt-2  text-xs  lg:text-sm hero_split_txt whitespace-nowrap opacity-80'>6:20 pm — Welcome by SDAF</p>
                                <p className=' text-xs  lg:text-sm hero_split_txt whitespace-nowrap opacity-80'>6:25 pm — Remarks by Curator Parvez Damania</p>
                                <p className=' text-xs  lg:text-sm hero_split_txt whitespace-nowrap opacity-80'>6:30 pm — Guided Tour with Neha Kamat of the Kamat Archive</p>

                                <p className='  hero_split_txt md:whitespace-nowrap uppercase text-[#EB8529]  text-xs  lg:text-sm mt-10'>Public Viewing (Open to All)</p>

                                <h2 className='   lg:text-2xl   hero_split_txt md:whitespace-nowrap '> Sunday, 21 Sep – Friday, 26 Sep | 12 pm – 8 pm</h2>

                                {/* <p className='  hero_split_txt md:whitespace-nowrap uppercase text-[#EB8529]  text-xs  lg:text-sm mt-10'>Special Events</p>

                                <h2 className='   lg:text-2xl   hero_split_txt md:whitespace-nowrap '> Student Day: Tuesday, 23 Sep (Guided tours available)</h2>
                                <h2 className='   lg:text-2xl   hero_split_txt md:whitespace-nowrap '> Talk & Q&A Session: Wednesday, 24 Sep | 6:00 pm – 7:00 pm</h2> */}

                                <p className='  hero_split_txt md:whitespace-nowrap uppercase text-[#EB8529]  text-xs  lg:text-sm mt-10'>Venue</p>

                                <h2 className='   lg:text-2xl   hero_split_txt md:whitespace-nowrap '> Piramal NCPA Gallery, Nariman Point, Mumbai</h2>

                                <div className="hero_split_txt  mt-10 ">
                                    <a href="#contact">
                                        <button className="relative text-[#ffffff]  overflow-hidden group 
                      border border-white/70 uppercase  text-xs  lg:text-sm px-3 lg:px-5 py-1 lg:py-2 rounded-full
                     whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] 
                     hover:border-[#EB8529] hover:text-black">

                                            <p className='translate-y-[1px]'>RSVP</p>

                                            <div className="w-full h-full z-[-1]  bg-[#EB8529] 
                    absolute top-[100%] left-0 
                    transition-all duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] 
                    group-hover:top-0">
                                            </div>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


{/* /for mobile/ */}
            <div className="  lg:hidden  mb-[20vw] text-[#020202] px-[5.5vw] w-full  flex flex-col lg:flex-row lg:gap-20 ">
                <div className=" w-full my-[10vw] h-full center">
                    <img className='  hero_left_img  w-[70%]  brightness-75' src="/images/frame-removebg.png" alt="Silent Era" />
                </div>
                <div className="w-full  h-full center">
                    <div className="">
                        <h2 className=' hero_split_txt hero  leading-none text-[28px] lg:text-5xl'>Programme & Schedule</h2>
                                <p className='hero_split_txt text-sm  w-[100%]   mt-5'>The Exhibition will be held at the Dilip Piramal Art Gallery NCPA. NCPA is not only one for the most prestigious address but also the Dilip Piramal Art Gallery is the best place to exhibit photographs in Mumbai. This Gallery is specifically created to Exhibit photographs.</p>
                        <p className='  hero_split_txt md:whitespace-nowrap uppercase text-[#EB8529]  text-xs  lg:text-sm mt-5'>Opening Night (By Invitation)</p>

                        <p className='   lg:text-2xl  hero_split_txt md:whitespace-nowrap '> Saturday, 20 Sep 2025 | 6 pm – 9 pm</p>
                        <p className='mt-2  text-xs  lg:text-sm hero_split_txt opacity-80'>6:20 pm — Welcome by SDAF</p>
                        <p className=' text-xs  lg:text-sm hero_split_txt opacity-80'>6:25 pm — Remarks by Curator Parvez Damania</p>
                        <p className=' text-xs  lg:text-sm hero_split_txt opacity-80'>6:30 pm — Guided Tour with Neha Kamat of the Kamat Archive</p>

                        <p className='  hero_split_txt md:whitespace-nowrap uppercase text-[#EB8529]  text-xs  lg:text-sm mt-5'>Public Viewing (Open to All)</p>

                        <p className='   lg:text-2xl   hero_split_txt md:whitespace-nowrap '> Sunday, 21 Sep – Friday, 26 Sep | 12 pm – 8 pm</p>

                        {/* <p className='  hero_split_txt md:whitespace-nowrap uppercase text-[#EB8529]  text-xs  lg:text-sm mt-5'>Special Events</p>

                        <p className='   lg:text-2xl   hero_split_txt md:whitespace-nowrap '> Student Day: Tuesday, 23 Sep (Guided tours available)</p>
                        <p className='   lg:text-2xl   hero_split_txt md:whitespace-nowrap '> Talk & Q&A Session: Wednesday, 24 Sep | 6:00 pm – 7:00 pm</p> */}

                        <p className='  hero_split_txt md:whitespace-nowrap uppercase text-[#EB8529]  text-xs  lg:text-sm mt-5'>Venue</p>

                        <p className='   lg:text-2xl   hero_split_txt md:whitespace-nowrap '> Piramal NCPA Gallery, Nariman Point, Mumbai</p>

                        <div className="hero_split_txt  mt-5 ">
                            <a href="#contact">
                                <button className="relative text-[#020202]  overflow-hidden group 
                      border border-black uppercase  text-xs  lg:text-sm px-3 lg:px-5 py-1 lg:py-2 rounded-full
                     whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] 
                     hover:border-[#EB8529] hover:text-black">

                                    <p className='translate-y-[2px]'>RSVP</p>

                                    <div className="w-full h-full z-[-1]  bg-[#EB8529] 
                    absolute top-[100%] left-0 
                    transition-all duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] 
                    group-hover:top-0">
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero