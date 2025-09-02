import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from "split-type";


const AboutFoundation = () => {

    useEffect(() => {

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".foundation_parent",
                start: "top 70%",
                end: "bottom 70%",
                scrub: true,
                anticipatePin: 1,
                // markers: true,
            }
        })


        tl.to(".found_clip_div_1", {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }, "par2")
        tl.to(".found_clip_div_2", {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            delay: 0.2
        }, "par2")
        tl.to(".found_clip_div_3", {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            delay: 0.4
        }, "par2")

    }, [])

    return (
        <div>
            <div className="foundation_parent w-full  bg-[#020202] px-[5.5vw]">
                <div className="w-full h-full  grid grid-cols-12 gap-x-[2rem] gap-y-[clamp(2.5rem,2.072rem+2.14vw,4rem)]">

                    <div className="col-start-3 col-span-5">
                        <h2 className='  text-[5vw] leading-none'>The Shivdutt Das Art Foundation</h2>
                    </div>

                    <div
                        style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        className=" found_clip_div_1 translate-y-[5vw] row-start-2 col-span-3">
                        <img src="/images/art foundation/SATYAM_SHIVAM_SUNDARAM_WORKING_1_KAMAT.webp" alt="" />
                    </div>

                    <div className="  col-start-5 space-y-5 col-span-4">
                        <h2 className='  uppercase text-[#EB8529] text-xl'>Our Mission</h2>
                        <p className='  opacity-60 '>To support education, culture, and public access to India's rich creative heritage.</p>
                        <p className='  opacity-60 '>Shivdutt Das Art Foundation (SDAF) is an arts and cultural initiative by Shivdutt Das MD, Vishwa
                            Samudra Holdings & Director, Shivdutt Das Charity Foundation) that supports education, culture and
                            public access to heritage</p>
                        <p className='  opacity-60'>SDAF spotlights the artists, artisans, and custodians who have shaped our nation's creative life. Through
                            exhibitions, talks, and learning programs, we make their work accessible to all.</p>
                    </div>

                    <div
                        style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        className="found_clip_div_2 translate-y-[-10vw]  col-start-10 col-span-3">
                        <img src="/images/art foundation/TeesriManzil 3.webp" alt="" />
                    </div>

                    <div
                        style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        className=" found_clip_div_3 h-[30vw] col-start-6 col-span-5">
                        <img src="/images/art foundation/SHRI_420_2_KAMAT.webp" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutFoundation
