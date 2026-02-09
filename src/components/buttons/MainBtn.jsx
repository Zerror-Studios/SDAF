import { RiArrowRightUpLine } from '@remixicon/react'
import React from 'react'

const MainBtn = ({ txt }) => {
    return (
        <>
            <button className=" w-fit relative flex items-center max-md:gap-0 gap-x-2 text-[#020202] bg-[#EB8529] h-8 lg:h-10 px-4 hover:pr-1  overflow-hidden group   uppercase text-sm  rounded-full whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.625,0.05,0,1)]  hover:border-[#EB8529] hover:text-black">
                <div className="relative w-fit">
                    <div className="absolute h-[1px] left-0 bottom-0 bg-black w-0 rounded-full group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] "></div>
                    <p className='translate-y-[2px]'>{txt}</p>
                </div>
                <div className="  size-0 bg-black text-white group-hover:size-8 rounded-full center transition-all duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] ">
                    <RiArrowRightUpLine size={20} />
                </div>
            </button>
        </>
    )
}

export default MainBtn