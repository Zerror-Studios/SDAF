"use client"

import Image from "next/image"
import Link from "next/link"
import MainBtn from "../buttons/MainBtn"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function CanvasCreationUnique() {

    useGSAP(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".canvas_creation_sec",
                start: "top 70%",
                // markers: true,
                toggleActions: 'play none none reverse'
            }    
        })
        tl.from(".grid_img_paren_1",{
            clipPath:'inset(50%)',
            opacity: 0,
            stagger:.2,
            ease:"expo.out",
            duration: .8
        })


    })

    return (
        <div className=" max-lg:mt-14 canvas_creation_sec relative w-full overflow-hidden  flex flex-col md:flex-row items-stretch  md:gap-x-10 lg:gap-x-44  px-[4vw] ">

            {/* Canvas Text Block */}
            <div className=" w-full md:w-1/2  flex justify-center flex-col relative">
                <h2 className='  uppercase text-[#EB8529] text-sm font-semibold lg:text-xl'>Enduring Legacies | Edition 2</h2>

                {/* Huge Title */}
                <h2 className=" max-sm:hidden text-3xl  lg:text-[4.5vw] leading-none">
                    Canvas <br /> & Creation
                </h2>
                <h2 className=" md:hidden text-3xl mb-2 mt-5  lg:text-[4.5vw] leading-none">
                    Canvas & Creation
                </h2>
                <p className="mb-6 text-xs lg:text-lg   uppercase  ">
                    An SDAF Art Camp
                </p>
                <div className=" md:mt-8 ">

                    <p className="mb-6   text-sm lg:text-lg  opacity-80 ">
                        Sixteen artists. Three days. One purpose: to create.
                    </p>

                    <p className="mb-6   text-sm lg:text-lg  opacity-80 ">
                        In February 2026, SDAF brings together 16 of India’s most compelling
                        artists at Della Resorts, Lonavala — for three days of uninterrupted creation.
                    </p>

                    <p className="mb-6   text-sm lg:text-lg  opacity-80 ">
                        No briefs. No commissions. No constraints. Just time, space, and the
                        company of fellow creators.
                    </p>

                    <p className="mb-10   text-sm lg:text-lg  opacity-80 ">
                        The works produced will join the SDAF collection.
                    </p>

                    {/* CTA */}
                    <a
                        href="/canvas-and-creation"
                        className=""
                    >
                        <MainBtn txt="Learn More" />
                    </a>
                </div>
            </div>

            {/* Vertical Image Strip */}
            <div className=" max-sm:mt-8 w-full md:w-1/2  grid gap-5 grid-cols-2">

                <div className=" grid_img_paren_1 relative  aspect-6/7 w-[100%] md:w-[80%]">
                    <img
                        src="/images/home_canvas_creation/img1.webp"
                        alt="Artist working"
                        className="cover grid_img_paren_1_inner"
                    />
                </div>
                <div className="relative grid_img_paren_1 mt-20 w-[100%] aspect-6/7">
                    <img
                        src="/images/home_canvas_creation/img2.webp"
                        alt="Canvas texture"
                        className="cover"
                    />
                </div>
                <div className="relative grid_img_paren_1 -mt-20  w-full aspect-6/7">
                    <img
                        src="/images/home_canvas_creation/img3.webp"
                        alt="Studio detail"
                        className="cover scale-x-[-1]"
                    />
                </div>
                <div className="w-full flex justify-end items-end aspect-6/7">
                    <div className="relative grid_img_paren_1 w-[100%] md:w-[80%] aspect-6/7 ">
                        <img
                            alt="Abstract artwork"
                            src="/images/home_canvas_creation/img4.webp"
                            className="cover"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
