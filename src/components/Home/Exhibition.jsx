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
                end: "+=2500",
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
            duration:2
        }, "pa")
        tl.from(".exhiv_slide_1", {
            top: "100%",
            duration: 2
        }, "pa")
        tl.from(".exhiv_slide_1 h2", {
            y: 100,
            duration: 2
        }, "pa")
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
        <div id='about'>
            <div className=" exhib_paren  w-full h-screen relative center bg-black ">
                <div className=" exhib_head block">
                <p className='text-xl text-[#EB8529]'>The Exhibition: Timeless Frames</p>
                <h2 className='  text-7xl'>About the Exhibition</h2>
                </div>
                <div className=" exhib_para_1  absolute text-center w-[50%]  left-1/2 -translate-x-1/2">
                    <h2 className='text-3xl leading-none '>Timeless Frames is a museum-style homage to the still photographs that taught India how to see its
                        cinema. Drawn from the meticulously stewarded Kamat Foto Studio Archive, the exhibition presents
                        rare black-and-white and color stills from the 1950s–1980s.
                    </h2>
                </div>
                <div className=" exhib_para_2  absolute text-center w-[50%]  left-1/2 -translate-x-1/2">
                    <h2 className='text-3xl leading-none '>Beyond star portraits, these images reveal how photography powered the filmmaking process itself by</h2>
                </div>

                <div className="exhiv_slide_1   flex flex-col items-center gap-5 absolute text-center w-[400px]  left-1/2 -translate-x-1/2">
                    <h2 className='text-7xl z-[9] whitespace-nowrap'>Raising Finance</h2>
                    <img className='w-full aspect-square object-cover brightness-75' src="/images/exhibition/GUIDE_1_KAMAT.webp" alt="" />
                    <p className='w-full text-left leading-none'>Producers used stills albums to secure funding for their projects.</p>
                </div>
                <div className="exhiv_slide_2    flex flex-col items-center gap-5 absolute text-center w-[400px]  left-1/2 -translate-x-1/2">
                    <h2 className='text-7xl whitespace-nowrap'>Maintaining Continuity</h2>
                    <img className='w-full aspect-square object-cover brightness-75' src="/images/exhibition/MERA_NAAM_JOKER_1_KAMAT.webp" alt="" />
                    <p className='w-full text-left leading-none'>Photos served as crucial references for sets, costumes, and actor positions across long shoots.</p>
                </div>
                <div className="exhiv_slide_3    flex flex-col items-center gap-5 absolute text-center w-[400px]  left-1/2 -translate-x-1/2">
                    <h2 className='text-7xl whitespace-nowrap'>Crafting Publicity</h2>
                    <img className='w-full aspect-square object-cover brightness-75' src="/images/exhibition/UMRAO_JAAN_1_KAMAT.webp" alt="" />
                    <p className='w-full text-left leading-none'>These images formed the visual language of magazines and theatre lobbies, building excitement long before trailers.</p>
                </div>
            </div>
        </div>
    )
}

export default Exhibition