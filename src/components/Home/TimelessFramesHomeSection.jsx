import React from 'react'
import MainBtn from '../buttons/MainBtn'
import { Link } from 'next-view-transitions'

const TimelessFramesHomeSection = () => {
    return (
        <div className=' px-[4vw] w-full mt-14 lg:mt-20 flex flex-col md:items-center justify-center md:text-center'>
            <h2 className='  uppercase text-[#EB8529] text-sm font-semibold lg:text-xl'>Enduring Legacies | Edition 1</h2>
            <h2 className=" text-3xl  lg:text-[4.5vw] leading-none">
                Timeless frames
            </h2>

            <div className=" w-full md:w-[35vw] lg:w-[25vw]  my-6 mg:my-10 aspect-5/6">
                <img className='cover' src="/images/exhibition/kamat.jpg" alt="" />
            </div>

            <div className=" md:w-[70%] lg:w-[50%] flex flex-col md:items-center">
                <p className="mb-6   text-sm lg:text-lg  opacity-80 ">
                    In September 2025, SDAF presented its inaugural exhibition: a tribute to the pioneering cinema photographer Damodar Kamat.
                </p>
                <p className="mb-6   text-sm lg:text-lg  opacity-80 ">
                    The week-long event brought rare photographs from the 1950s–1980s to public view for the first time — celebrating a son of Maharashtra and an unsung hero of Indian cinema.
                </p>
                <a
                    href="/timeless-frames"
                    className=""
                >
                    <MainBtn txt="View Exhibition Archive " />
                </a>
            </div>
        </div>
    )
}

export default TimelessFramesHomeSection