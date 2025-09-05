import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from "split-type";

const CuratorVision = () => {

    useEffect(() => {

        if(window.innerWidth < 1024) return

        gsap.from(".curat_paren h2", {
            y: 100,
            scrollTrigger: {
                trigger: ".curat_paren",
                start: "top bottom",
                scrub: true
            }
        })

    }, [])


    return (
        <div>
            <div className=" curat_paren w-full   center flex-col">
                <h2 className=' text-3xl lg:text-7xl'>The Curator's Vision</h2>
                <img className='  mt-5 z-[-1] aspect-[9/12] w-[80vw] md:w-[32vw] lg:w-[25vw] object-cover grayscale-100' src="/images/exhibition/parveez damania.webp" alt="Parvez Damania" />

                <p className='mt-5 w-[80vw] md:w-[32vw] text-sm lg:text-lg lg:w-[25vw] leading-none '>"Curated by Parvez Damania, the selection traces working methods, star-making imagery,
                    and behind-the-scenes craft—pairing iconic frames with short captions that decode light,
                    angle, staging, and purpose."</p>

            </div>
        </div>
    )
}

export default CuratorVision