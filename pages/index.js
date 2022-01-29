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
        <title>Algosub - Subscriptions and payments provider on Algorand</title>
        <meta
          name="description"
          content="Algosub makes it simple to accept subscription and payments for your services and products."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Algosub benefits"
        title="Future of finance to accept subscriptions & payments globally">
        Algosub is powered by Algorand, A Pure Proof-of-Stake foundational blockchain designed for the future of finance and payments.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <div id="developers"><Benefits imgPos="right" data={benefitTwo} /></div>
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>
      <Video /> */}
      <div id="testimonials">
        <SectionTitle
          pretitle="Testimonials"
          title="Here's what our early users have to say">
          We have a long way to go but our progress and enthusiasm is high with support and encouragement from the Algo community and our users.
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
