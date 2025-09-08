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


        tl.to(".found_clip_div_2", {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }, "par2")
        tl.to(".found_clip_div_1", {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            delay: 0.1
        }, "par2")
        tl.to(".found_clip_div_3", {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            delay: 0.3
        }, "par2")

    }, [])

    return (
        <div id='about' className=' pt-[5vw]'>
            <div className=" hidden lg:block foundation_parent w-full     px-[4vw]">
                <div className="w-full h-full  grid lg:grid-cols-12 gap-x-[2rem] gap-y-[clamp(2.5rem,2.072rem+2.14vw,4rem)]">

                    <div className="lg:col-start-3 col-span-5">
                        <h2 className=' text-3xl  lg:text-[4.5vw] leading-none'>The Shivdutt Das Art Foundation</h2>
                    </div>

                    <div
                        style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        className="  found_clip_div_1 translate-y-[5vw] row-start-2 col-span-3">
                        <img src="/images/art foundation/img_1.jpg" alt="SATYAM_SHIVAM_SUNDARAM_WORKING_1_KAMAT" />
                    </div>

                    <div className="  lg:col-start-5 space-y-5 col-span-4">
                        <h2 className='  uppercase text-[#EB8529] text-sm lg:text-xl'>Our Mission</h2>
                        <p className=' text-sm lg:text-lg  opacity-80 '>To support education, culture, and public access to India's rich creative heritage.</p>
                        <p className=' text-sm lg:text-lg  opacity-80 '>Shivdutt Das Art Foundation (SDAF) is an arts and cultural initiative by Shivdutt Das MD, Vishwa
                            Samudra Holdings & Director, Shivdutt Das Charity Foundation) that supports education, culture and
                            public access to heritage</p>
                        <p className=' text-sm lg:text-lg  opacity-80'>SDAF spotlights the artists, artisans, and custodians who have shaped our nation's creative life. Through
                            exhibitions, talks, and learning programs, we make their work accessible to all.</p>
                    </div>

                    <div
                        style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        className=" found_clip_div_2 lg:translate-y-[-10vw]  lg:col-start-10 col-span-3">
                        <img src="/images/art foundation/img_2.webp" alt="TeesriManzil 3" />
                    </div>

                    <div
                        style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                        className="  found_clip_div_3 h-[30vw] lg:col-start-6 col-span-5">
                        <img src="/images/art foundation/img_3.jpg" alt="SHRI_420_2_KAMAT" />
                    </div>

                </div>
            </div>


            {/* ////mobile//// */}
            <div className=" w-full lg:hidden    px-[4vw]">
                <div className="w-full h-full  center flex-col gap-10">

                    <div className="w-full">
                        <h2 className=' text-3xl  lg:text-[4.5vw] leading-none'>The Shivdutt Das Art Foundation</h2>
                    </div>

                    <div
                        className="  ">
                        <img src="/images/art foundation/img_1.webp" alt="SATYAM_SHIVAM_SUNDARAM_WORKING_1_KAMAT" />
                    </div>

                    <div
                        className=" ">
                        <img src="/images/art foundation/img_2.jpg" alt="TeesriManzil 3" />
                    </div>

                    <div className="  w-full">
                        <h2 className='  mb-2 uppercase text-[#EB8529] text-lg lg:text-xl'>Our Mission</h2>
                        <p className=' text-sm lg:text-lg  opacity-80 '>To support education, culture, and public access to India's rich creative heritage.</p>
                        <p className=' text-sm lg:text-lg  opacity-80 '>Shivdutt Das Art Foundation (SDAF) is an arts and cultural initiative by Shivdutt Das MD, Vishwa
                            Samudra Holdings & Director, Shivdutt Das Charity Foundation) that supports education, culture and
                            public access to heritage</p>
                        <p className=' text-sm lg:text-lg  opacity-80'>SDAF spotlights the artists, artisans, and custodians who have shaped our nation's creative life. Through
                            exhibitions, talks, and learning programs, we make their work accessible to all.</p>
                    </div>

                    


                </div>
            </div>

        </div>
    )
}

export default AboutFoundation
