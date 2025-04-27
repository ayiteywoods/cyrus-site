'use client'

import FAQ from '@/components/FAQ';
import Image from 'next/image';
import { motion } from 'motion/react';
import React from 'react';

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[600px] bg-blue-900 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/slider1.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/60" />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white bg-opacity-80 p-10 rounded-lg max-w-xl text-center shadow-lg"
          >
            <p className="text-blue-600 text-sm uppercase tracking-wider mb-2">
              Frequently Asked Questions
            </p>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Got Questions? We've Got You Covered.
            </h1>
            <p className="text-gray-700 mb-6">
              Business insights enable smart moves towards wealth & security.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <FAQ />
      </motion.div>
    </>
  );
};

export default Page;
