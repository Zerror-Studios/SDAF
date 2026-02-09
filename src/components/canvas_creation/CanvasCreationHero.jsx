import React from 'react'

const CanvasCreationHero = () => {
    return (
        <>
            <div className="w-full max-lg:pt-[20vh] lg:h-screen items-center px-[4vw]  lg:flex  justify-between ">
                <div className=" h-[80%]   flex flex-col justify-center">
                    <div className=" h-[70%]  flex flex-col justify-end text-[13vw] lg:text-[10vw] capitalize leading-12 lg:leading-[8vw] font-thin">
                        <h2 className='  uppercase text-[#EB8529] text-xs font-semibold lg:text-xl'>An SDAF Art Camp</h2>
                        <h2>Canvas &</h2>
                        <h2 className='flex'> <span className='pointer-events-none opacity-0'>.......</span> Creation</h2>
                    </div>
                    <div className=" w-full h-[30%] flex mt-5 lg:mt-0   items-end  text-xs lg:text-base justify-between lg:gap-20">
                        <p>• February 9–11</p>
                        <p>•  2026 Della Resorts</p>
                        <p> •  Lonavala 16 Artists</p>
                    </div>
                </div>
                <div className=" mt-5 lg:mt-0 h-full flex justify-end items-center">
                    <div className=" h-[40vh] lg:h-[80%] overflow-hidden w-full lg:w-[30vw]">
                        <img className='cover' src="https://images.unsplash.com/photo-1753287532537-6f7a9184d14e?q=80&w=729&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
            </div>

            <div className=" px-[4vw] w-full my-12 lg:my-44 lg:flex flex-col items-center lg:text-center">
                 <h2 className=" text-3xl lg:text-5xl lg:w-1/2  leading-none">
                   What happens when you give artists exactly what they need?
                </h2>
                <p className=" my-4 lg:my-6 lg:mt-10 lg:w-1/2   text-sm lg:text-lg  opacity-80 ">
                    Most working artists rarely get uninterrupted time to create. Between commissions, teaching, and daily life, the space for pure exploration shrinks.
                </p>
                <p className=" mb-4  lg:mb-6  lg:w-1/2  text-sm lg:text-lg  opacity-80 ">
                    Canvas & Creation is SDAF's answer: bring 16 artists together, provide everything they need — materials, space, accommodation — and step back.
                </p>
                <p className=" mb-4  lg:mb-6  uppercase text-sm lg:text-lg  opacity-80 ">
                    No briefs. No themes. No judges. <br />
                    Just three days of focused creation.
                </p>

            </div>
        </>
    )
}

export default CanvasCreationHero