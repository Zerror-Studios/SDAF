"use client";
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    useGSAP(() => {

        if(window.innerWidth < 1020) return

        gsap.fromTo(".hero_bg_img", {
            y: -200,
        }, {
            scrollTrigger: {
                trigger: ".homePage_hero_sec",
                start: "top top",
                endTrigger: ".hero_img_wrap",
                end: "bottom top",
                scrub: true
            },
            ease: "linear",
            y: 200
        })
    })

    return (
        <>
            <div className=" homePage_hero_sec  pt-[20vh] lg:pt-[15vw] ">
                <div className=" text-[13vw] md:text-[10vw] px-[4vw] capitalize leading-[10vw] font-thin">
                <div className="w-full ">
                    <h2>Art belongs</h2>
                </div>
                <div className="w-full text-end">
                    <h2> to everyone.</h2>
                </div>
                </div>
                <div className="  hero_img_wrap mt-5 w-full h-screen md:h-[120vh] overflow-hidden relative">

                    <div className="px-[4vw] text-sm lg:text-lg   md:w-[40%] text-white z-10 normal-case absolute top-[10%] md:top-[20%]">
                        <p>The Shivdutt Das Art Foundation supports artists, preserves cultural heritage, and makes India's creative legacy accessible to all.</p>
                    </div>

                    <div className="max-md:px-[4vw] text-sm lg:text-lg   md:w-[40%] text-white z-10 normal-case absolute bottom-[10%] md:bottom-[20%]  md:right-[4vw]">
                        <p className="mb-4">
                            We believe India’s creative heritage — past and present — deserves to be seen,
                            celebrated, and supported. We preserve the work of artists and artisans who
                            shaped India’s cultural life, often from behind the scenes.
                        </p>

                        <p>
                            At the same time, we support living artists by giving them what they need most:
                            time, space, and freedom to create — bringing important work into the light
                            through exhibitions, artist programs, and public access initiatives.
                        </p>
                    </div>

                    <img className=' hero_bg_img cover' src="/images/hero_img.avif" alt="" />

                </div>
            </div>
        </>
    )
}

export default Hero