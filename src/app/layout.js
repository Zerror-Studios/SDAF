// src/app/layout.jsx
import "@/styles/globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Const } from "@/utils/Constants";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

export const metadata = {
  metadataBase: new URL(Const?.ClientLink || ""),

  title: {
    default: Const.Brand,
    template: "%s | " + Const.Brand,
  },

  description:
    "Shivdutt Das Art Foundation preserves and showcases rare Indian cinema photography, exhibitions, and visual heritage.",

  keywords: [
    "Indian cinema photography",
    "art exhibitions Mumbai",
    "Shivdutt Das Art Foundation",
    "Kamat Foto Studio",
    "cinema stills archive",
  ],

  authors: [{ name: Const.Brand }],
  publisher: Const.Brand,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "/", // auto-resolves via metadataBase
    languages: {
      "en-IN": "/",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: Const.Brand,
    title: Const.Brand,
    description:
      "Rare Indian cinema photographs, exhibitions, and visual archives.",
    url: Const.ClientLink,
    images: [
      {
        url: "/favicon/favicon.svg", // fallback OG image
        width: 1200,
        height: 630,
        alt: Const.Brand,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: Const.Brand,
    description:
      "Rare Indian cinema photographs, exhibitions, and visual archives.",
    images: ["/favicon/favicon.svg"],
  },

  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <OrganizationSchema />
        {children}
      </body>
    </html>
  );
}
