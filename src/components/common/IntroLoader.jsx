import React, { useEffect, useState } from "react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);

const IntroLoader = () => {
    const [progress, setProgress] = useState(0);
    CustomEase.create("art-details", "0.65, 0.01, 0.05, 0.99"),

        useEffect(() => {

            if (window.lenis) {
                window.lenis.stop()
            }

            let obj = { value: 0 };

            gsap.to(obj, {
                value: 100,
                duration: 2.5,
                ease: "power2.out",
                onUpdate: () => {
                    setProgress(Math.floor(obj.value));

                    if (window.lenis) {
                        window.lenis.stop()
                    }
                },
                onComplete: () => {
                    gsap.to(".ver_line", {
                        height: "100vh",
                        duration: 1,
                        delay: 0.5,
                        ease: "art-details"
                    })
                    gsap.to(".loader_paren", {
                        opacity: 0,
                        duration: 1,
                        delay: 0.5,
                    })
                    // Optional: Hide loader after done
                    if (window.innerWidth > 1024) {
                        gsap.to(".logo_img", {
                            top: "1vw",
                            delay: 1.75,
                            duration: 1,
                            width: "8%",
                            ease: "art-details"
                        })
                    } else {
                        gsap.to(".logo_img", {
                            opacity: 0,
                            delay: .5,
                            duration: 1,
                            ease: "art-details"
                        })
                    }
                    gsap.to(".slide_left", {
                        left: "-100%",
                        duration: 1,
                        delay: 1.75,
                        ease: "art-details",
                    });
                    gsap.to(".ver_line", {
                        opacity: 0,
                        delay: 1.5,
                    })
                    gsap.to(".slide_right", {
                        right: "-100%",
                        duration: 1,
                        delay: 1.75,
                        ease: "art-details",
                        onComplete: () => {
                            if (window.lenis) {
                                window.lenis.start()
                            }
                        }
                    });

                },
            });

            if (window.lenis) {
                window.lenis.stop()
            }
            gsap.to(".loader_line", {
                width: "100%",
                duration: 2.5,
                ease: "power2.out",
            });
        }, []);

    return (
        <>
            <a href="#hero">
                <img
                    className="logo_img fixed w-[50%] md:w-[25%] z-[99999] -translate-x-1/2 left-1/2 top-[40vh]"
                    src="/logo/SDAF black.png"
                    alt="logo"
                />
            </a>
            <div className="loader_wrapper pointer-events-none w-full h-screen fixed z-[9999] top-0 left-0  ">

                <div className="ver_line origin-top absolute h-0 z-[99] w-[2px] bg-[#020202] left-1/2 -translate-x-1/2"></div>
                <div className="slide_left w-1/2 h-screen absolute z-[-1] bg-[#ECE7D9] left-0"></div>
                <div className="slide_right w-1/2 h-screen absolute z-[-1] bg-[#ECE7D9] right-0"></div>

                <div className="loader_paren absolute bottom-32 gap-3 w-full flex-col center">
                    <div className="relative w-[30%] overflow-hidden rounded-full h-[2px] bg-black/20">
                        <div className="loader_line absolute top-0 left-0 w-0 h-full bg-[#020202]"></div>
                    </div>
                    <div className="w-full center">
                        <p>{progress < 10 ? `0${progress}` : progress} %</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IntroLoader;
