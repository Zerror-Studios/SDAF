import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from "split-type";


const images = [
  "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/67474f136a37bc1164cd76f4_gallery_img_8-p-500.avif",
  "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/67474f13278e574b066891ea_gallery_img_1.avif",
  "https://cdn.prod.website-files.com/67862174a33a316e969b0659/678769a2ebfab8e3dfcc3ae6_main-img.avif",
  "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/67474f13c4e22ba69018d375_gallery_img_6.avif",
  "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/67474f1314bd8e627442e371_gallery_img_2.avif",
  "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/67474f13b230be8a984914a2_gallery_img_5-p-500.avif",
  "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/67474f13587c2d107392176e_gallery_img_7-p-500.avif",
  "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/67474f13f0f497cad723842a_gallery_img_4-p-500.avif",
  "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/67474f13bb7fe2493228208f_gallery_img_10-p-500.avif",
  "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/67474f13c4e22ba69018d375_gallery_img_6.avif",
  "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/67474f1314bd8e627442e371_gallery_img_2.avif",
  "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/67474f13b230be8a984914a2_gallery_img_5-p-500.avif",
]


const FocusSection = () => {

  useEffect(() => {
    // ✅ Grid configuration depending on screen size
    let gridConfig = [4, 3];
    if (window.innerWidth < 768) {
      gridConfig = [3, 4];
    }

    // ✅ GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".focus_parent",
        start: "8% top",
        pin: true,
        scrub: true,
        anticipatePin: 1,
        // markers: true,
      },
    });

    // ✅ Cube rotation animations
    tl.to(
      ".cube_txt_1",
      {
        rotateX: -90,
        transformOrigin: "50% 0%",
      },
      "step1"
    );
    tl.to(
      ".cube_txt_2",
      {
        rotateX: 0,
        transformOrigin: "50% 100%",
        delay: 0.15,
      },
      "step1"
    );

    tl.to(
      ".cube_txt_2",
      {
        rotateX: -90,
        transformOrigin: "50% 0%",
      },
      "step2"
    );
    tl.to(
      ".cube_txt_3",
      {
        rotateX: 0,
        transformOrigin: "50% 100%",
        delay: 0.15,
      },
      "step2"
    );

    // ✅ Transformation helper function
    function calculateTransform(
      element,
      distance = 250,
      rotationStrength = 300,
      zDepth = 2000
    ) {
      const viewportCenter = {
        width: window.innerWidth / 2,
        height: window.innerHeight / 2,
      };

      const elementCenterX = element.offsetLeft + element.offsetWidth / 2;
      const elementCenterY = element.offsetTop + element.offsetHeight / 2;

      const angle = Math.atan2(
        Math.abs(viewportCenter.height - elementCenterY),
        Math.abs(viewportCenter.width - elementCenterX)
      );

      const offsetX = Math.abs(Math.cos(angle) * distance);
      const offsetY = Math.abs(Math.sin(angle) * distance);

      const maxDistance = Math.sqrt(
        Math.pow(viewportCenter.width, 2) + Math.pow(viewportCenter.height, 2)
      );
      const elementDistance = Math.sqrt(
        Math.pow(viewportCenter.width - elementCenterX, 2) +
        Math.pow(viewportCenter.height - elementCenterY, 2)
      );
      const progress = elementDistance / maxDistance;

      return {
        x: elementCenterX < viewportCenter.width ? -offsetX : offsetX,
        y: elementCenterY < viewportCenter.height ? -offsetY : offsetY,
        z: zDepth * progress,
        rotateX:
          (offsetY / distance) *
          (elementCenterY < viewportCenter.height ? -1 : 1) *
          rotationStrength *
          progress,
        rotateY:
          (offsetX / distance) *
          (elementCenterX < viewportCenter.width ? 1 : -1) *
          rotationStrength *
          progress,
      };
    }

    // ✅ Transform animations
    tl.fromTo(
      ".trans_div",
      {
        x: (i, el) => calculateTransform(el, 0).x,
        y: (i, el) => calculateTransform(el, 0).y,
        z: (i, el) => calculateTransform(el, i, i, -3000).z,
        rotateX: (i, el) =>
          calculateTransform(el, 250, -160, -3000).rotateX,
        rotateY: (i, el) =>
          calculateTransform(el, 250, -160, -3000).rotateY,
        autoAlpha: 0,
        scale: 0.4,
      },
      {
        x: 0,
        y: 0,
        z: 0,
        rotateX: 0,
        rotateY: 0,
        autoAlpha: 1,
        scale: 1,
        stagger: {
          amount: 0.15,
          from: "center",
          grid: gridConfig,
        },
      }
    );
  }, []);


  return (
    <div id='focus'>
      <div className="focus_parent w-full h-[120vh] overflow-hidden  text-center center flex-col ">
        <p className=' text-sm lg:text-xl translate-y-[-5vw] text-[#EB8529] '>OUR FOCUS</p>
        <div className="w-full  translate-y-[-2vw] relative ">
          <div className=" w-full flex h-fit items-center justify-center">
            <div className="block h-[13vw]  relative leading-[11vw] ">
              <h2 className=' cube_txt_1 text-[13vw]   perspective-[1000px] transform-3d'>Preserve</h2>
              <h2 className=' cube_txt_2 left-1/2 -translate-x-1/2 rotate-x-[-90deg] perspective-[1000px] transform-3d absolute top-0  text-[13vw]'>Contextualize</h2>
              <h2 className=' cube_txt_3 left-1/2 -translate-x-1/2 rotate-x-[-90deg] perspective-[1000px] transform-3d  absolute top-0 text-[13vw]'>Share</h2>
            </div>
          </div>
          <div className=" w-full items-center justify-center">

            <div className=" block h-[25px]  relative leading-xl">
              <p className=' cube_txt_1  text-sm w-full  lg:text-2xl   perspective-[1000px] transform-3d'>We work with families and archives to protect vital cultural material.</p>
              <p className=' cube_txt_2 left-1/2 w-full -translate-x-1/2 rotate-x-[-90deg] perspective-[1000px] transform-3d absolute top-0   text-sm lg:text-2xl'>We provide museum-grade care and contemporary storytelling to illuminate the work.</p>
              <p className=' cube_txt_3 left-1/2 w-full  -translate-x-1/2 rotate-x-[-90deg] perspective-[1000px] transform-3d absolute top-0   text-sm lg:text-2xl'>We bring these important stories into the public eye for discovery and dialogue.</p>
            </div>
          </div>
        </div>
        <div className="w-full px-[4vw]  grid  gap-2 lg:gap-4 perspective-[1312px] grid-cols-3 md:grid-cols-4 absolute z-[-1]">
          {images.map((img, index) => (
            <div key={index} className="trans_div  overflow-hidden aspect-square transform-3d w-full ">
              <img className='w-full h-full object-cover' src={img} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FocusSection