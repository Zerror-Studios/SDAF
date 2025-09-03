import React from "react";

const Custom404 = ({ meta }) => {
  return (
    <>
      <SeoHeader meta={meta} />
      <div>
        <div className="w-full h-screen center flex-col gap-2">
          <p className="text-6xl">Page Not Found</p>
          <p className="text-xl">
            Sorry, the page you are looking for does not exist.
          </p>
          <a href="/">
            <p className="underline">Go Back</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Custom404;

export async function getStaticProps() {
  const meta = {
    title: "404 Page Not Found | SHIVDUTT DAS ART FOUNDATION (SDAF)",
    description:
      "The page you are looking for cannot be found. Return to SHIVDUTT DAS ART FOUNDATION (SDAF) to explore exhibitions and artworks.",
    keywords: "",
    og: {
      title: "404 Page Not Found | SHIVDUTT DAS ART FOUNDATION (SDAF)",
      description:
        "The page you are looking for cannot be found. Return to SHIVDUTT DAS ART FOUNDATION (SDAF) to explore exhibitions and artworks.",
    },
    twitter: {
      title: "404 Page Not Found | SHIVDUTT DAS ART FOUNDATION (SDAF)",
      description:
        "The page you are looking for cannot be found. Return to SHIVDUTT DAS ART FOUNDATION (SDAF) to explore exhibitions and artworks.",
    },
    robots: "noindex,nofollow",
  };
  return {
    props: {
      meta,
    },
  };
}
