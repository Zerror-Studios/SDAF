import Layout from "@/components/Layout";
import LenisScroll from "@/components/LenisScroll";
import "@/styles/globals.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }) {
  return (
    <LenisScroll>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </LenisScroll>
  );
}
