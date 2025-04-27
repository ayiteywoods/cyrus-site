import { Goal } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const PayLoan = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
        {/* Text Content */}
        <div className='shadow-lg p-6 md:p-10 bg-blue-50 rounded-2xl w-full lg:w-[60%]'>
          <h1 className='text-2xl md:text-3xl text-blue-400 font-semibold mb-4'>
            We Promise Sustainable Future For You..
          </h1>
          
          <div className='space-y-3'>
            <p className='text-base md:text-lg flex gap-2 items-start'>
              <Goal className='text-orange-300 flex-shrink-0 mt-1' size={20}/>
              <span>Loans are very small, short-term, and unsecured, with more frequent repayments.</span>
            </p>

            <p className='text-base md:text-lg flex gap-2 items-start'> 
              <Goal className='text-orange-300 flex-shrink-0 mt-1' size={20}/>
              <span>The screening process ensures that the applicants are micro borrowers.</span>
            </p>

            <p className='text-base md:text-lg flex gap-2 items-start'> 
              <Goal className='text-orange-300 flex-shrink-0 mt-1' size={20}/>
              <span>The applicants are then registered after they pass the screening stage.</span>
            </p>

            <p className='text-base md:text-lg flex gap-2 items-start'>
              <Goal className='text-orange-300 flex-shrink-0 mt-1' size={20}/>
              <span>Loan documentation is generated largely by the Loans and Operations managers through visits to the borrower&apos;s business and home.</span>
            </p>
          </div>
          
          <div className='mt-6 text-center lg:text-left'>
            <button className='text-white rounded-xl bg-blue-400 hover:bg-blue-500 px-6 py-3 transition-colors duration-300'>
              More About Us
            </button>
          </div>
        </div>
        
        {/* Image - Now visible on all screens */}
        <div className='w-full lg:w-[40%] flex justify-center lg:justify-end'>
          <Image 
            src='/settle.png' 
            alt='Loan settlement illustration'
            width={500}
            height={400}
            className='w-full max-w-[400px] lg:max-w-none object-contain'
            priority={false}
          />
        </div>
      </div>
    </div>
  )
}

export default PayLoan