"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import MainBtn from "../buttons/MainBtn";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);

const Loader = () => {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Function to get all assets (images + fonts)
        const getAssets = () => {
            const imgs = Array.from(document.images).map((img) => img.src);
            const cssBackgrounds = Array.from(document.querySelectorAll("*"))
                .map((el) => {
                    const bg = window.getComputedStyle(el).backgroundImage;
                    if (bg && bg !== "none") {
                        return bg.replace(/^url\(["']?/, "").replace(/["']?\)$/, "");
                    }
                    return null;
                })
                .filter(Boolean);
            return [...imgs, ...cssBackgrounds];
        };

        const assets = getAssets();
        let loaded = 0;

        if (assets.length === 0) {
            setProgress(100);
            setIsLoaded(true);
            return;
        }

        assets.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = () => {
                loaded++;
                const percent = Math.round((loaded / assets.length) * 100);
                setProgress(percent);
                if (percent === 100) {
                    setIsLoaded(true);
                }
            };
        });

        // Font loading
        document.fonts.ready.then(() => {
            setProgress((p) => (p < 100 ? 100 : p));
            setIsLoaded(true);
        });
    }, []);

    useEffect(() => {
        if (isLoaded) {
            // Animate loader exit
            gsap.to(".load_div", {
                opacity: 0,
                onComplete: () => {
                    gsap.set(".load_div", { display: "none" });
                    gsap.set(".load_btn", { display: "flex" });
                    gsap.to(".load_btn", {
                        opacity: 1,
                    })
                }
            })


        } else {
            // Animate loader_fill based on progress
            gsap.to(".loader_fill", {
                width: `${progress}%`,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    }, [progress, isLoaded]);



    const completeLoad = () => {
        CustomEase.create("art-details", "0.65, 0.01, 0.05, 0.99"),
        gsap.to(".loader_bg_img , .loader_txt_box", {
            opacity:0
        })
        gsap.to(".ver_line", {
            height: "100vh",
            duration:1,
            delay:0.5,
            ease:"power4.inOut"
        })
        gsap.to(".open_left , .open_right", {
            opacity:1,
            duration:1,
            onComplete:()=>{
                gsap.set(".loader_wrapper", {
                    backgroundColor:"transparent",
                })
                gsap.set(".ver_line", {
                    opacity:0,
                    delay:0.8
                })
            }
        })
        gsap.to(".open_left", {
            left: "-50vw",
            delay:1.75,
            duration:1,
            ease:"art-details"
        })
        gsap.to(".open_right", {
            right: "-50vw",
            delay:1.75,
            duration:1,
            ease:"art-details",
            onComplete:()=>{
                gsap.set(".loader_wrapper", {
                    display:"none",
                })
            }
        })
        gsap.to
    }


    return (
        <div className="loader_wrapper w-full h-screen fixed z-[9999] top-0 left-0 bg-[#020202]">
            <div className="ver_line absolute h-0 z-[99] w-[2px] bg-white left-1/2 -translate-x-1/2"></div>
                <div className=" absolute opacity-0 top-0 left-0 open_left w-[50vw] bg-[#020202]  h-full"></div>
                <div className=" absolute opacity-0 top-0 right-0 open_right w-[50vw] bg-[#020202] h-full"></div>
            {/* Cloud image */}
            <img
                className="loader_bg_img  absolute bottom-10 left-0 w-full"
                src="https://cdn.prod.website-files.com/6734928e2af1829d3c568460/682afe3e22c0faac6a6df8c1_cloud%20(1).avif"
                alt=""
            />

            {/* Loader text + bar */}
            <div className="loader_txt_box absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center text-white">
                <h3 className="text-[4vw] translate-y-[4vw]">Shivdutt Das</h3>
                <h2 className="uppercase text-[8vw]">Art</h2>
                <h2 className="uppercase text-[8vw] -translate-y-[5.5vw]">Foundation</h2>

                {/* Progress bar */}
                <div className="h-16 relative">

                    <div className=" load_div  h-16 flex flex-col items-center justify-between w-full">
                        <div className="w-full center relative overflow-hidden h-[2px]">
                            <div className="w-full absolute top-0 left-0 h-[2px] bg-white/20"></div>
                            <div className="w-0 loader_fill absolute top-0 left-0 h-[2px] bg-white"></div>
                        </div>
                        <div className="counter text-lg mt-2">{progress}%</div>
                    </div>
                    <div className="load_btn hidden  opacity-0  h-16  items-center justify-center">
                        <div onClick={completeLoad} className="">
                            <MainBtn  txt="Visit Site" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
