import AboutFoundation from '@/components/Home/AboutFoundation'
import CuratorVision from '@/components/Home/CuratorVision'
import EnduringSection from '@/components/Home/EnduringSection'
import Exhibition from '@/components/Home/Exhibition'
import FocusSection from '@/components/Home/FocusSection'
import GallerySlider from '@/components/Home/GallerySlider'
import Hero from '@/components/Home/Hero'
import ManBehind from '@/components/Home/ManBehind'
import React from 'react'

const index = () => {
  return (
    <div>
        <Hero />
        <EnduringSection/>
        <Exhibition/>
        <ManBehind/>
        <AboutFoundation/>
        <FocusSection/>
        <GallerySlider/>
    </div>
  )
}

export default index