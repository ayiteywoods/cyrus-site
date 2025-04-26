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
import {motion} from 'motion/react'
export default function Home() {
 

  return (
    <div>
      
      <HeroSlider/>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-10 pb-10'>
      <QuickLinks />
      </div>
      <main className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-blue-50">
        {/* Your page content */}
       
          <motion.div initial={{ opacity: 0, scale: 2 }} animate={{ opacity: 1, scale: 1 }}
           className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-10 pb-10'>
          <Impact />
        </motion.div>
        <div className='bg-sky-100 rounded-2xl shadow'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20 pb-20'>
          <ClientCentric />
        </div>
        </div>
        
      </main>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'><Partners /></div>

      <div className='bg-blue-900'>
        <motion.div initial={{ opacity: 0, scale: 2 }} animate={{ opacity: 1, scale: 1 }} 
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <Support />
        </motion.div>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'><PayLoan /></div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'><Policies /></div>
      <div className='bg-blue-200'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          
            <h2 className="text-3xl font-thin text-center mb-2 mt-5">
              Testimonials / Success Stories
              </h2>
              <p className="text-center px-10">
              Businesses thrive with Cyrus Micro-Credit Solutions that deliver real results. 
              Here’s what our clients say: 
              </p>
            <TestimonialsCarousel />
  
          </div>
      </div>
    </div>
  );
}
