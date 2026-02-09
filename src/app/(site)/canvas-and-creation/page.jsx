import React from 'react'
import CanvasCreationHero from '@/components/canvas_creation/CanvasCreationHero'
import ArtistNamesSection from '@/components/canvas_creation/ArtistNamesSection'
import VenueSection from '@/components/canvas_creation/VenueSection'
import WebPageSchema from '@/components/seo/WebPageSchema'
import { Const } from '@/utils/Constants'


export const metadata = {
  title:
    "Canvas & Creation — SDAF Art Camp | Enduring Legacies Edition 2 | Feb 9–11 2026",

  description:
    "Canvas & Creation is an SDAF art camp bringing together 16 artists at Della Resorts, Lonavala for three days of uninterrupted creation. No briefs. No constraints. Just art.",

  keywords: [
    "Canvas and Creation art camp",
    "SDAF Enduring Legacies Edition 2",
    "Indian artist residency 2026",
    "art camp India",
    "Della Resorts Lonavala art event",
    "Indian contemporary artists program",
    "SDAF artist initiative",
    "Indian art foundation events",
    "artist residency India 2026",
    "SDAF Canvas and Creation",
  ],

  robots: "index, follow",

  openGraph: {
    title:
      "Canvas & Creation — SDAF Art Camp | Feb 9–11 2026 | Lonavala",
    description:
      "16 artists. 3 days. One purpose: to create. Hosted by Shivdutt Das Art Foundation at Della Resorts, Lonavala.",
    url: "https://sdaf.in/canvas-and-creation",
    siteName: "SDAF",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Canvas & Creation — SDAF Art Camp | Feb 9–11 2026",
    description:
      "An SDAF initiative bringing artists together for uninterrupted creation.",
  },
}

const CanvasAndCreationPage = () => {
  return (
    <>
      <WebPageSchema
        name="Canvas & Creation — SDAF Art Camp | Enduring Legacies Edition 2"
        description="Canvas & Creation is an SDAF artist initiative bringing together 16 artists at Della Resorts, Lonavala for three days of uninterrupted creation, collaboration, and contemporary art development."
        url={`${Const.ClientLink}/canvas-and-creation`}
      />
      <CanvasCreationHero />
      <ArtistNamesSection />
      <VenueSection />
    </>
  )
}

export default CanvasAndCreationPage