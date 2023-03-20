import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Why XLM Shop?",
  desc: "XLM Shop brings all the benefits on web3 to Shopify",
  image: benefitOneImg,
  bullets: [
    {
      title: "Coupons against Crypto",
      desc: "Accept commission free payments by customers during checkout via XLM",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "DeFi investments",
      desc: "Borrow P2P finances against invoices and store performance via XLM from investors anywhere.",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "Post Purchase NFTs",
      desc: "Create and reward tangible NFTs to their customers after a purchase to increase loyalty and gamification via XL ecommerce.",
      icon: <EmojiHappyIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Developer integration support",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "JS SDK and React component",
      desc: "Integrate payments on your site with our SDKs",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Webhook and callbacks",
      desc: "Stay up to date about every payment and reminders with our on chain webhooks.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Analytics & management",
      desc: "Manage your app/pricing with our complete analytics offering.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
