"use client";
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import MainBtn from '../buttons/MainBtn'
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger)

const TimelessMobileHero = () => {

    return (
        <div id='hero'>

            <div className="pt-20 px-[4vw]">
                <div className=' text-4xl leading-none relative '>
                    <h2>
                        Enduring Legacies  Timeless Frames
                    </h2>
                    <p className='leading-none text-sm mt-3'> A Look Back at Our Successful Inaugural Exhibition</p>
                </div>
                <div className="w-full my-5 center">
                    <div className="    h-[50vh] lg:h-[70vh] md:w-[40%]  center w-full  rounded-t-[1000px] overflow-hidden ">
                        <img className='    w-full h-full object-cover brightness-[1]' src="/images/focus grid/PYAASA_1_KAMAT.webp" alt="Clip Image" />
                    </div>
                </div>
                <p className='  text-sm  '>In September 2025, SDAF was proud to present Timeless Frames, a tribute to the pioneering photographer Damodar Kamat. The exhibition was a resounding success, celebrating a son of Maharashtra and unveiling a historic collection of unseen photographs.</p>
            </div>
            <div className="  lg:hidden  my-[10vw] text-[#020202] px-[4vw] w-full  flex flex-col lg:flex-row lg:gap-20 ">
                <div className=" w-full aspect-video my-7  md:my-[10vw] flex-col ">
                    <h2 className='  hero mb-5  leading-none text-3xl lg:text-5xl'>Event Highlights</h2>
                    <video loop autoPlay muted playsInline controls className='    w-full aspect-video object-cover' src="/videos/hero_video.mp4" alt="Clip Image" />
                </div>
                <div className="w-full  h-full center">
                    <div className="">
                        <p className=' text-sm  w-[100%] '>The week-long event featured a spectacular opening night, two insightful walkthroughs with Neha Kamat, and a dedicated Student Day.</p>
                        <p className=' text-sm  w-[100%]   mt-5'>Visitors were treated to curated displays of rare and iconic photographs, offering a deep dive into Damodar Kamat’s visual legacy. Each image told a story, highlighting the artistry, craft, and cultural significance of Indian cinema from the 1950s to the 1980s.</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default TimelessMobileHero