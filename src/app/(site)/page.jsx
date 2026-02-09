import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/utils/Constants";
import IntroLoader from "@/components/common/IntroLoader";
import Hero from "@/components/Home/Hero";
import AboutFoundation from "@/components/Home/AboutFoundation";
import ContactForm from "@/components/Home/ContactForm";
import CanvasCreationHomeSection from "@/components/Home/CanvasCreationHomeSection";
import TimelessFramesHomeSection from "@/components/Home/TimelessFramesHomeSection";

export const metadata = {
  title: "SDAF | Shivdutt Das Art Foundation — Art Belongs to Everyone",
  description:
    "The Shivdutt Das Art Foundation supports artists, preserves India's cultural heritage, and brings historic and contemporary art into public view through exhibitions and artist initiatives.",

  keywords: [
    "Shivdutt Das Art Foundation",
    "SDAF India",
    "Indian art foundation",
    "art foundation India",
    "contemporary Indian artists",
    "Indian art exhibitions",
    "artist support programs India",
    "cultural heritage preservation India",
    "Enduring Legacies SDAF",
    "Canvas and Creation art camp",
  ],

  robots: "index, follow",

  openGraph: {
    title: "SDAF | Supporting Artists & Preserving Indian Cultural Heritage",
    description:
      "SDAF supports living artists and preserves India's cultural legacy through exhibitions, artist programs, and public initiatives.",
    url: "https://sdaf.in",
    siteName: "SDAF",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SDAF | Supporting Artists & Preserving Indian Cultural Heritage",
    description:
      "Supporting artists. Preserving heritage. Making art accessible to everyone.",
  },
}

export default function HomePage() {
  return (
    <>
      <WebPageSchema
        name="Shivdutt Das Art Foundation (SDAF)"
        description="The Shivdutt Das Art Foundation supports artists, preserves India's cultural heritage, and promotes contemporary Indian art."
        url={`${Const.ClientLink}/`}
      />


      {/* <IntroLoader /> */}

      <Hero />

      <AboutFoundation />

      <CanvasCreationHomeSection />

      <TimelessFramesHomeSection />


    </>
  );
}
