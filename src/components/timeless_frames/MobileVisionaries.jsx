"use client";
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from "split-type";
import { RiVolumeMuteLine, RiVolumeUpLine } from '@remixicon/react';

const MobileVisionaries = () => {


    const video1Ref = useRef(null)
    const video2Ref = useRef(null)
    const video3Ref = useRef(null)

    const [activeVideo, setActiveVideo] = useState(null)

    const toggleMute = (index) => {
        setActiveVideo(prev => prev === index ? null : index)

        const videos = [
            video1Ref.current,
            video2Ref.current,
            video3Ref.current
        ]

        videos.forEach((video, i) => {
            if (!video) return
            video.muted = i !== index
        })
    }

    useEffect(() => {
        const videos = [
            video1Ref.current,
            video2Ref.current,
            video3Ref.current
        ]

        videos.forEach((video, i) => {
            if (!video) return
            video.muted = activeVideo !== i
        })
    }, [activeVideo])


    useEffect(() => {
        const videos = [
            video1Ref.current,
            video2Ref.current,
            video3Ref.current
        ]

        const triggers = videos.map((video, index) => {
            if (!video) return null

            return ScrollTrigger.create({
                trigger: video,
                start: "top bottom",
                end: "bottom top",

                onEnter: () => {
                    video.muted = activeVideo !== index
                },

                onEnterBack: () => {
                    video.muted = activeVideo !== index
                },

                onLeave: () => {
                    video.muted = true
                    if (activeVideo === index) setActiveVideo(null)
                },

                onLeaveBack: () => {
                    video.muted = true
                    if (activeVideo === index) setActiveVideo(null)
                }
            })
        })

        return () => {
            triggers.forEach(t => t && t.kill())
        }
    }, [activeVideo])

    return (
        <div id='vision'>
            <div className="  bg_img  overflow-x-hidden px-[4vw]   w-full    ">
                <div className="  block text-center mb-5">
                    <h2 className='  text-3xl lg:text-7xl'>What Our Guests Said</h2>
                </div>
                <div className="w-full">
                    <div className=" relative aspect-[3/4]  mt-8 mb-2">
                        <video ref={video1Ref} loop autoPlay playsInline muted className='cover ' src="/videos/spok1.mp4" alt="loading" />
                        <button
                            onClick={() => toggleMute(0)}
                            className="absolute bottom-5 right-5 z-10 bg-white backdrop-blur-md p-2 rounded-full"
                        >
                            {activeVideo !== 0 ? <RiVolumeMuteLine size={16} /> : <RiVolumeUpLine size={16} />}
                        </button>
                    </div>
                    <p className=' text-base lg:text-xl  '>— Ajay Devgn </p>
                    <p className=' text-base lg:text-xl  '>— Seema Singh </p>
                    <p className=' text-base lg:text-xl  '>—  Ashish Chowdhry</p>
                </div>
                <div className="w-full">
                    <div className=" relative aspect-[3/4]  mt-10 mb-2">
                        <video ref={video2Ref} loop autoPlay playsInline muted className=' cover ' src="/videos/spok2.mp4" alt="loading" />
                        <button
                            onClick={() => toggleMute(1)}
                            className="absolute bottom-5 right-5 z-10 bg-white backdrop-blur-md p-2 rounded-full"
                        >
                            {activeVideo !== 1 ? <RiVolumeMuteLine size={16} /> : <RiVolumeUpLine size={16} />}
                        </button>
                    </div>
                    <p className=' text-base lg:text-base  '>— Mark Manuel</p>
                    <p className=' text-base lg:text-base  '>— Jitu Savlani.</p>
                </div>
                <div className="w-full">
                    <div className=" relative aspect-[3/4]  mt-10 mb-2 ">
                        <video ref={video3Ref} loop autoPlay playsInline muted className='cover ' src="/videos/spok3.mp4" alt="loading" />
                        <button
                            onClick={() => toggleMute(2)}
                            className="absolute bottom-5 right-5 z-10 bg-white backdrop-blur-md p-2 rounded-full"
                        >
                            {activeVideo !== 2 ? <RiVolumeMuteLine size={16} /> : <RiVolumeUpLine size={16} />}
                        </button>
                    </div>
                    <p className=' text-base lg:text-base  '>— Parvez Damania</p>
                </div>
            </div>
        </div>
    )
}

export default MobileVisionaries