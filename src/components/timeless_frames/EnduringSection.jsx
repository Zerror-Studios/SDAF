"use client";
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from "split-type";

const EnduringSection = () => {


    useEffect(() => {

        if (window.innerWidth < 1024) return


        const makeSplit = (selector) => {
            const split = new SplitType(selector, {
                types: "lines",
                lineClass: "split-line",
            });

            split.lines.forEach((line) => {
                const wrapper = document.createElement("div");
                wrapper.classList.add("block", "overflow-hidden");
                line.parentNode.insertBefore(wrapper, line);
                wrapper.appendChild(line);
            });
        }
        const splits = [
            makeSplit(".split_head_1"),
            makeSplit(".split_head_2"),
            makeSplit(".split_head_3"),
            makeSplit(".split_para_1"),
            makeSplit(".split_para_2"),
        ];


        gsap.fromTo(".split-line", {
            y: "100%"
        }, {
            y: "0%",
            overflow: "visible",
            scrollTrigger: {
                trigger: ".enduring_desc",
                start: "top 50%",
                // markers: true,
                stagger: 0.5,
                toggleActions: "play none none reverse",
            }
        });

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".enduring_paren",
                start: "top 70%",
                end: "bottom 70%",
                scrub: true,
                anticipatePin: 1,
                // markers: true,
            }
        })


        tl.to(".clip_div_1", {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }, "par2")
        tl.to(".clip_div_2", {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            delay: 0.2

        }, "par2")
        tl.to(".clip_div_3", {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            delay: 0.4
        }, "par2")

    }, [])




    return (
        <div id='the-series' className='py-[10vw] pt-[25vw] lg:pt-[15vw] overflow-hidden px-[4vw] lg:px-0 w-full '>
            <div className=" lg:h-[100vh]  enduring_paren  w-full   center">
                <div className=" w-full lg:w-[70%] h-full  center flex-col">

                    <div className="w-full h-[20vw] lg:h-[15vw] flex  justify-between">
                        <h2 className=' text-5xl  md:text-[10vw] lg:translate-y-[-3vw] '>The </h2>
                        <div
                            // style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            className=" clip-on-laptop   clip_div_1 w-[35vw]  translate-y-[-4vw]  lg:w-[20vw] h-[100%] ">
                            <img className='w-full scale-[.9] lg:scale-[1] h-full object-cover ' src="/images/enduring/SANGAM_1_KAMAT.webp" alt="SANGAM_1_KAMAT" />
                        </div>
                        <h2 className=' text-5xl   md:text-[10vw] lg:translate-y-[-3vw] '>Series</h2>
                    </div>
                    <div className="w-full h-[20vw] lg:h-[15vw] flex items-center justify-start gap-2 lg:gap-10">
                        <h2 className=' text-5xl h-fit pb-3  md:text-[10vw] translate-y-[-2vw]  inline-block bg-gradient-to-r from-[#EB8529] to-[#020202] bg-clip-text text-transparent '>Enduring</h2>
                        <div
                            // style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            className=" clip-on-laptop   clip_div_2 w-[35vw] lg:w-[20vw] h-[100%] ">
                            <img className='w-full h-full object-cover ' src="/images/enduring/PAKEEZAH_1_KAMAT.webp" alt="PAKEEZAH_1_KAMAT" />
                        </div>

                    </div>
                    <div className="w-full h-[20vw] lg:h-[15vw] flex items-center justify-end gap-2 lg:gap-10">
                        <div
                            // style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            className=" clip-on-laptop   clip_div_3 w-[35vw] lg:w-[20vw] h-[100%] ">
                            <img className='w-full h-full object-cover ' src="/images/enduring/TEESRI_MANZIL_1_KAMAT.webp" alt="TEESRI_MANZIL_1_KAMAT" />
                        </div>
                        <h2 className=' text-5xl  md:text-[10vw] translate-y-[-1vw] '>Legacies</h2>
                    </div>
                </div>
            </div>
            <div className="  enduring_desc  w-full pt-[20vw] md:pt-[10vw] lg:pt-[5vw]   center">
                <div className=" w-full lg:w-[70%]   flex flex-col lg:flex-row items-center justify-between">
                    <div className=" lg:hidden w-full lg:w-1/2 translate-y-[1vw]  text-3xl  md:text-[3.7vw] leading-tight">
                        <h2 className='split_head_1'>Honouring the Unsung Heroes of Indian Culture</h2>
                    </div>
                    <div className=" hidden lg:block w-full lg:w-1/2 translate-y-[1vw]  text-3xl  md:text-[3.7vw] leading-tight">
                        <h2 className='split_head_1'>Honouring the  </h2>
                        <h2 className='split_head_2  '>Unsung  Heroes of</h2>
                        <h2 className='split_head_3  '>Indian Culture
                        </h2>
                    </div>
                    <div className=" w-full lg:w-1/2  lg:text-xl   mt-5 lg:pl-[10%]  flex flex-col  gap-2 lg:gap-10 opacity-80">
                        <p className='split_para_1   '>Enduring Legacies is a recurring series dedicated to creators who had an outsized impact on India’s
                            cultural landscape, often from behind the scenes.</p>
                        <p className='split_para_2   '>
                            Our first edition opened with a photographic journey into the classic decades of Indian cinema, courtesy
                            of the legendary Kamat Foto Studio.
                        </p>
                        <p className='split_para_2   '>
                            The journey to celebrate India's unsung heroes has just begun. Stay tuned for announcements on Edition 2 of the Enduring Legacies series.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnduringSection