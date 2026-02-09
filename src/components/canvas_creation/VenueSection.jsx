"use client";
import React from 'react'
import MainBtn from '../buttons/MainBtn'
import Marquee from 'react-fast-marquee';
import Footer from '../common/Footer';

const venueImages = [
    "/images/canvas_and_creation/venue/img1.webp",
    "/images/canvas_and_creation/venue/img2.webp",
    "/images/canvas_and_creation/venue/img3.webp",
    "/images/canvas_and_creation/venue/img4.webp",
    "/images/canvas_and_creation/venue/img5.webp",
]


const VenueSection = () => {
    return (
        <>
            <div className='w-full  mt-14 lg:mt-20 '>
                <div className="flex px-[4vw] flex-col lg:items-center lg:text-center">

                <h2 className='  uppercase text-[#EB8529] text-sm font-semibold lg:text-xl'>The venue</h2>
                <h2 className=" text-3xl lg:text-5xl leading-none">
                    Della Resorts, Lonavala
                </h2>
                <div className=" mt-5 lg:w-[50%]">
                    <p className="mb-6 leading-tight   text-sm lg:text-lg  opacity-80 ">
                        Nestled in the Sahyadris, surrounded by mist and greenery that has inspired artists for generations.  For three days, this becomes a studio without walls — a sanctuary for uninterrupted creation.
                    </p>

                </div>
                <a href="https://maps.app.goo.gl/ou1RarLjuw3RmRve8" target='_blank'>
                    <MainBtn txt="View Map" />
                </a>
                </div>

                <div className="w-full mt-10 flex ">
                    <Marquee pauseOnClick={true} gradient gradientColor='#F1EDDF' gradientWidth={20} >
                        {venueImages.map((image, index) => (
                        <div key={index} className=" w-[60vw] lg:w-[30vw]  ml-5 lg:ml-8 aspect-4/3">
                            <img src={image} alt="loading" className='cover' />
                        </div>
                        ))}
                    </Marquee>
                </div>

            </div>
 
        </>
    )
}

export default VenueSection