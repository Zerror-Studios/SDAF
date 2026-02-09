"use client";
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from "split-type";
import { RiVolumeMuteLine, RiVolumeUpLine } from '@remixicon/react';

const MobileVisionaries = () => {


    const videoRefs = useRef([])
    const [mutedStates, setMutedStates] = useState([true, true, true])

    const toggleMute = (index) => {
        setMutedStates(prev => {
            const updated = prev.map((_, i) => i !== index)

            videoRefs.current.forEach((video, i) => {
                if (video) video.muted = i !== index
            })

            return updated
        })
    }

    return (
        <div id='vision'>
            <div className="  bg_img  overflow-x-hidden px-[4vw]   w-full    ">
                <div className="  block text-center mb-5">
                    <h2 className='  text-3xl lg:text-7xl'>What Our Guests Said</h2>
                </div>
                <div className="w-full">
                    <div className=" relative aspect-[3/4]  mt-8 mb-2">
                        <video ref={el => (videoRefs.current[0] = el)} loop autoPlay playsInline muted className='cover ' src="/videos/spok1.mp4" alt="loading" />
                        <button
                            onClick={() => toggleMute(0)}
                            className="absolute bottom-5 right-5 z-10 bg-white backdrop-blur-md p-2 rounded-full"
                        >
                            {mutedStates[0] ? <RiVolumeMuteLine size={16} /> : <RiVolumeUpLine size={16} />}
                        </button>
                    </div>
                    <p className=' text-base lg:text-xl  '>— Ajay Devgn </p>
                    <p className=' text-base lg:text-xl  '>— Seema Singh </p>
                    <p className=' text-base lg:text-xl  '>—  Ashish Chowdhry</p>
                </div>
                <div className="w-full">
                    <div className=" relative aspect-[3/4]  mt-10 mb-2">
                        <video ref={el => (videoRefs.current[1] = el)} loop autoPlay playsInline muted className=' cover ' src="/videos/spok2.mp4" alt="loading" />
                        <button
                            onClick={() => toggleMute(1)}
                            className="absolute bottom-5 right-5 z-10 bg-white backdrop-blur-md p-2 rounded-full"
                        >
                            {mutedStates[1] ? <RiVolumeMuteLine size={16} /> : <RiVolumeUpLine size={16} />}
                        </button>
                    </div>
                    <p className=' text-base lg:text-base  '>— Mark Manuel</p>
                    <p className=' text-base lg:text-base  '>— Jitu Savlani.</p>
                </div>
                <div className="w-full">
                    <div className=" relative aspect-[3/4]  mt-10 mb-2 ">
                        <video ref={el => (videoRefs.current[2] = el)} loop autoPlay playsInline muted className='cover ' src="/videos/spok3.mp4" alt="loading" />
                        <button
                            onClick={() => toggleMute(2)}
                            className="absolute bottom-5 right-5 z-10 bg-white backdrop-blur-md p-2 rounded-full"
                        >
                            {mutedStates[2] ? <RiVolumeMuteLine size={16} /> : <RiVolumeUpLine size={16} />}
                        </button>
                    </div>
                    <p className=' text-base lg:text-base  '>— Parvez Damania</p>
                </div>
            </div>
        </div>
    )
}

export default MobileVisionaries