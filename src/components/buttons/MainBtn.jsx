import React from 'react'

const MainBtn = ({ txt }) => {
    return (
        <div>
            <button className="relative  overflow-hidden group 
                     text-white border border-white uppercase text-sm px-5 py-2 rounded-full
                     whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] 
                     hover:border-[#c9b46d] hover:text-black">

                <p>{txt}</p>
                
                <div className="w-full h-full z-[-1] bg-[#c9b46d] 
                    absolute top-[100%] left-0 
                    transition-all duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] 
                    group-hover:top-0">
                </div>
            </button>
        </div>
    )
}

export default MainBtn