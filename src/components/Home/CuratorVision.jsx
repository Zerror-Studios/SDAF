import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from "split-type";

const CuratorVision = () => {

    useEffect(() => {

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".curat_paren",
                start: "top top",
                end: "+=2500",
                scrub: true,
                pin: true,
                // markers: true
            }
        })
        tl.to(".curat_head", {
            scale: 0.9,
            opacity: 0,
        })
        tl.from(".curat_para_1", {
            scale: 0.9,
            opacity: 0,
        })
    }, [])

    return (
        <div>
            <div className=" curat_paren w-full h-screen center">
                <h2 className=' curat_head text-7xl'>The Curator's Vision</h2>
                <div className=" curat_para_1  absolute text-center w-[50%]  left-1/2 -translate-x-1/2">
                    <h2 className='text-3xl leading-none '>"Curated by Parvez Damania, the selection traces working methods, star-making imagery,
                        and behind-the-scenes craft—pairing iconic frames with short captions that decode light,
                        angle, staging, and purpose."</h2>
                </div>
            </div>
        </div>
    )
}

export default CuratorVision