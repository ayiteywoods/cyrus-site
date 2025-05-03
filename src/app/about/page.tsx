'use client'

import Partners from '@/components/Partners'
import { DatabaseBackup, Goal, Users, ShieldCheck, Handshake, BarChart2, Globe, Award } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import Testimonials from '@/components/Testimonials'
import TeamSection from '@/components/TeamSection'
import Link from 'next/link'

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='bg-blue-900 relative max-w-full h-[400px] md:h-[500px]'>
        <Image 
          src="/slider7.jpg" 
          alt="bg" 
          fill 
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/30'></div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 h-full flex items-center'>
          <div className='flex justify-between items-center w-full'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='rounded-lg bg-white p-8 opacity-90 max-w-2xl'
            >
              <p className='pt-2 text-blue-600 font-medium'>About CMCS</p>
              <p className='pt-2 pb-4 text-gray-700'>Navigating your business growth with experience & insightful solutions.</p>
              <h1 className='pt-4 pb-4 text-3xl md:text-4xl font-bold text-gray-900'>
                We&apos;re an award-winning microcredit services provider
              </h1>
              <Link href="/contact" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-6 py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors'
              >
                GET IN TOUCH
              </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className='bg-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='bg-white shadow-lg p-6 rounded-lg'
            >
              <h1 className='text-3xl font-thin p-4 text-blue-900'>Welcome to Cyrus MicroCredit Services (CMCS)!</h1>
              <p className='p-4 text-gray-700 leading-relaxed'>
                We are dedicated to empowering individuals and businesses by providing accessible and 
                affordable microcredit solutions. Our goal is to drive financial inclusion, foster growth, 
                and support sustainable development through innovative financial services and expert guidance.
              </p>
              <div className='p-4'>
                <h2 className='text-xl font-semibold text-blue-800 mb-3'>Our Core Values</h2>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex items-start space-x-2'>
                    <ShieldCheck className='text-blue-500 mt-1' size={20} />
                    <span className='text-gray-700'>Integrity</span>
                  </div>
                  <div className='flex items-start space-x-2'>
                    <Users className='text-blue-500 mt-1' size={20} />
                    <span className='text-gray-700'>Customer Focus</span>
                  </div>
                  <div className='flex items-start space-x-2'>
                    <BarChart2 className='text-blue-500 mt-1' size={20} />
                    <span className='text-gray-700'>Innovation</span>
                  </div>
                  <div className='flex items-start space-x-2'>
                    <Handshake className='text-blue-500 mt-1' size={20} />
                    <span className='text-gray-700'>Partnership</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className='space-y-8'>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='bg-white shadow-lg rounded-lg flex overflow-hidden hover:shadow-xl transition-shadow'
              >
                <div className='bg-blue-500 p-8 content-center min-w-[100px] flex items-center justify-center'>
                  <DatabaseBackup size={50} className='text-white' />
                </div>
                <div className='p-6'>
                  <h1 className='text-xl font-bold text-blue-900 mb-2'>Our Mission</h1>
                  <p className='text-gray-700'>
                    We aim to transform lives by delivering financial expertise, accelerating progress, and ensuring 
                    a secure future through trustworthy partnerships and innovative solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className='bg-white shadow-lg rounded-lg flex overflow-hidden hover:shadow-xl transition-shadow'
              >
                <div className='bg-blue-500 p-8 content-center min-w-[100px] flex items-center justify-center'>
                  <Goal size={50} className='text-white' />
                </div>
                <div className='p-6'>
                  <h1 className='text-xl font-bold text-blue-900 mb-2'>Our Vision</h1>
                  <p className='text-gray-700'>
                    We envision a financially stable future for all, 
                    offering creative strategies and professional advice to enhance wealth management.
                  </p>
                </div>
              </motion.div>
              
              {/* Added History Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className='bg-white shadow-lg rounded-lg flex overflow-hidden hover:shadow-xl transition-shadow'
              >
                <div className='bg-blue-500 p-8 content-center min-w-[100px] flex items-center justify-center'>
                  <Award size={50} className='text-white' />
                </div>
                <div className='p-6'>
                  <h1 className='text-xl font-bold text-blue-900 mb-2'>Our History</h1>
                  <p className='text-gray-700'>
                    Founded in 2015, CMCS has grown from a small local lender to a nationally recognized microcredit provider, 
                    serving thousands of clients across multiple regions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='bg-blue-900 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-4 divide-x divide-blue-700'
          >
            {[
              { value: 120, suffix: '+', label: 'Partner with Us', icon: <Handshake className='mx-auto mb-2' size={24} /> },
              { value: 705, suffix: 'k', label: 'Successful Services', icon: <DatabaseBackup className='mx-auto mb-2' size={24} /> },
              { value: 1, suffix: '.2%', label: 'Lowest Interest Rate', icon: <BarChart2 className='mx-auto mb-2' size={24} /> },
              { value: 1, prefix: '₵', suffix: '.3b+', label: 'Cumulative Trading', icon: <Globe className='mx-auto mb-2' size={24} /> }
            ].map((stat, index) => (
              <div key={index} className='p-8 text-center group'>
                <div className='text-white mb-2'>{stat.icon}</div>
                <h1 className='text-white text-3xl md:text-4xl font-bold mb-2'>
                  {stat.prefix}<CountUp end={stat.value} duration={3}/>{stat.suffix}
                </h1>
                <p className='text-blue-200 font-medium group-hover:text-white transition-colors'>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className='bg-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h1 className='text-3xl md:text-4xl font-thin text-blue-900 mb-4'>Provide Quality Services</h1>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              CMCS has the full range of financial solutions to support your business growth and personal financial needs.
            </p>
          </motion.div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                title: "Business Support",
                description: "Comprehensive analysis and insights to guide your business decisions.",
                image: "/credit.webp",
                icon: <BarChart2 size={32} />
              },
              {
                title: "Modern Technology Solutions",
                description: "Cutting-edge financial technology to streamline your operations.",
                image: "/morden.webp",
                icon: <DatabaseBackup size={32} />
              },
              {
                title: "Quality Support",
                description: "Dedicated assistance to ensure your success and satisfaction.",
                image: "/quality.webp",
                icon: <Users size={32} />
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all'
              >
                <div className='relative h-48'>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-blue-900/30 flex items-center justify-center'>
                    <div className='bg-blue-500 p-4 rounded-full text-white'>
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-blue-900 mb-2'>{service.title}</h3>
                  <p className='text-gray-700'>{service.description}</p>
                
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <TeamSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Partners Section */}
      <div className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-4'
          >
           
          </motion.div>
          <Partners />
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-blue-900 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto'
          >
            <h2 className='text-2xl md:text-3xl font-thin text-blue-900 mb-4'>
              Ready to grow your business with CMCS?
            </h2>
            <p className='text-gray-700 mb-8 max-w-2xl mx-auto'>
              Join thousands of satisfied clients who have transformed their financial future with our services.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Link href="/loans" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors'
              >
                GET STARTED
              </motion.button>
              </Link>
              <Link href="/contact" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-3 rounded-lg text-blue-700 bg-white border border-blue-300 hover:bg-gray-50 transition-colors'
              >
                CONTACT US
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default page