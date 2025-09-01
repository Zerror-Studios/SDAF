import React from 'react'

const Custom404 = () => {
    return (
        <div>
            <div className="w-full h-screen center flex-col gap-2">
                <p className='text-6xl'>Page Not Found</p>
                <p className='text-xl'>Sorry, the page you are looking for does not exist.</p>
                <a href="/">
                    <p className='underline'>Go Back</p>
                </a>
            </div>
        </div>
    )
}

export default Custom404