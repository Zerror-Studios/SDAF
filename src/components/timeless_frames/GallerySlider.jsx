import React from 'react'
import Marquee from "react-fast-marquee";


const GalleryData = [
    {
        title: "Baseraa",
        desc: "Family, loss, redemption",
        year: 1981,
        img: "/images/gallery Images/BASERA_1_KAMAT.webp"
    },
    {
        title: "Pakeezah",
        desc: "Courtesan's tragic romance",
        year: 1972,
        img: "/images/gallery Images/PAKEEZAH_1_KAMAT.webp"
    },

    {
        title: "Sapno Ka Saudagar",
        desc: "Dream-seller turned hero",
        year: 1968,
        img: "/images/gallery Images/SAPNO_KA_SAUDAGAR_1_KAMAT.webp"
    },
    {
        title: "Aap Ki Kasam",
        desc: "Love, trust, betrayal",
        year: 1974,
        img: "/images/gallery Images/AAP_KI_KASAM_1_KAMAT.webp"
    },
    {
        title: "Tezaab",
        desc: "Revenge, romance, songs",
        year: 1988,
        img: "/images/gallery Images/TEZAAB_1_KAMAT.webp"
    },

    {
        title: "Brahmachari",
        desc: "Orphan caretaker's sacrifice",
        year: 1968,
        img: "/images/gallery Images/BRAMHACHARI_KAMAT_1.webp"
    }
]



const GallerySlider = () => {
    return (
        <div  >
            <div className="w-full bg_img pb-[20vw]   lg:pb-0 lg:py-[5vw]  relative ">
                {/* <img className='w-full h-full object-cover brightness-[.3] z-[-1] absolute top-0 left-0' src="https://cdn.prod.website-files.com/6734928e2af1829d3c568460/67aca7c5df93a525b9799963_Abstract%20Cosmic%20Landscape%201.avif" alt="" /> */}
                <div id='gallery' className="w-full  mb-10 py-[5vw] text-center">
                    <h2 className=' text-3xl lg:text-7xl'>A Glimpse Into the Archive</h2>
                </div>

                <div className="w-full flex  ">
                    <Marquee pauseOnClick={true} >

                        {GalleryData.map((item, index) => (
                            <div key={index} className=" px-10 lg:px-20 overflow-hidden w-fit h-full">
                                {index % 2 === 0 ? (
                                    <>
                                        {/* Image top, text below */}
                                        <img
                                            className=" w-[160px] h-[180px] lg:w-[280px] lg:h-[300px] aspect-square object-cover"
                                            src={item.img}
                                            alt={item.title}
                                        />
                                        <div className=" mt-2 lg:mt-5 ">
                                            <h2 className="capitalize mb-2 text-xl lg:text-3xl">{item.title}</h2>
                                            <p className=" text-sm lg:text-base leading-none pp_light">{item.desc}</p>
                                            <p className=" text-sm lg:text-base leading-none pp_light">{item.year}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* Text top, image below */}
                                        <div className=" mb-2 lg:mb-5">
                                            <h2 className="capitalize mb-2 text-xl lg:text-3xl">{item.title}</h2>
                                            <p className=" text-sm lg:text-base leading-none pp_light">{item.desc}</p>
                                            <p className=" text-sm lg:text-base leading-none pp_light">{item.year}</p>
                                        </div>
                                        <img
                                            className="w-[160px] h-[180px] lg:w-[280px] lg:h-[300px] aspect-square object-cover"
                                            src={item.img}
                                            alt={item.title}
                                        />
                                    </>
                                )}
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default GallerySlider