import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import MainBtn from '../buttons/MainBtn'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    useEffect(() => {

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
        tl.to(".hero_anim_txt", {
            y: 0
        }, "par2")
        tl.from(".hero_anim_txt_paren", {
            y: 10,
        }, "par2")

    }, [])

    return (
        <div>
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
                    <img className='w-full h-full object-cover' src="/images/clipImage.avif" alt="" />
                    <div className=" text-white absolute w-[50%] h-[70%] text-center  center flex-col">
                        <div className="block hero_anim_txt_paren overflow-hidden">
                            <p className=' hero_anim_txt whitespace-nowrap uppercase translate-y-[100%] text-[#EB8529] text-sm mt-10'>Opening Night (By Invitation)</p>
                        </div>
                        <div className="block hero_anim_txt_paren overflow-hidden">
                            <h2 className='text-3xl hero_anim_txt whitespace-nowrap translate-y-[100%] '> Saturday, 20 Sep 2025 | 6–9 pm</h2>
                        </div>
                        <div className="block hero_anim_txt_paren overflow-hidden">
                            <p className=' hero_anim_txt whitespace-nowrap uppercase translate-y-[100%] text-[#EB8529] text-sm mt-10'>Public Viewing (Open to All)</p>
                        </div>
                        <div className="block hero_anim_txt_paren overflow-hidden">
                            <h2 className='text-3xl hero_anim_txt whitespace-nowrap translate-y-[100%] '> 21–26 Sep 2025 | 11 am–8 pm</h2>
                        </div>
                        <div className="block hero_anim_txt_paren overflow-hidden">
                            <p className=' hero_anim_txt whitespace-nowrap uppercase translate-y-[100%] text-[#EB8529] text-sm mt-10'>Venue</p>
                        </div>
                        <div className="block hero_anim_txt_paren overflow-hidden">
                            <h2 className='text-3xl hero_anim_txt whitespace-nowrap translate-y-[100%] '> Piramal NCPA Gallery, Nariman Point, Mumbai</h2>
                        </div>
                        <div className="block hero_anim_txt_paren overflow-hidden mt-20">
                            <div className=" hero_anim_txt translate-y-[101%]">
                                <MainBtn txt="RSVP" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero