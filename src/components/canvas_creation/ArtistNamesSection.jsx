"use client";
import React, { useState } from 'react'

const artists = [
        {
        name: "Murali Nagapuzha",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Chennai",
        specialty: "Nature-centric naïve art",
        achievements: "Pollock-Krasner Grant",
    },
    {
        name: "Nilisha Phad",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Mumbai",
        specialty: "Portraiture",
        achievements: "Elizabeth Greenshields Grant (2x)",
    },
    {
        name: "Ghanshyam Gupta",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Mumbai",
        specialty: "Optical illusion art",
        achievements: "RCA London trained",
    },
    {
        name: "Nilesh Vede",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Mumbai",
        specialty: "Sculpture",
        achievements: "2025 Lalit Kala Akademi National Award",
    },
    {
        name: "Ravi Chaurasiya",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Delhi",
        specialty: "Interdisciplinary — painting, installation, video",
        achievements: null,
    },
    {
        name: "Ankur Rana",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Delhi",
        specialty: "Oil painting, figurative works",
        achievements: "11 solo shows",
    },
    {
        name: "Monica Ghule",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Mumbai",
        specialty: "Painting & graphics",
        achievements: "Bendre-Husain Scholar",
    },
    {
        name: "Manojkumar Sakale",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Mumbai",
        specialty: "Portrait artist, watercolor, village characters",
        achievements: null,
    },
    {
        name: "Sachin Sagare",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Sawantwadi",
        specialty: "Rural Maharashtra themes, village life",
        achievements: null,
    },
    {
        name: "Kandi Narsimlu",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Hyderabad",
        specialty: "Folk/rural Telangana themes",
        achievements: null,
    },
    {
        name: "Jhon Douglas",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Thane",
        specialty: "Contemporary figurative works",
        achievements: null,
    },
    {
        name: "Renuka Douglas",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Thane",
        specialty: "Contemporary painting",
        achievements: null,
    },
    {
        name: "Ramchandra Kharatmal",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Pune",
        specialty: "Traditional and contemporary painting",
        achievements: null,
    },
    {
        name: "Varsha Kharatmal",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Pune",
        specialty: "Contemporary Indian art",
        achievements: null,
    },
    {
        name: "Sharvari Luth",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Nashik",
        specialty: "Contemporary painting",
        achievements: null,
    },
    {
        name: "Anant Mandala",
        img: "https://static.vecteezy.com/system/resources/previews/051/156/271/large_2x/faceless-user-flat-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-sign-profile-male-symbol-vector.jpg",
        city: "Mumbai",
        specialty: "Contemporary art practice",
        achievements: null,
    },
];

export default function ArtistNamesSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="w-full">
            <div className="mx-auto lg:text-center max-w-[90rem] px-[4vw]">
                {/* Headline */}
                <h2 className='  uppercase text-[#EB8529] text-sm font-semibold lg:text-xl'>the artists</h2>

                <div className="w-full lg:text-center flex flex-col items-center">

                    <h2 className=" text-3xl lg:text-5xl ">
                        16 Artists from Across India
                    </h2>

                    {/* Body copy */}
                    <p className=" mt-2 lg:mt-6 lg:w-1/2   text-sm lg:text-lg  opacity-80 ">
                        From Chennai to Delhi, Hyderabad to Nashik — painters, sculptors,
                        and printmakers converge for three days of creation.
                    </p>

                </div>
                {/* Artist Grid */}
                <div className=" mt-5 lg:mt-14 grid grid-cols-2 gap-3 lg:gap-6 sm:grid-cols-3 md:grid-cols-4">

                    {artists.map((artist, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={artist.name}
                                className="group cursor-pointer"
                                onMouseEnter={() =>
                                    setActiveIndex(isActive ? null : index)
                                }
                            >
                                {/* Card */}
                                <div className="relative group overflow-hidden  transition-all duration-300">
                                    {/* Headshot */}
                                    <div className="aspect-square center relative w-full ">
                                        <div
                                            className="absolute  w-[80%] aspect-square px-5 gap-y-5 flex flex-col justify-center items-center text-center   bg-white   [clip-path:inset(50%)] opacity-0 group-hover:opacity-100 transition-all duration-300   group-hover:[clip-path:inset(0%)]  ">
                                            <p className="mt-2 uppercase">
                                                {artist.specialty}
                                            </p>

                                            {artist.achievements && (
                                                <p className="text-sm">
                                                    {artist.achievements}
                                                </p>
                                            )}
                                        </div>
                                        <img src={artist.img} className='cover' alt="" />
                                    </div>

                                    {/* Name + City */}
                                    <div className="lg:p-4">
                                        <h2 className=" text-xl lg:text-3xl leading-none  mt-2 ">
                                            {artist.name}
                                        </h2>
                                        <p className=" max-sm:text-sm opacity-80 ">
                                            {artist.city}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}