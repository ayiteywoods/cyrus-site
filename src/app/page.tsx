'use client'
import ClientCentric from '@/components/ClientCentric';
import HeroSlider from '@/components/HeroSlider';
import Impact from '@/components/Impact';
import Partners from '@/components/Partners';
import PayLoan from '@/components/PayLoan';
import Policies from '@/components/Policies';
import QuickLinks from '@/components/QuickLinks';
import Support from '@/components/Support';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { Handshake, ShieldCheck, BarChart2, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CountUp from 'react-countup';

export default function Home() {
  const stats = [
    { value: 120, suffix: '+', label: 'Partner Institutions', icon: <Handshake size={24} /> },
    { value: 705, suffix: 'k', label: 'Loans Disbursed', icon: <BarChart2 size={24} /> },
    { value: 98, suffix: '%', label: 'Client Satisfaction', icon: <Users size={24} /> },
    { value: 24, suffix: 'hrs', label: 'Average Processing', icon: <Clock size={24} /> }
  ];

  const services = [
    {
      title: "Business Loans",
      description: "Tailored financing solutions to grow your enterprise",
      icon: <BarChart2 size={32} className="text-blue-600" />
    },
    {
      title: "Personal Loans",
      description: "Flexible credit for your personal needs",
      icon: <Users size={32} className="text-blue-600" />
    },
    {
      title: "Agricultural Financing",
      description: "Specialized loans for farmers and agribusinesses",
      icon: <ShieldCheck size={32} className="text-blue-600" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Slider */}
      <HeroSlider />
      
      {/* Quick Links */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-10 pb-10'>
        <QuickLinks />
      </div>

      {/* Welcome Section */}
      <section className="bg-blue-50">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='bg-white shadow-lg p-8 rounded-lg hover:shadow-xl transition-shadow'
            >
              <h1 className='text-3xl font-thin text-blue-900 pt-4 pb-6'>Welcome to Cyrus MicroCredit Services (CMCS)!</h1>
              <p className='text-gray-700 leading-relaxed'>
                We are dedicated to empowering individuals and businesses by providing accessible and 
                affordable microcredit solutions. Our goal is to drive financial inclusion, foster growth, 
                and support sustainable development through innovative financial services and expert guidance.
              </p>
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More About Us
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='relative h-96 rounded-lg overflow-hidden shadow-lg'
            >
              <Image 
                src='/images/about.webp' 
                alt='about CMCS' 
                fill 
                className='object-cover'
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

  

      <div className='bg-blue-950 relative overflow-hidden'>
  {/* Full-width organic swell background */}
  <div className="absolute inset-0 overflow-hidden opacity-30">
    <svg
      className="w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 1440 600"
    >
      {[...Array(25)].map((_, i) => {
        const startX = Math.random() * 200;
        const endX = 1240 + (Math.random() * 200);
        const startY = Math.random() * 600;
        const endY = Math.random() * 600;
        const cp1x = 360 + (Math.random() * 720);
        const cp1y = Math.random() * 600;
        const cp2x = 720 + (Math.random() * 720);
        const cp2y = Math.random() * 600;

        return (
          <motion.path
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.7, 0.3],
              transition: { 
                duration: 3.5, 
                delay: i * 0.15,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut"
              },
            }}
            stroke="white"
            strokeWidth={0.8 + Math.random() * 0.8}
            strokeLinecap="round"
            fill="none"
            d={`M${startX},${startY} 
                C${cp1x},${cp1y} 
                ${cp2x},${cp2y} 
                ${endX},${endY}`}
          />
        );
      })}
      
      {[...Array(40)].map((_, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={Math.random() * 1440}
          cy={Math.random() * 600}
          r={1 + Math.random() * 2}
          fill="white"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            transition: {
              duration: 2,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      ))}
    </svg>
  </div>

  <motion.section 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto  py-16 px-4 sm:px-6 lg:px-8 relative z-10"
  >
    <Impact />
  </motion.section>
</div>


      {/* Core Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-thin text-blue-900 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Learn more <span className="ml-1">→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <div className="bg-blue-50 w-full"> {/* Full width blue background */}
           {/* Stats Section */}
     <section className="relative bg-blue-900 py-16 overflow-hidden">
  {/* Vector Swell Background */}
  <div className="absolute inset-0 overflow-hidden opacity-30">
  <svg
    className="w-full h-full"
    preserveAspectRatio="none"
    viewBox="0 0 1440 600"  // Wider viewBox for better full-width coverage
  >
    {[...Array(25)].map((_, i) => {
      // More dynamic starting and ending points
      const startX = Math.random() * 200; // Cluster starts more to the left
      const endX = 1240 + (Math.random() * 200); // Cluster ends more to the right
      const startY = Math.random() * 600;
      const endY = Math.random() * 600;
      
      // Create more pronounced curves
      const cp1x = 360 + (Math.random() * 720);
      const cp1y = Math.random() * 600;
      const cp2x = 720 + (Math.random() * 720);
      const cp2y = Math.random() * 600;

      return (
        <motion.path
          key={i}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: [0, 0.7, 0.3], // More visibility with fade
            transition: { 
              duration: 3.5, 
              delay: i * 0.15,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            },
          }}
          stroke="white"
          strokeWidth={0.8 + Math.random() * 0.8} // Variable width
          strokeLinecap="round"
          fill="none"
          d={`M${startX},${startY} 
              C${cp1x},${cp1y} 
              ${cp2x},${cp2y} 
              ${endX},${endY}`}
        />
      );
    })}
    
    {/* Add subtle dots at connection points */}
    {[...Array(40)].map((_, i) => (
      <motion.circle
        key={`dot-${i}`}
        cx={Math.random() * 1440}
        cy={Math.random() * 600}
        r={1 + Math.random() * 2}
        fill="white"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.8, 0],
          transition: {
            duration: 2,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
    ))}
  </svg>
</div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-lg text-center shadow-md"
        >
          <div className="text-blue-600 mb-4 flex justify-center">
            {stat.icon}
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            <CountUp end={stat.value} duration={2.5} />{stat.suffix}
          </h3>
          <p className="text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
      

      {/* Client-Centric Approach */}
      <div className="bg-sky-100 rounded-2xl shadow my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ClientCentric />
        </div>
      </div>
      </div>

      {/* Partners Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Partners />
      </section>

      {/* Support Section */}
      <section className="bg-blue-900 relative overflow-hidden">
  {/* Full-width organic swell background */}
  <div className="absolute inset-0 overflow-hidden opacity-20">
    <svg
      className="w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 1440 600"
    >
      {[...Array(25)].map((_, i) => {
        const startX = Math.random() * 200;
        const endX = 1240 + (Math.random() * 200);
        const startY = Math.random() * 600;
        const endY = Math.random() * 600;
        const cp1x = 360 + (Math.random() * 720);
        const cp1y = Math.random() * 600;
        const cp2x = 720 + (Math.random() * 720);
        const cp2y = Math.random() * 600;

        return (
          <motion.path
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.7, 0.3],
              transition: { 
                duration: 3.5, 
                delay: i * 0.15,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut"
              },
            }}
            stroke="white"
            strokeWidth={0.8 + Math.random() * 0.8}
            strokeLinecap="round"
            fill="none"
            d={`M${startX},${startY} 
                C${cp1x},${cp1y} 
                ${cp2x},${cp2y} 
                ${endX},${endY}`}
          />
        );
      })}
      
      {[...Array(40)].map((_, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={Math.random() * 1440}
          cy={Math.random() * 600}
          r={1 + Math.random() * 2}
          fill="white"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            transition: {
              duration: 2,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      ))}
    </svg>
  </div>

  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10"
  >
    <Support />
  </motion.div>
</section>

      {/* Pay Loan Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PayLoan />
      </section>

      {/* Policies Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Policies />
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-thin text-blue-900 mb-4">Success Stories</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Businesses thrive with Cyrus Micro-Credit Solutions that deliver real results. 
              Here&apos;s what our clients say:
            </p>
          </motion.div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 relative overflow-hidden">
  {/* Full-width organic swell background */}
  <div className="absolute inset-0 overflow-hidden opacity-20">
    <svg
      className="w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 1440 600"
    >
      {[...Array(25)].map((_, i) => {
        const startX = Math.random() * 200;
        const endX = 1240 + (Math.random() * 200);
        const startY = Math.random() * 600;
        const endY = Math.random() * 600;
        const cp1x = 360 + (Math.random() * 720);
        const cp1y = Math.random() * 600;
        const cp2x = 720 + (Math.random() * 720);
        const cp2y = Math.random() * 600;

        return (
          <motion.path
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.7, 0.3],
              transition: { 
                duration: 3.5, 
                delay: i * 0.15,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut"
              },
            }}
            stroke="white"
            strokeWidth={0.8 + Math.random() * 0.8}
            strokeLinecap="round"
            fill="none"
            d={`M${startX},${startY} 
                C${cp1x},${cp1y} 
                ${cp2x},${cp2y} 
                ${endX},${endY}`}
          />
        );
      })}
      
      {[...Array(40)].map((_, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={Math.random() * 1440}
          cy={Math.random() * 600}
          r={1 + Math.random() * 2}
          fill="white"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            transition: {
              duration: 2,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      ))}
    </svg>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-thin text-blue-900 mb-4">
        Ready to take the next step?
      </h2>
      <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
        Whether you need funding for your business or personal goals, we&apos;re here to help.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Apply Now
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-lg text-blue-700 bg-white border border-blue-300 hover:bg-gray-50 transition-colors"
        >
          Contact Us
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
}