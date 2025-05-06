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
import { motion } from 'motion/react';
//import Image from 'next/image';
import CountUp from 'react-countup';
import Link from 'next/link';

const generateFixedPaths = () => {
  const paths = [];
  for (let i = 0; i < 25; i++) {
    const baseX = 200 + (i * 40);
    const baseY = 100 + (i * 20);
    paths.push({
      startX: baseX,
      startY: baseY,
      endX: 1240 + (i * 20),
      endY: 500 - (i * 15),
      cp1x: 360 + (i * 30),
      cp1y: 200 + (i * 10),
      cp2x: 720 + (i * 25),
      cp2y: 400 - (i * 8),
      strokeWidth: 0.8 + (i * 0.02)
    });
  }
  return paths;
};

const generateFixedDots = () => {
  const dots = [];
  for (let i = 0; i < 40; i++) {
    const baseX = 100 + (i * 35);
    const baseY = 50 + (i * 15);
    dots.push({
      cx: baseX,
      cy: baseY,
      r: 1 + (i * 0.05),
      delay: i * 0.1
    });
  }
  return dots;
};

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

  const fixedPaths = generateFixedPaths();
  const fixedDots = generateFixedDots();

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
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white shadow-lg p-8 rounded-lg hover:shadow-xl transition-shadow"
      >
        <h1 className="text-3xl font-thin text-blue-900 pt-4 pb-6">
          Welcome to Cyrus MicroCredit Services (CMCS)!
        </h1>
        <p className="text-gray-700 leading-relaxed text-justify">
          Isaiah 44:28 — Isaiah who prophesied from about 740–761 B.C called CYRUS by name almost 150 years before he ruled (559–530 B.C)!
          Later historians said that Cyrus read this prophecy and was so moved that he carried it out. Isaiah also predicted that Jerusalem
          would fall more than 100 years before it happened (586 B.C) and that the temple would be rebuilt about 200 years before it happened.
          It is clear that these prophecies came from God, who knows the future.
        </p>
        <div className="mt-8">
          <Link href="/about" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More About Us
            </motion.button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative h-full rounded-lg overflow-hidden shadow-lg"
      >
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/izMdkZL2dsE?autoplay=1&mute=1&loop=1&playlist=izMdkZL2dsE&controls=0&rel=0&modestbranding=1"
          title="Cyrus MicroCredit Introduction"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        ></iframe>
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
      {fixedPaths.map((path, i) => (
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
          strokeWidth={path.strokeWidth}
          strokeLinecap="round"
          fill="none"
          d={`M${path.startX},${path.startY} 
              C${path.cp1x},${path.cp1y} 
              ${path.cp2x},${path.cp2y} 
              ${path.endX},${path.endY}`}
        />
      ))}
      
      {fixedDots.map((dot, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill="white"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            transition: {
              duration: 2,
              delay: dot.delay,
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
    {fixedPaths.map((path, i) => (
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
        strokeWidth={path.strokeWidth}
        strokeLinecap="round"
        fill="none"
        d={`M${path.startX},${path.startY} 
            C${path.cp1x},${path.cp1y} 
            ${path.cp2x},${path.cp2y} 
            ${path.endX},${path.endY}`}
      />
    ))}
    
    {fixedDots.map((dot, i) => (
      <motion.circle
        key={`dot-${i}`}
        cx={dot.cx}
        cy={dot.cy}
        r={dot.r}
        fill="white"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.8, 0],
          transition: {
            duration: 2,
            delay: dot.delay,
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
            <CountUp end={stat.value} duration={5} />{stat.suffix}
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
      {fixedPaths.map((path, i) => (
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
          strokeWidth={path.strokeWidth}
          strokeLinecap="round"
          fill="none"
          d={`M${path.startX},${path.startY} 
              C${path.cp1x},${path.cp1y} 
              ${path.cp2x},${path.cp2y} 
              ${path.endX},${path.endY}`}
        />
      ))}
      
      {fixedDots.map((dot, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill="white"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            transition: {
              duration: 2,
              delay: dot.delay,
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
      {fixedPaths.map((path, i) => (
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
          strokeWidth={path.strokeWidth}
          strokeLinecap="round"
          fill="none"
          d={`M${path.startX},${path.startY} 
              C${path.cp1x},${path.cp1y} 
              ${path.cp2x},${path.cp2y} 
              ${path.endX},${path.endY}`}
        />
      ))}
      
      {fixedDots.map((dot, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill="white"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            transition: {
              duration: 2,
              delay: dot.delay,
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
        <Link href="/loans" passHref>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Apply Now
        </motion.button>
        </Link>
        <Link href="/contact" passHref>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-lg text-blue-700 bg-white border border-blue-300 hover:bg-gray-50 transition-colors"
        >
          Contact Us
        </motion.button>
        </Link>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
}