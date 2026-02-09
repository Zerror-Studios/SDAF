"use client";
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from "split-type";


const AboutFoundation = () => {

    return (
        <div id='about' className=' pt-[8vw]'>
            <div className=" hidden lg:block foundation_parent w-full     px-[4vw]">
                <div className="w-full h-full  grid lg:grid-cols-12 gap-x-[2rem] gap-y-[clamp(2.5rem,2.072rem+2.14vw,4rem)]">

                    <div className="lg:col-start-3 col-span-5">
                        <h2 className=' text-3xl  lg:text-[4.5vw] leading-none'>The Shivdutt Das Art Foundation</h2>
                    </div>

                    <div
                        className="  found_clip_div_1 translate-y-[5vw] row-start-2 col-span-3">
                        <img src="/images/art foundation/img4.jpeg" alt="SATYAM_SHIVAM_SUNDARAM_WORKING_1_KAMAT" />
                    </div>

                    <div className="  lg:col-start-5 space-y-5 col-span-4">
                        <h2 className='  uppercase text-[#EB8529] text-sm font-semibold lg:text-xl'>Our Mission</h2>
                        <p className=' text-sm lg:text-lg  opacity-80 '>To support education, culture, and public access to India’s rich creative heritage.</p>
                        <p className=' text-sm lg:text-lg  opacity-80 '>The Shivdutt Das Art Foundation (SDAF) is an arts and culture initiative founded by Shivdutt Das—MD, Vishwa Samudra Holdings, and Director, Shivdutt Das Charity Foundation.</p>
                        <p className=' text-sm lg:text-lg  opacity-80'>SDAF spotlights the artists, artisans, and custodians who have shaped India’s creative life. Through exhibitions, talks, and learning programs, we make their work accessible to all.</p>
                        <p className=' text-sm lg:text-lg  opacity-80'>Our inaugural exhibition, Timeless Frames, marked the first step in this journey—bringing the work of an unsung hero to the public eye and fostering a dialogue around our shared cultural history.</p>
                    </div>

                    <div
                        className=" found_clip_div_2 lg:translate-y-[-5vw]   lg:col-start-10 col-span-3">
                        <img src="/images/art foundation/img2.jpeg" alt="TeesriManzil 3" />
                    </div>

                    <div
                        className="  found_clip_div_3 h-[30vw] lg:col-start-6 col-span-5">
                        <img src="/images/art foundation/img3.jpeg" alt="SHRI_420_2_KAMAT" />
                    </div>

                </div>
            </div>


            {/* ////mobile//// */}
            <div className=" w-full lg:hidden    px-[4vw]">
                <div className="w-full h-full  center flex-col gap-10">

                    <div className="w-full">
                        <h2 className=' text-3xl  lg:text-[4.5vw] leading-none'>The Shivdutt Das Art Foundation</h2>
                    </div>

                    <div
                        className="  ">
                        <img src="/images/art foundation/img4.jpeg" alt="SATYAM_SHIVAM_SUNDARAM_WORKING_1_KAMAT" />
                    </div>

                    {/* <div
                        className=" ">
                        <img src="/images/art foundation/img3.jpeg" alt="TeesriManzil 3" />
                    </div> */}

                    <div className="  w-full space-y-2 ">
                        <h2 className='  uppercase text-[#EB8529] text-sm lg:text-xl font-semibold mb-2'>Our Mission</h2>
                        <p className=' text-sm lg:text-lg  opacity-80 '>To support education, culture, and public access to India’s rich creative heritage.</p>
                        <p className=' text-sm lg:text-lg  opacity-80 '>The Shivdutt Das Art Foundation (SDAF) is an arts and culture initiative founded by Shivdutt Das—MD, Vishwa Samudra Holdings, and Director, Shivdutt Das Charity Foundation.</p>
                        <p className=' text-sm lg:text-lg  opacity-80'>SDAF spotlights the artists, artisans, and custodians who have shaped India’s creative life. Through exhibitions, talks, and learning programs, we make their work accessible to all.</p>
                        <p className=' text-sm lg:text-lg  opacity-80'>Our inaugural exhibition, Timeless Frames, marked the first step in this journey—bringing the work of an unsung hero to the public eye and fostering a dialogue around our shared cultural history.</p>
                    </div>




                </div>
            </div>

        </div>
    )
}

export default AboutFoundation
