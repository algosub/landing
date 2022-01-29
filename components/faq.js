import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Do you use smart contracts and is it vetted?",
    answer: "Yes, we do use smart contracts. Especially if it involves cross-chain stable coin to USDCa transfer as an intermediate account. We will outsource the contracts soon.",
  },
  {
    question: "Can I use Algosub to accept other network coins?",
    answer: "Sorry, but we currently do not support this. Algorand, is a blockchain thats built for future of finance with no gas or tx fees.",
  },
  {
    question: "How does subscriptions work with Algosub?",
    answer: "Algosub implements on-chain CRON like scheduler with off chain reminders and notifications.",
  },
  {
    question: "When do you launch?",
    answer: "We are on a hiring spree recently and have some way to go before we have a V1 ready.",
  },
];
