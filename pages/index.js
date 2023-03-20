import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>XLM SHOP</title>
        <meta
          name="description"
          content=" All in one XLM app for Shopify merchants for payments and
          finances."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="XLM SHOP benefits"
        title="Future of finance for e-commerce"
      >
        XLM Shop is powered by Stellar, an open network for storing and moving
        money which allows merchants to accept USDC and other payment method on
        XLM
      </SectionTitle>
      <Benefits data={benefitOne} />
      <div id="video">
        {" "}
        <SectionTitle
          pretitle="XLM Shop App on Shopify"
          title="Checkout our V1 App Video"
        ></SectionTitle>
        <Video />
      </div>

      <div id="testimonials">
        <SectionTitle
          pretitle="Testimonials"
          title="Here's what our early users have to say"
        >
          We have a long way to go but our progress and enthusiasm is high with
          support and encouragement from the XLM community and our users.
        </SectionTitle>
        <Testimonials />
      </div>
      <div id="faq">
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          Answers to most frequently asked community questions.
        </SectionTitle>
        <Faq />
      </div>
      <Cta />
      <Footer />
    </>
  );
}
