import React from 'react'
import Footer from '@/components/common/Footer'
import EnduringSection from '@/components/timeless_frames/EnduringSection'
import Exhibition from '@/components/timeless_frames/Exhibition'
import FocusSection from '@/components/timeless_frames/FocusSection'
import MobileVisionaries from '@/components/timeless_frames/MobileVisionaries'
import TimelessHero from '@/components/timeless_frames/TimelessHero'
import TimelessMobileHero from '@/components/timeless_frames/TimelessMobileHero'
import Visionaries from '@/components/timeless_frames/Visionaries'
import WebPageSchema from '@/components/seo/WebPageSchema'
import { Const } from '@/utils/Constants'

export const metadata = {
    title:
        "Timeless Frames — Damodar Kamat Cinema Photography Exhibition | SDAF Archive",

    description:
        "Timeless Frames was SDAF’s inaugural exhibition showcasing rare 1950s–1980s Indian cinema stills from the Kamat Foto Studio archive, celebrating photographer Damodar Kamat.",

    keywords: [
        "Timeless Frames exhibition",
        "Damodar Kamat photography",
        "Indian cinema photography archive",
        "Kamat Foto Studio archive",
        "SDAF Enduring Legacies Edition 1",
        "Indian film photography history",
        "Mumbai photography exhibition 2025",
        "Indian cinema still photography",
        "SDAF exhibition archive",
    ],

    robots: "index, follow",

    openGraph: {
        title:
            "Timeless Frames — Indian Cinema Photography Archive | SDAF",
        description:
            "Rare cinema still photography from the 1950s–1980s celebrating Damodar Kamat.",
        url: "https://sdaf.in/timeless-frames",
        siteName: "SDAF",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Timeless Frames — Indian Cinema Photography Archive | SDAF",
        description:
            "Rare cinema still photography from the 1950s–1980s archive.",
    },
}

const TimelessFramesPage = () => {
    return (
        <>

            <WebPageSchema
                name="Timeless Frames — Damodar Kamat Photography Exhibition Archive | SDAF"
                description="Timeless Frames is SDAF’s inaugural exhibition archive showcasing rare 1950s–1980s Indian cinema still photography from the Kamat Foto Studio collection, celebrating photographer Damodar Kamat."
                url={`${Const.ClientLink}/timeless-frames`}
            />

            <div className="hidden lg:block w-full">
                <TimelessHero />
            </div>
            <div className="lg:hidden w-full">
                <TimelessMobileHero />
            </div>

            {/* <AboutFoundation /> */}
            <EnduringSection />
            <Exhibition />

            <div className="hidden lg:block w-full">
                <Visionaries />
            </div>
            <div className="lg:hidden w-full">
                <MobileVisionaries />
            </div>

            <FocusSection />

            {/* <Footer/> */}
        </>
    )
}

export default TimelessFramesPage