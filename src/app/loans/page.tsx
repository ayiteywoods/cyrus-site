'use client'
import LoanFAQ from '@/components/LoanFAQ'
import Partners from '@/components/Partners'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'

const page = () => {
  return (
    <>
    <div className='bg-blue-900 relative max-w-full h-[400px]'>
                <Image src='/slider3.jpg' alt='bg' fill className='object-cover'/>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='flex justify-between items-center'>
            <div className='rounded-lg bg-white p-8 opacity-70'>
                <p className='pt-2 text-blue-600 '>Apply for Loans</p>
                <p className='pt-2 pb-4'>Choose your ideal plan. No obligation, cancel anytime.</p>
                <h1 className='pt-4 pb-4 text-3xl '>Apply for Free.</h1>
                <button className='px-6 py-3 rounded-lg text-white bg-blue-500'>GET IN TOUCH</button>
            </div>
        </div>
        </div>
    </div>

    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 py-8 gap-8'>
        <motion.div 
                            initial={{ opacity: 0 }}
                            whileHover={{ scale:1.1 }}
                            whileTap={{ scale:1 }}
                            whileInView={{ opacity: 1 }} 
         className='bg-blue-400 rounded-lg p-10 flex flex-col items-center justify-center gap-4 pb-12'>
            <Image src='/loan3.webp' alt='loan' width={200} height={60}/>
                <h1 className='text-white text-4xl text-center'>Want a Custom Loan for your Business?</h1>
                 <button className='w-full rounded-lg border-1 bg-blue-500 px-6 py-3 border-blue-300 hover:bg-blue-600 text-white'>LET'S TALK</button>
        </motion.div>
            <div className='border-1 rounded-lg border-blue-100 p-5'>
                <h1 className='text-3xl font-thin p-2 '>Got questions? We've got you covered.</h1>
                <LoanFAQ />
                
            </div>
        </div>
    </div>

    <div className='bg-blue-50 p-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'><Partners /></div>
        
    </div>

    
   </>
  )
}

export default page