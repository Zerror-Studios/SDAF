"use client";
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from "split-type";

const MobileVisionaries = () => {

    return (
        <div id='vision'>
            <div className="  bg_img  overflow-x-hidden px-[4vw]   w-full    ">
                <div className="  block text-center mb-5">
                    <h2 className='  text-3xl lg:text-7xl'>What Our Guests Said</h2>
                </div>
                <div className="w-full">
                    <video loop autoPlay playsInline muted controls className='aspect-[3/4]  mt-8 mb-2 object-cover ' src="/videos/spok1.mp4" alt="loading" />
                    <p className=' text-base lg:text-xl  '>— Ajay Devgn </p>
                    <p className=' text-base lg:text-xl  '>— Seema Singh </p>
                    <p className=' text-base lg:text-xl  '>—  Ashish Chowdhry</p>
                </div>
                <div className="w-full">
                    <video loop autoPlay playsInline muted controls className='aspect-[3/4]  mt-10 mb-2 object-cover ' src="/videos/spok2.mp4" alt="loading" />
                    <p className=' text-base lg:text-base  '>— Mark Manuel</p>
                    <p className=' text-base lg:text-base  '>— Jitu Savlani.</p>
                </div>
                <div className="w-full">
                    <video loop autoPlay playsInline muted controls className='aspect-[3/4]  mt-10 mb-2 object-cover ' src="/videos/spok3.mp4" alt="loading" />
                    <p className=' text-base lg:text-base  '>— Parvez Damania</p>
                </div>
            </div>
        </div>
    )
}

export default MobileVisionaries