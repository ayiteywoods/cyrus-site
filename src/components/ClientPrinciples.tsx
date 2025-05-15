"use client";

import { useState } from "react";
import { motion } from "motion/react";

type FAQItem = {
  header: string;
  discussion: string;
};

const ClientPrinciples = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  

  const faqs: FAQItem[] = [
    {
        header: "Client Feedback: ",
        discussion: "Regularly collect and incorporate client feedback to improve products and services.",
    },
    {
        header: "Client Segmentation: ",
        discussion: "Segment clients based on their needs, behaviors, and preferences to offer tailored services.",
    },
    {
        header: "Financial Literacy: ",
        discussion: "Educate clients on financial management, budgeting, and responsible borrowing practices.",
    },
    {
        header: "Transparency: ",
        discussion: "Clearly disclose product features, pricing, and terms to ensure clients make informed decisions.",
    },
    {
        header: "Accessibility: ",
        discussion: "Provide convenient access to financial services through various channels, such as mobile banking or agent networks.",
    },
    {
        header: "Affordability: ",
        discussion: "Offer affordable financial products and services that cater to clients financial capabilities.",
    },
    {
        header: "sponsible Lending:",
        discussion: "Implement responsible lending practices, such as assessing creditworthiness and preventing over-indebtedness.",
    },
   
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  return (
    <section className="max-w-7xl mx-auto pt-4">
      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full text-left font-semibold text-blue-800 focus:outline-none text-lg"
            >
              {faq.header}
              <span className="ml-2 text-2xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <motion.div
                className="mt-4 text-gray-700 text-base bg-white p-4 rounded-md"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {faq.discussion}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

  
    </section>
  );
};

export default ClientPrinciples;
