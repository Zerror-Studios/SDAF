import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import MainBtn from '../buttons/MainBtn'
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    useEffect(() => {


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
        tl.from(".hero_left_img", {
            opacity: 0
        },"pp")
        tl.from(".hero_split-line", {
            y: 100,
            stagger:0.01
        },"pp");

    }, [])

    return (
        <div id='hero'>
            <div className=" hero_paren w-full h-screen relative">
                <img className='w-full pointer-events-none h-full object-cover brightness-75' src="/images/hero_bg.avif" alt="" />
                <div className=" pointer-events-none absolute z-[9] top-1/2 h-screen -translate-y-1/2  left-1/2 -translate-x-1/2  text-center text-white  flex flex-col justify-between">
                    <h2 className=' hero_head_1 text-[13vw] whitespace-nowrap'>Enduring Legacies</h2>
                    <p className=' hero_para_1 ml-[13%] text-left text-sm w-[300px] '>A photographic journey through Indian cinema from the Kamat
                        Foto Studio Archive. A tribute to the pioneering photographer,
                        Damodar Kamat.
                    </p>
                    <h2 className=' hero_head_2 text-[13vw] whitespace-nowrap translate-y-[3vw]'>Timeless Frames</h2>
                </div>

                <div className=" clip_div absolute h-[70vh]  center w-[30%] rounded-t-[1000px] overflow-hidden  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <img className='w-full h-full object-cover brightness-75' src="/images/clipImage.avif" alt="" />
                    <img className=' absolute mix-blend-overlay w-full h-full object-cover brightness-75' src="/images/andrew-neel-acowe0pCVBg-unsplash.webp" alt="" />
                    <div className=" text-white absolute w-full h-[80%] flex gap-20 ">
                        <div className="w-1/2 h-full center">
                            <img className=' hero_left_img  w-full  brightness-75' src="https://cdn-ihjkmbb.nitrocdn.com/TcEkMoOCPwOTSCzgeeonLUMWPVOKTHca/assets/images/optimized/rev-ed07c47/nmicindia.com/wp-content/uploads/2023/05/Silent-Era.png" alt="" />
                        </div>
                        <div className="w-1/2 h-full center">
                            <div className="">
                                <h2 className=' hero_split_txt hero text-5xl'>Programme & Schedule</h2>
                                <p className='  hero_split_txt whitespace-nowrap uppercase text-[#EB8529] text-sm mt-10'>Opening Night (By Invitation)</p>

                                <h2 className='text-2xl  hero_split_txt whitespace-nowrap '> Saturday, 20 Sep 2025 | 6 pm – 9 pm</h2>
                                <p className='mt-2 text-sm hero_split_txt opacity-80'>6:20 pm — Welcome by SDAF</p>
                                <p className='text-sm hero_split_txt opacity-80'>6:25 pm — Remarks by Curator Parvez Damania</p>
                                <p className='text-sm hero_split_txt opacity-80'>6:30 pm — Guided Tour with Neha Kamat of the Kamat Archive</p>

                                <p className='  hero_split_txt whitespace-nowrap uppercase text-[#EB8529] text-sm mt-10'>Public Viewing (Open to All)</p>

                                <h2 className='text-2xl   hero_split_txt whitespace-nowrap '> Sunday, 21 Sep – Friday, 26 Sep | 11 am – 8 pm</h2>

                                <p className='  hero_split_txt whitespace-nowrap uppercase text-[#EB8529] text-sm mt-10'>Special Events</p>

                                <h2 className='text-2xl   hero_split_txt whitespace-nowrap '> Student Day: Tuesday, 23 Sep (Guided tours available)</h2>
                                <h2 className='text-2xl   hero_split_txt whitespace-nowrap '> Talk & Q&A Session: Wednesday, 24 Sep | 6:00 pm – 7:00 pm</h2>

                                <p className='  hero_split_txt whitespace-nowrap uppercase text-[#EB8529] text-sm mt-10'>Venue</p>

                                <h2 className='text-2xl   hero_split_txt whitespace-nowrap '> Piramal NCPA Gallery, Nariman Point, Mumbai</h2>

                                <div className="hero_split_txt mt-10 ">
                                    <MainBtn txt="RSVP" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero