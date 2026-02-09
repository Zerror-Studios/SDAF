"use client";
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from "split-type";

const Exhibition = () => {

    useEffect(() => {

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".exhib_paren",
                start: "top top",
                end: "+=4000",
                scrub: true,
                pin: true,
                // markers: true
            }
        })
        tl.to(".exhib_head", {
            scale: 0.9,
            opacity: 0,
        })
        tl.from(".exhib_para_1", {
            scale: 0.9,
            opacity: 0,
        })
        tl.to(".exhib_para_1", {
            opacity: 0,
        })
        tl.from(".exhib_para_2", {
            scale: 0.9,
            opacity: 0,
        })
        tl.to(".exhib_para_2", {
            opacity: 0,
            duration: 2
        }, "pa")
        if (window.innerWidth > 1024) {
            tl.from(".exhiv_slide_1", {
                top: "100%",
                duration: 2
            }, "pa")
        }
        if (window.innerWidth > 1024) {
            tl.from(".exhiv_slide_1 h2", {
                y: 100,
                duration: 2
            }, "pa")
        }
        if (window.innerWidth < 1024) {
            tl.from(".exhiv_slide_1", {
                scale: 0.9,
                opacity: 0,
                duration: 2
            }, "pa")
        }
        tl.to(".exhiv_slide_1", {
            scale: 0.9,
            opacity: 0,
            delay: 2
        }, "pa")
        tl.from(".exhiv_slide_2", {
            scale: 0.9,
            opacity: 0,
            delay: 2
        }, "pa")
        tl.to(".exhiv_slide_2", {
            scale: 0.9,
            opacity: 0,
            delay: 3
        }, "pa")
        tl.from(".exhiv_slide_3", {
            scale: 0.9,
            opacity: 0,
            delay: 3
        }, "pa")

    }, [])


    return (
        <div id='the-exhibition'>
            <div className=" exhib_paren bg_img    w-full px-[4vw] lg:px-0 h-screen relative center  ">
                <div className=" exhib_head block">
                    <p className=' text-sm lg:text-xl text-[#EB8529]'>Exhibition Archive</p>
                    <h2 className='    text-3xl  lg:text-7xl'>Timeless Frames</h2>
                </div>
                <div className=" exhib_para_1  absolute text-center w-[90%] md:w-[50%]  left-1/2 -translate-x-1/2">
                    <h2 className=' text-xl lg:text-3xl leading-none '>Timeless Frames was a museum-style homage to the still photographs that taught India how to see its
                        cinema. Drawn from the meticulously stewarded Kamat Foto Studio Archive, the exhibition presented
                        rare black-and-white and colour stills from the 1950s–1980s.</h2>
                </div>
                <div className=" exhib_para_2  absolute text-center w-[90%] md:w-[50%]  left-1/2 -translate-x-1/2">
                    <h2 className='text-xl lg:text-3xl leading-none'>
                        Beyond star portraits, these images revealed how photography powered the filmmaking process itself — a legacy we celebrated through a series of galleries showcasing the art, the opening night, and the vibrant atmosphere of the exhibition.
                    </h2>
                </div>

                <div className="exhiv_slide_1   flex flex-col items-center gap-5 absolute text-center w-full px-[4vw] lg:px-0 lg:w-[450px]  left-1/2 -translate-x-1/2">
                    <h2 className='  text-3xl  lg:text-7xl z-[9] whitespace-nowrap'>The Art</h2>
                    <img className='w-full aspect-square object-cover ' src="/images/exhibition/kamat.webp" alt="GUIDE_1_KAMAT" />
                    <p className='w-full text-left leading-none text-sm lg:text-lg'>This striking photograph of Damodar Kamat offers a glimpse into the visual poetry that made his stills an enduring part of India’s cinematic memory.</p>
                </div>
                <div className="exhiv_slide_2    flex flex-col items-center gap-5 absolute text-center w-full px-[4vw] lg:px-0 lg:w-[450px]  left-1/2 -translate-x-1/2">
                    <h2 className='  text-3xl  lg:text-7xl whitespace-nowrap'>The Opening Night</h2>
                    <img className='w-full aspect-square object-cover' src="/images/exhibition/img2.jpeg" alt="MERA_NAAM_JOKER_1_KAMAT" />
                    <p className='w-full text-left leading-none text-sm lg:text-lg'>Highlights from the inauguration evening, capturing the excitement, interactions, and celebrations that marked the launch of Timeless Frames.</p>
                </div>
                <div className="exhiv_slide_3    flex flex-col items-center gap-5 absolute text-center w-full px-[4vw] lg:px-0 lg:w-[450px]  left-1/2 -translate-x-1/2">
                    <h2 className='  text-3xl  lg:text-7xl whitespace-nowrap'>The Atmosphere</h2>
                    <img className='w-full aspect-square object-cover' src="/images/exhibition/img3.jpeg" alt="UMRAO_JAAN_1_KAMAT" />
                    <p className='w-full text-left leading-none text-sm lg:text-lg'>Capturing the gallery space, musical performances, and moments of guests engaging with the art, these images bring the vibrant atmosphere of Timeless Frames to life.</p>
                </div>
            </div>
        </div>
    )
}

export default Exhibition