import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Const } from "@/utils/Constants";
import WebPageSchema from "@/components/seo/WebPageSchema";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

const SeoHeader = ({ meta = {}, type = "website" }) => {
  const router = useRouter();
  const canonical = `${Const.ClientLink}/${router.asPath?.slice(1)}`;
  const Logo = `${Const.ClientLink}/favicon/favicon.svg`;
  return (
    <Head>
      <title>{meta?.title || ""}</title>
      <meta name="description" content={meta?.description || ""} />
      <meta name="keywords" content={meta?.keywords || ""} />
      {meta?.author && <meta name="author" content={meta?.author || ""} />}
      <meta name="publisher" content={Const.Brand} />
      <meta
        name="robots"
        content={
          `${meta?.robots}, max-image-preview:large` ||
          "noindex,nofollow, max-image-preview:large"
        }
      />
      <link rel="canonical" href={meta?.canonical || canonical} />
      {/* OG Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={meta?.og?.title || ""} />
      <meta property="og:description" content={meta?.og?.description || ""} />
      <meta property="og:url" content={meta?.canonical || canonical} />
      <meta property="og:site_name" content={Const.Brand} />
      <meta property="og:image" content={meta?.og?.image || Logo} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Twitter Tag */}
      <meta
        name="twitter:card"
        content={meta?.twitter?.card || "summary_large_image"}
      />
      <meta
        name="twitter:title"
        content={meta?.twitter?.title || meta?.title}
      />
      <meta
        name="twitter:description"
        content={meta?.twitter?.description || meta?.description}
      />
      {/* <meta name="twitter:site" content={"@_manifestind"} /> */}
      <meta name="twitter:image" content={meta?.twitter?.image || Logo} />
      {/* <meta name="twitter:creator" content={"@_manifestind"} /> */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="SDAF" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="alternate"
        hrefLang="en-in"
        href={meta?.canonical || canonical}
      />
      <WebPageSchema
        name={meta?.title || ""}
        description={meta?.description || ""}
        url={meta?.canonical || canonical}
      />
      <OrganizationSchema />
    </Head>
  );
};

export default SeoHeader;
