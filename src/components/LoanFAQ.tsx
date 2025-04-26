"use client"; // Required for interactivity (since we're using useState)

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const LoanFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is Cyrus MicroCredit Services?",
      answer: "CYRUS MICROCREDIT is a microfinance institution (MFI) dedicated to providing social and financial solutions to the poor, helping them access credit and improve their livelihoods.",
    },
    {
      question: "What is the Loan Application process at CYRUS?",
      answer: "The loan process at CYRUS involves submitting an application, undergoing a review of credit risk and financial stability, and receiving a loan decision. Detailed procedures are in place to ensure transparency and fairness.",
    },
    {
      question: "What is your Credit underwriting process?",
      answer: "As an MFI, CYRUS was formed with the purpose of providing social and financial solutions to the poor. To determine its vulnerability to credit risk, there is a review of the policies and procedures at every stage in the lending process to determine whether they reduce delinquencies and loan losses to an acceptable level. These policies and procedures include the loan eligibility criteria, the application review process and authorization levels, collateral or security requirements, as well as the 'carrots and sticks' used to motivate staff and compel borrowers to repay.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle accordion
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
    
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 bg-blue-50 p-4 rounded-lg">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full text-left font-medium focus:outline-none"
            >
              <span className="text-lg">{faq.question}</span>
              <span className="ml-2 transform transition-transform duration-200">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600 bg-white p-4 rounded-md">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanFAQ;