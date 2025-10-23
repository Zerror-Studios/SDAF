import React from "react";
import SeoHeader from "@/components/seo/SeoHeader";
import Hero from "@/components/Home/Hero";
import EnduringSection from "@/components/Home/EnduringSection";
import Exhibition from "@/components/Home/Exhibition";
import ManBehind from "@/components/Home/ManBehind";
import CuratorVision from "@/components/Home/CuratorVision";
import Visionaries from "@/components/Home/Visionaries";
import AboutFoundation from "@/components/Home/AboutFoundation";
import FocusSection from "@/components/Home/FocusSection";
import GallerySlider from "@/components/Home/GallerySlider";
import ContactForm from "@/components/Home/ContactForm";

const Home = ({ meta }) => {
  return (
    <>
      <SeoHeader meta={meta} />
      <Hero />
      <AboutFoundation />
      <EnduringSection />
      <Exhibition />
      {/* <ManBehind /> */}
      {/* <CuratorVision /> */}
      <Visionaries />
      <FocusSection />
      {/* <GallerySlider /> */}
      <ContactForm />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const meta = {
    title:
      "Timeless Frames: Indian Cinema Photo Exhibition | Mumbai · Sep 20–26",
    description:
      "Rare 1950s–1980s cinema stills from the Kamat Foto Studio Archive. Piramal NCPA Gallery, Mumbai. Opening Night Sep 20. Public viewing Sep 21–26. RSVP.",
    keywords:
      "art exhibiion Mumbai, photography exhibiion Mumbai, Indian cinema photography, Kamat Foto Studio, Damodar Kamat, Timeless Frames exhibiion, Enduring Legacies SDAF, NCPA Gallery Mumbai, cinema stills 1950s–1980s",
    og: {
      title:
        "Timeless Frames: Indian Cinema Photo Exhibition | Mumbai · Sep 20–26",
      description:
        "Rare 1950s–1980s cinema stills from the Kamat Foto Studio Archive. Piramal NCPA Gallery, Mumbai. Opening Night Sep 20. Public viewing Sep 21–26. RSVP.",
    },
    twitter: {
      title:
        "Timeless Frames: Indian Cinema Photo Exhibition | Mumbai · Sep 20–26",
      description:
        "Rare 1950s–1980s cinema stills from the Kamat Foto Studio Archive. Piramal NCPA Gallery, Mumbai. Opening Night Sep 20. Public viewing Sep 21–26. RSVP.",
    },
    robots: "index,follow",
  };
  return {
    props: {
      meta,
    },
  };
}
