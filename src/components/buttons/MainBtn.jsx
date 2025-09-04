import React from 'react'

const MainBtn = ({ txt }) => {
    return (
        <div>
            <button className="relative text-[#020202]  overflow-hidden group 
                      border border-black uppercase text-sm px-3 lg:px-5 py-1 lg:py-2 rounded-full
                     whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] 
                     hover:border-[#EB8529] hover:text-black">

                <p className='translate-y-[2px]'>{txt}</p>

                <div className="w-full h-full z-[-1]  bg-[#EB8529] 
                    absolute top-[100%] left-0 
                    transition-all duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] 
                    group-hover:top-0">
                </div>
            </button>
        </div>
    )
}

export default MainBtn