import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from "split-type";

const EnduringSection = () => {


    useEffect(() => {


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
        <div className='py-[10vw] w-full bg-[#020202]'>
            <div className=" h-[100vh]  enduring_paren  w-full  text-white center">
                <div className="w-[70%] h-full  center flex-col">
                    <div className="w-full h-[15vw] flex  justify-between">
                        <h2 className='text-[12vw] translate-y-[-3.5vw] '>The</h2>
                        <div
                            style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            className=" clip_div_1 w-[20vw] h-[100%] ">
                        <img className='w-full h-full object-cover' src="/images/enduring/SANGAM_1_KAMAT.webp" alt="" />
                        </div>
                        <h2 className='text-[12vw] translate-y-[-3.5vw] '>Series</h2>
                    </div>
                    <div className="w-full h-[15vw] flex items-center justify-start gap-10">
                        <h2 className='text-[12vw] translate-y-[-2vw]  inline-block bg-gradient-to-r from-[#EB8529] to-white bg-clip-text text-transparent '>Enduring</h2>
                        <div
                            style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            className=" clip_div_2 w-[20vw] h-[100%] ">
                            <img className='w-full h-full object-cover' src="/images/enduring/PAKEEZAH_1_KAMAT.webp" alt="" />
                        </div>

                    </div>
                    <div className="w-full h-[15vw] flex items-center justify-end gap-10">
                        <div
                            style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            className=" clip_div_3 w-[20vw] h-[100%] ">
                            <img className='w-full h-full object-cover' src="/images/enduring/TEESRI_MANZIL_1_KAMAT.webp" alt="" />
                        </div>
                        <h2 className='text-[12vw] translate-y-[-1vw] '>Legacies</h2>
                    </div>
                </div>


            </div>
            <div className="  enduring_desc  w-full pt-[5vw] text-white  center">
                <div className="w-[70%]  flex items-center justify-between">
                    <div className="w-1/2   text-[3.7vw] leading-tight">
                        <h2 className='split_head_1'>Honouring the  </h2>
                        <h2 className='split_head_2  '>Unsung  Heroes of</h2>
                        <h2 className='split_head_3  '>Indian Culture
                        </h2>
                    </div>
                    <div className="w-1/2 pl-[10%]  flex flex-col gap-10 opacity-60">
                        <p className='split_para_1   '>Enduring Legacies is a recurring series dedicated to creators who had an outsized impact on India’s
                            cultural landscape, often from behind the scenes.</p>
                        <p className='split_para_2   '>
                            Our first edition opens with a photographic journey into the classic decades of Indian cinema, courtesy
                            of the legendary Kamat Foto Studio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnduringSection