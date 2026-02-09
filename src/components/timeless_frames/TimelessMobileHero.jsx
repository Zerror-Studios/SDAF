"use client";
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import MainBtn from '../buttons/MainBtn'
import SplitType from 'split-type'
import { RiVolumeMuteLine, RiVolumeUpLine } from '@remixicon/react';
gsap.registerPlugin(ScrollTrigger)

const TimelessMobileHero = () => {

    const videoRef = useRef(null)
    const [muted, setMuted] = useState(true)

    const toggleMute = () => {
        if (!videoRef.current) return
        videoRef.current.muted = !muted
        setMuted(!muted)
    }

    useEffect(() => {
        if (!videoRef.current) return

        const video = videoRef.current

        const trigger = ScrollTrigger.create({
            trigger: video,
            start: "top bottom",
            end: "bottom top",
            onEnter: () => {
                video.muted = muted
            },
            onEnterBack: () => {
                video.muted = muted
            },
            onLeave: () => {
                video.muted = true
                setMuted(true)
            },
            onLeaveBack: () => {
                video.muted = true
                setMuted(true)
            }
        })

        return () => {
            trigger.kill()
        }
    }, [muted])


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
                        <img className='    w-full h-full object-cover brightness-[1]' src="/images/exhibition/UMRAO_JAAN_1_KAMAT.webp" alt="Clip Image" />
                    </div>
                </div>
                <p className='  text-sm  '>In September 2025, SDAF was proud to present Timeless Frames, a tribute to the pioneering photographer Damodar Kamat. The exhibition was a resounding success, celebrating a son of Maharashtra and unveiling a historic collection of unseen photographs.</p>
            </div>
            <div className="  lg:hidden  my-14 text-[#020202] px-[4vw] w-full  flex flex-col lg:flex-row lg:gap-20 ">
                <div className=" w-full aspect-video   ">
                    <h2 className='  hero mb-5  leading-none text-3xl lg:text-5xl'>Event Highlights</h2>
                    <div className="relative aspect-video w-full">
                        <video ref={videoRef} loop autoPlay muted playsInline className='cover' src="/videos/hero_video.mp4" alt="Clip Image" />
                        <button
                            onClick={toggleMute}
                            className="absolute bottom-2 right-2 z-10 bg-white backdrop-blur-md p-2 rounded-full hover:bg-black/80 transition"
                            aria-label={muted ? "Unmute video" : "Mute video"}
                        >
                            {muted ? (
                                <RiVolumeMuteLine size={16} className="text-black" />
                            ) : (
                                <RiVolumeUpLine size={16} className="text-black" />
                            )}
                        </button>

                    </div>
                    <div className="mt-5">
                        <p className=' text-sm  w-[100%] '>The week-long event featured a spectacular opening night, two insightful walkthroughs with Neha Kamat, and a dedicated Student Day.</p>
                        <p className=' text-sm  w-[100%]   mt-2'>Visitors were treated to curated displays of rare and iconic photographs, offering a deep dive into Damodar Kamat’s visual legacy. Each image told a story, highlighting the artistry, craft, and cultural significance of Indian cinema from the 1950s to the 1980s.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TimelessMobileHero