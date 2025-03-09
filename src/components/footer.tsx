'use client';

import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const faqs = [
  { question: "What makes your coffee beans special?", answer: "Our beans are sourced from top-quality farms worldwide." },
  { question: "How should I store my coffee beans to keep them fresh?", answer: "Store beans in an airtight container away from heat, light, and moisture." },
  { question: "How can I choose the right coffee?", answer: "Check our Top Rated section for customer favorites!" },
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <footer className="bg-brown-800 text-brown-200 py-8 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold">The Barista Hub</h2>
          <p className="mt-2 text-brown-400">Your go-to place for premium coffee & brewing essentials.</p>
        </div>

        {/* Interactive FAQ Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Frequently Asked Questions</h3>
          <ul className="space-y-2">
            {faqs.map((faq, index) => (
              <li key={index} className="border-b border-gray-700 pb-2">
                <button
                  className="w-full text-left font-medium hover:text-white flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.question}
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                {openIndex === index && <p className="text-sm text-gray-400 mt-1">{faq.answer}</p>}
              </li>
            ))}
          </ul>
        </div>

        {/* GitHub / Repo Links */}
        <div>
          <h3 className="text-lg font-semibold flex items-center space-x-2">
            <FaGithub size={24} />
            <span>GitHub</span>
          </h3>
          <div className="mt-2">
            <Link href="https://github.com/reyowner" className="flex items-center space-x-2 hover:text-white">
              <span>My Account</span>
            </Link>
            <Link href="https://github.com/reyowner/TBH_mini-product-catalog/tree/develop" className="flex items-center space-x-2 hover:text-white">
              <span>TBH Repository</span>
            </Link>
          </div>
        </div>
      </div>

      <p className="text-center text-brown-400 mt-6">
        © {new Date().getFullYear()} The Barista Hub. All rights reserved.
      </p>
    </footer>
  );
}
