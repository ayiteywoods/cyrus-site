"use client";

import { useState } from "react";
import { motion } from "motion/react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const faqs: FAQItem[] = [
    {
      question: "What is Cyrus MicroCredit Services?",
      answer: "CYRUS MICROCREDIT is a microfinance institution (MFI) dedicated to providing social and financial solutions to the poor, helping them access credit and improve their livelihoods.",
    },
    {
      question: "What is the Loan Application process at CYRUS?",
      answer: "The loan process at CYRUS involves submitting an application, undergoing a review of credit risk and financial stability, and receiving a loan decision.",
    },
    {
      question: "What is your Credit underwriting process?",
      answer: "Our underwriting involves assessing every stage of the lending process to minimize delinquencies and ensure fair lending practices.",
    },
    {
      question: "What is your screening process?",
      answer: "We ensure applicants are true micro-borrowers, operating small businesses like petty trading, farming, etc. Group accountability is emphasized.",
    },
    {
      question: "How do I register?",
      answer: "Pass the screening stage, then provide personal and business details, two passport photos, and a valid ID.",
    },
    {
      question: "What is your risk assessment process?",
      answer: "We perform field visits to verify borrower’s business and residence, assess willingness to repay, and gather necessary documentation.",
    },
    {
      question: "How does the credit approval process work?",
      answer: "Credit approval is decentralized, relying heavily on field staff and loan officers for accurate and timely information.",
    },
    {
      question: "What training and support do approved applicants receive?",
      answer: "Approved applicants receive basic financial management training, customer service education, and saving habits reinforcement.",
    },
    {
      question: "How do I repay my loan?",
      answer: "Visit our nearest office or dial 789732# for support with loan repayments.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here you can connect to your backend (API call)
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify({name, email, message}) })

    // For now, just simulate a successful submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-thin text-center mb-10 text-blue-900">
        (CYRUS) - Frequently Asked Questions
      </h2>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full text-left font-semibold text-blue-800 focus:outline-none text-lg"
            >
              {faq.question}
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
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* "Ask a Question" Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-thin text-blue-800 mb-4">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6">
          If you didn&apos;t find what you were looking for, you can ask us directly!
        </p>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transform transition"
        >
          {showForm ? "Close Form" : "Ask a Question"}
        </button>

        {showForm && (
          <motion.div
            className="mt-10 max-w-2xl mx-auto p-8 rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-left text-blue-900 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border-gray-300 rounded-lg p-3 bg-white/70 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-left text-blue-900 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full border-gray-300 rounded-lg p-3 bg-white/70 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-left text-blue-900 mb-2">Question</label>
                  <textarea
                    required
                    className="w-full border-gray-300 rounded-lg p-3 bg-white/70 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Type your question here..."
                    rows={4}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-full hover:scale-105 transform transition"
                >
                  Submit Question
                </button>
              </form>
            ) : (
              <motion.div
                className="text-green-600 text-lg font-semibold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                🎉 Thank you! Your question has been submitted.
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
