import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
  CurrencyDollarIcon
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Why Algo subscriptions?",
  desc: "Raise a single or subscription inovice to any payables globally with a single click.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Recurring Payments With Crypto",
      desc: "Our smart contract generated invoices come with invoice reminders and customer notifications.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Gasless transactions",
      desc: "You and your customers pay no gas fees to send/receive money.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Algos and USDC support",
      desc: "Create invoices to get paid in Algos or cross-chain USDC stable coin",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "One click setup",
      desc: "Receive your custom hosted payments page, one-click checkout button, dashboard & more.",
      icon: <CursorClickIcon />,
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
