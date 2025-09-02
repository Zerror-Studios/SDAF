import React from 'react'

const AboutFoundation = () => {
    return (
        <div>
            <div className="w-full h-screen bg-[#020202] px-[5.5vw]">
                <div className="w-full h-full  grid grid-cols-12 gap-x-[2rem] gap-y-[clamp(2.5rem,2.072rem+2.14vw,4rem)]">

                    <div className="col-start-3 col-span-5">
                        <h2 className='text-[5vw] leading-none'>The Shivdutt Das Art Foundation</h2>
                    </div>

                    <div className="  translate-y-[5vw] row-start-2 col-span-3">
                        <img src="https://cdn.prod.website-files.com/6734928e2af1829d3c568460/6746f266f64158298731e48d_home_intro_img-1-p-500.jpg" alt="" />
                    </div>

                    <div className="  col-start-5 space-y-5 col-span-4">
                        <h2 className='uppercase text-[#c9b46d] text-xl'>Our Mission</h2>
                        <p className='opacity-60 '>To support education, culture, and public access to India's rich creative heritage.</p>
                        <p className='opacity-60 '>Shivdutt Das Art Foundation (SDAF) is an arts and cultural initiative by Shivdutt Das MD, Vishwa
                            Samudra Holdings & Director, Shivdutt Das Charity Foundation) that supports education, culture and
                            public access to heritage</p>
                        <p className='opacity-60'>SDAF spotlights the artists, artisans, and custodians who have shaped our nation's creative life. Through
                            exhibitions, talks, and learning programs, we make their work accessible to all.</p>
                    </div>

                    <div className=" translate-y-[-10vw]  col-start-10 col-span-3">
                        <img src="https://cdn.prod.website-files.com/6734928e2af1829d3c568460/6746f266179eba53bc511bf2_home_intro_img-2-p-500.avif" alt="" />
                    </div>

                    <div className=" h-[30vw] col-start-6 col-span-5">
                        <img src="https://cdn.prod.website-files.com/6734928e2af1829d3c568460/6746f2668a26a1778c11750a_home_intro_img-3-p-800.avif" alt="" />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AboutFoundation
