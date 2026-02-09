"use client";
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import MainBtn from '../buttons/MainBtn'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)

const TimelessHero = () => {

    useGSAP(() => {

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
        tl.to(".hero_split_txt", {
            opacity: 100,
            duration: 0.1
        })

        tl.to(".clip_div", {
            height: "100vh",
            width: "100%",
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
        }, "par")
        tl.to(".clip_img", {
            filter: "brightness(.2)"
        }, "par")
        tl.to(".clip_img_2", {
            opacity: 1
        }, "par")
        tl.to(".hero_left_img", {
            opacity: 1
        }, "pp")
        tl.from(".hero_split-line", {
            y: 100,
            stagger: 0.01
        }, "pp");

    })

    return (
        <div id='hero'>
            <div className=" hero_paren   bg_img w-full h-screen relative">
                <p className=' absolute bottom-[10%] text-xs lg:hidden hero_para_1 ml-[10%] text-left w-[300px] leading-tight '>In September 2025, SDAF was proud to present Timeless Frames, a tribute to the pioneering photographer Damodar Kamat. The exhibition was a resounding success, celebrating a son of Maharashtra and unveiling a historic collection of unseen photographs.</p>
                {/* <img className='w-full pointer-events-none h-full object-cover brightness-75' src="/images/hero_bg.avif" alt="" /> */}
                <div className=" pointer-events-none absolute z-[9] top-[55%] lg:top-1/2 h-screen -translate-y-1/2  left-1/2 -translate-x-1/2  text-center   flex flex-col justify-between">
                    <h1 className='opacity-0 text-xs absolute pointer-events-none'>Enduring Legacies Timeless Frames</h1>
                    <div className=' hero_head_1 text-[11vw] relative translate-y-10 whitespace-nowrap'>
                        <h2>
                            Enduring Legacies
                        </h2>
                        <div className=" md:hidden  absolute  lg:bottom-3 right-0 text-base text-end">
                            <p className='leading-none text-xs lg:text-lg'> A Look Back at Our Successful <br /> Inaugural Exhibition</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                        <p className=' opacity-0 lg:opacity-100 hero_para_1 ml-[2%] text-lg text-left lg:w-[400px] leading-tight '>In September 2025, SDAF was proud to present Timeless Frames, a tribute to the pioneering photographer Damodar Kamat. The exhibition was a resounding success, celebrating a son of Maharashtra and unveiling a historic collection of unseen photographs.</p>
                        <p className=' opacity-0 lg:opacity-100 text-end hero_para_1 mr-[2%] text-lg  lg:w-[400px] leading-tight '>A Look Back at Our Successful <br /> Inaugural Exhibition</p>
                    </div>
                    <h2 className=' hero_head_2 text-[11vw]   whitespace-nowrap translate-y-[-10vw] md:translate-y-[1vw]'>Timeless Frames</h2>
                </div>

                <div className=" clip_div  absolute h-[50vh] lg:h-[70vh]  center w-[80%] md:w-[50%] lg:w-[30%] rounded-t-[1000px] overflow-hidden top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    {/* <img className='clip_img_2 opacity-0  w-full h-full object-cover brightness-75' src="/images/clipImage.avif" alt="Clip Image 2" /> */}
                    <img className=' clip_img absolute  w-full h-full object-cover brightness-[1]' src="/images/exhibition/UMRAO_JAAN_1_KAMAT.webp" alt="Clip Image" />
                    {/* <video loop autoPlay muted playsInline className=' clip_img absolute  w-full h-full object-cover brightness-[1]' src="/videos/hero_video.mp4" alt="Clip Image" /> */}


                    <div id='schedule' className=" opacity-0 lg:opacity-100 text-white absolute w-full  center text-center  ">
                        <div className="">
                            <h2 className=' hero_split_txt opacity-0 hero whitespace-nowrap  leading-14 text-3xl lg:text-5xl'>Event Highlights</h2>
                            <p className='hero_split_txt opacity-0 mt-10 text-lg   w-[40vw]'>The week-long event featured a spectacular opening night, two insightful walkthroughs with Neha Kamat, and a dedicated Student Day.</p>
                            <p className='hero_split_txt opacity-0 mt-5 text-lg  w-[40vw]'>Visitors were treated to curated displays of rare and iconic photographs, offering a deep dive into Damodar Kamat’s visual legacy. Each image told a story, highlighting the artistry, craft, and cultural significance of Indian cinema from the 1950s to the 1980s.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TimelessHero