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
                scrub: true,
                pin: true,
                // markers: true
            }
        })
        tl.to(".vision_head", {
            scale: 0.9,
            opacity: 0,
        }, "pa22")
        tl.from(".vision_slide_1", {
            scale: 0.9,
            opacity: 0,
            delay: 0.2
        }, "pa22")
        tl.to(".vision_slide_1", {
            scale: 0.9,
            opacity: 0,
            delay: .4
        }, "pa")
        tl.from(".vision_slide_2", {
            scale: 0.9,
            opacity: 0,
            delay: .5
        }, "pa")
        tl.to(".vision_slide_2", {
            scale: 0.9,
            opacity: 0,
            delay: 1.5
        }, "pa")
        tl.from(".vision_slide_3", {
            scale: 0.9,
            opacity: 0,
            delay: 1.5
        }, "pa")

    }, [])


    return (
        <div id='vision'>
            <div className=" vision_paren bg_img    w-full  h-screen relative center  ">
                <div className=" vision_head block">
                    <h2 className='  text-3xl lg:text-7xl'>From the Visionaries</h2>
                </div>
                <div className="vision_slide_1   flex flex-col items-center gap-5 z-[-1] absolute text-center w-[300px] lg:w-[400px]  left-1/2 -translate-x-1/2">
                    <img className='w-full aspect-[9/12] object-cover brightness-75' src="/images/visionaries/ON SET PAKEEZAH WITH MEENA KUMARI.webp" alt="ON SET PAKEEZAH WITH MEENA KUMARI" />
                    <div className="">
                        <p className='w-full text-left text-sm lg:text-lg leading-none'>“Preservation is only half the job; the other half is public access.”</p>
                        <h2 className='text-end text-sm lg:text-xl  mt-2'>— Shivdutt Das </h2>
                    </div>
                </div>
                <div className="vision_slide_2    flex flex-col items-center gap-5 absolute text-center w-[300px] lg:w-[400px]  left-1/2 -translate-x-1/2">
                    <img className='w-full aspect-[9/12] object-cover brightness-75 grayscale-100' src="/images/visionaries/Parvez Damania.webp" alt="Parvez Damania" />
                    <div className="">
                        <p className='w-full text-left text-sm lg:text-lg leading-none'>“Archives aren’t nostalgia—they’re raw material for new imagination.”</p>
                        <h2 className='text-end text-sm lg:text-xl  mt-2'>— Parvez Damania</h2>
                    </div>
                </div>
                <div className="vision_slide_3    flex flex-col items-center gap-5 absolute text-center w-[300px] lg:w-[400px]  left-1/2 -translate-x-1/2">
                    <img className='w-full aspect-[9/12] object-cover brightness-75' src="/images/visionaries/SHRI_420_3_KAMAT.webp" alt="SHRI_420_3_KAMAT" />
                    <div className="">
                        <p className='w-full text-left text-sm lg:text-lg leading-none'>“From studio file to museum wall—every still is light, craft, and history.”</p>
                        <h2 className='text-end text-sm lg:text-xl  mt-2'>— Neha Kamat</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visionaries