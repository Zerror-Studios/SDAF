"use client";
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from "split-type";

const Visionaries = () => {

    useEffect(() => {

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".vision_paren",
                start: "top top",
                end: "+=1500",
                anticipatePin: 1,
                scrub: true,
                pin: true,
                // markers: true
            }
        })
        tl.to(".vision_head", {
            scale: 0.9,
            opacity: 0,
            duration: 1,
        }, "pa22")
        tl.from(".vision_imgs", {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            delay: 0.2
        }, "pa22")
        tl.from(".vision_img_1 , .vision_img_3", {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            delay: 1
        }, "pa22")
        if (window.innerWidth < 1024) {
            tl.to(".vision_img_2", {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                delay: 0.8
            }, "pa22")

        }


    }, [])


    return (
        <div id='vision'>
            <div className=" vision_paren bg_img  overflow-x-hidden   w-full  h-screen relative center  ">
                <div className=" vision_head block">
                    <h2 className='  text-3xl lg:text-7xl'>What Our Guests Said</h2>
                </div>
                <div className=" vision_imgs  w-full h-full absolute  grid grid-rows-3 lg:grid-rows-none  lg:grid-cols-[30%_40%_30%]">
                    <div className=" vision_img_1 translate-y-[20vw] lg:translate-y-0 translate-x-[-10vw] lg:translate-x-0 origin-center flex flex-col  justify-center items-end w-full gap-2 text-center ">
                        <div className=" w-[50%] md:w-[35%]  lg:w-[55%] ">
                            <video loop autoPlay playsInline muted controls className='aspect-[3/4] object-cover ' src="/videos/spok2.mp4" alt="loading" />

                        </div>
                        <div className="w-[50%] md:w-[35%]  lg:w-[55%]">
                            {/* <p className='w-full text-left text-xs lg:text-sm  leading-none'>“From studio file to museum wall—every still is light, craft, and history.”</p> */}
                            <h2 className='text-end text-sm lg:text-base  '>— Mark Manuel</h2>
                            <h2 className='text-end text-sm lg:text-base  '>— Jitu Savlani.</h2>

                        </div>
                    </div>
                    <div className=" vision_img_2 origin-center flex flex-col justify-center  items-center w-full gap-2  text-center ">
                        <div className=" w-[85%] md:w-[50%] lg:w-[70%]  ">
                            <video loop autoPlay playsInline muted controls className=' aspect-[3/4] object-cover object-right ' src="/videos/spok1.mp4" alt="loading" />
                        </div>
                        <div className=" w-[85%] md:w-[50%] lg:w-[70%] ">
                            {/* <p className='w-full text-left text-sm lg:text-lg leading-none'>“Preservation is only half the job; the other half is public access.”</p> */}
                            <h2 className='text-end text-base lg:text-xl  '>— Ajay Devgn </h2>
                            <h2 className='text-end text-base lg:text-xl  '>— Seema Singh </h2>
                            <h2 className='text-end text-base lg:text-xl  '>—  Ashish Chowdhry</h2>
                        </div>
                    </div>
                    <div className="  vision_img_3  translate-y-[-20vw]  lg:translate-y-0 translate-x-[10vw]  lg:translate-x-0 origin-center  flex flex-col justify-center  items-start w-full gap-2  text-center ">
                        <div className="w-[50%] md:w-[35%]  lg:w-[55%] ">
                            <video loop autoPlay playsInline muted controls className=' aspect-[3/4] object-cover  ' src="/videos/spok3.mp4" alt="loading" />
                        </div>
                        <div className="w-[50%] md:w-[35%]  lg:w-[55%]">
                            {/* <p className='w-full text-left text-xs lg:text-sm  leading-none'>“Archives aren’t nostalgia—they’re raw material for new imagination.”</p> */}
                            <h2 className='text-end text-sm lg:text-base'>— Parvez Damania</h2>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visionaries