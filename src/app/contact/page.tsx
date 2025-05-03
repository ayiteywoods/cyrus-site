'use client'

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData.entries());

    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
      } else {
        setErrorMessage(data.message || 'An error occurred while sending your message.');
      }
    } catch {
      setErrorMessage('An error occurred while sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 max-w-full relative h-[400px]">
        <Image
          src="/slider3.jpg"
          alt="bg"
          fill
          className="object-cover"
          priority
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 h-full flex items-center">
          <div className="rounded-lg bg-white p-8 opacity-90 max-w-2xl">
            <p className="pt-2 text-blue-400">Contact Us</p>
            <p className="pt-2 pb-4">We&apos;ll gladly answer any of your questions.</p>
            <h1 className="pt-4 pb-4 text-3xl">Get in touch with us! We are here to Help!</h1>
            <button className="px-6 py-3 rounded-lg text-white bg-blue-400 hover:bg-blue-500 transition-colors">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone Support */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone className="text-blue-400 h-5 w-5" />
                </div>
                <h3 className="text-xl font-thin">Phone Support</h3>
              </div>
              <p className="text-gray-600 mb-4">Speak directly with our customer service team</p>
              <div className="space-y-2">
                <div>
                  <p className="text-gray-500 text-sm">General Inquiries</p>
                  <a href="tel:+233302611611" className="text-blue-400 font-medium hover:underline">
                    +233 553 179 240
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">24/7 Customer Service</p>
                  <a href="tel:+233244335577" className="text-blue-400 font-medium hover:underline">
                    +233 553 179 240
                  </a>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-gray-500 text-sm flex items-center">
                  <Clock className="mr-2 h-4 w-4" /> Monday - Friday: 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            {/* Email Us */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="text-blue-400 h-5 w-5" />
                </div>
                <h3 className="text-xl font-thin">Email Us</h3>
              </div>
              <p className="text-gray-600 mb-4">Send us an email and we&apos;ll get back to you shortly</p>
              <a
                href="mailto:info@cyrusmcs.com"
                className="text-blue-400 font-medium hover:underline inline-block"
              >
                info@cyrusmcs.com
              </a>
            </div>

            {/* Branch Locations */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="text-blue-400 h-5 w-5" />
                </div>
                <h3 className="text-xl font-thin">Branch Locations</h3>
              </div>
              <p className="text-gray-600 mb-4">Find our nearest branch</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Head Office</h4>
                  <p className="text-gray-600">Ground Floor, Leonardo Hotel Opposite Tema</p>
                  <p className="text-gray-600">Newtown Post Office, P.O.Box rvt 636, Tema</p>
                  <p className="text-orange-500 text-sm mt-1">Monday - Friday: 8:30 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-thin mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400"
                  >
                    <option value="">Select a subject</option>
                    <option value="account">Account Inquiry</option>
                    <option value="loan">Loan Services</option>
                    <option value="card">Card Services</option>
                    <option value="digital">Digital Banking</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400"
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="h-4 w-4 text-blue-400 focus:ring-blue-300 border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                    I agree to the terms and conditions and privacy policy
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-400 text-white py-3 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              {successMessage && (
                <div className="mt-4 text-green-500">
                  <p>{successMessage}</p>
                </div>
              )}
              {errorMessage && (
                <div className="mt-4 text-red-500">
                  <p>{errorMessage}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
