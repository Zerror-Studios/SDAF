import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from "split-type";

const ManBehind = () => {

    useEffect(() => {

        if (window.innerWidth < 1024) return

        const makeSplit = (selector) => {
            const split = new SplitType(selector, {
                types: "lines",
                lineClass: "man_split-line",
            });

            split.lines.forEach((line) => {
                const wrapper = document.createElement("div");
                wrapper.classList.add("block", "overflow-hidden");
                line.parentNode.insertBefore(wrapper, line);
                wrapper.appendChild(line);
            });
        }
        makeSplit(".kamot_last_sec h2")

        if (window.innerWidth > 1024) {
            gsap.fromTo(".man_split-line", {
                y: 100,
            }, {
                y: 0,
                scrollTrigger: {
                    trigger: ".kamot_last_sec",
                    start: "top 60%",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })

        }
    }, [])


    return (
        <div>
            <div className=" kamot_paren   pt-[10vw]  w-full ">
                <div className="w-full  mb-5 lg:mb-0 lg:h-[30vh] center flex-col">
                    <div className="block">
                        <p className=' text-sm lg:text-xl text-[#EB8529]'>The Man Behind the Lens</p>
                        <h2 className=' text-2xl lg:text-7xl'>Damodar Kamat (1923–1967)</h2>
                    </div>
                </div>
                <div className=" big_img lg:sticky mb-[10vw] z-[-1] top-1/2 lg:-translate-y-1/2  w-full center flex-col">
                    <img className=' w-[80vw]  md:w-[32vw] lg:w-[25vw]' src="/images/exhibition/DAMODAR_KAMAT.webp" alt="damodar kamat" />
                    <p className=' w-[80vw] text-sm lg:text-lg md:w-[32vw] lg:w-[25vw] mt-5 leading-none'>A proud Maharashtrian and a perfectionist, Damodar Kamat founded Kamat Foto Flash in 1945 at
                        Famous Studios, Mahalaxmi. He was a master of his craft, known for his quiet precision and technical
                        genius.</p>
                </div>
                <div className="  hidden lg:block w-full  translate-y-[-5vw]   ">
                    <p className='w-[25%] h-[40vh] ml-[5%] text-2xl'>He devised a dual-camera rig to shoot in both B/W and color as the industry transitioned.</p>
                    <div className="flex justify-end w-full">
                        <p className='w-[25%] h-[40vh] mr-[5%] text-2xl'>He famously crafted an illusionary "library" for Guru Dutt’s Pyaasa using clever in-studio techniques.</p>
                    </div>
                    <p className='w-[25%] h-[40vh] ml-[5%] text-2xl'>His work was essential for directors, producers, and actors alike.</p>
                </div>
                <div className=" kamot_last_sec w-full py-[10vw] lg:py-0  px-[4vw] md:px-20 lg:px-0 center  lg:h-[20vw] mb-[10vw] text-center   ">
                    <h2 className=' text-lg lg:text-4xl w-full lg:w-[60%]'>After his untimely passing at 44, his colleagues and later his son Vidyadhar, and now grandchildren Neha
                        and Abhishek, preserved and expanded an archive that today exceeds 300,000 negatives. Timeless
                        Frames brings these invaluable studio files to the museum wall for the first time.</h2>
                </div>
            </div>
        </div>
    )
}

export default ManBehind