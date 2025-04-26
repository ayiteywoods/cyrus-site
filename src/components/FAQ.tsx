"use client"; // Required for interactivity (since we're using useState)

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
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
    {
        question: "What is your screening process?",
        answer: "The screening process ensures that the applicants are micro borrowers. CYRUS caters for low-income clients, both the underemployed and entrepreneurs with an often informal family business (e.g., petty traders, vegetable farmers, etc.). Borrowers are typically concentrated in a limited geographic area, social segment, or entrepreneurial undertakings. Loans are very small, short-term, and unsecured, with more frequent repayments. The applicants are made to understand that the loans are purely for business and not for personal purposes such as school fees or funeral expenses. They are also made to understand that if a borrower defaults, the other members in the group become liable, hence the importance of keeping a cohesive group."
    },
    {
        question: "How do I register?",
        answer: "The applicants are then registered after they pass the screening stage. The details taken include names, gender, business location, residential address, occupation type, phone number, and the name of a spouse or next of kin. Two passport pictures and an ID are required for the registration."
    },
    {
        question: "What is your risk assessment process?",
        answer: "Loan documentation is generated largely by the Loans and Operations managers through visits to the borrower's business and home. Directions to the residences are also drawn up for verification. The occupation/trade types of applicants are verified and reports sent to management for assessment. The borrower's character and willingness to repay is also assessed during field visits. Since credit bureau data are not available for low-income clients, a labor-intensive approach to credit analysis is used."
    },
    {
        question: "How does the credit approval process work?",
        answer: "CYRUS has a highly decentralized process; hence, credit approval by the field-level staff depends heavily on the skill and integrity of loan officers and managers for accurate and timely information."
    },
    {
        question: "What training and support do approved loan application recieve?",
        answer: "Applicants whose loans have been approved are then trained in Basic Financial Management. They are trained to distinguish between working capital and profit, in basic customer service, and to inculcate in them the habit of savings. Elementary bookkeeping is not mandatory since most of them cannot read and write. CYRUS does not request separate fees for processing transactions, particularly in relation to administrative costs involved in the visitation and monitoring of loans."
    },
    {
        question: "How do i repay my Loan?",
        answer: "Visit our nearest office or dial 789732# for assistance with the loan repayment process."
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle accordion
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-thin mb-6 text-center">(CYRUS) - Frequently Asked Questions</h2>
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

export default FAQ;