import ServicesPage from '@/components/Services'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Services() {
  return (
    <div className="min-h-screen">
      <div className='bg-blue-900 relative max-w-full h-[400px]'>
        <Image 
          src="/slider4.jpg" 
          alt="Services background" 
          fill 
          className='object-cover'
          priority
        />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='flex justify-between items-center'>
            <div className='rounded-lg bg-white p-8 opacity-80'>
              <p className='pt-2 text-blue-600'>Our Services</p>
              <p className='pt-2 pb-4'>Tailored solutions to help your business thrive in today&apos;s competitive landscape.</p>
              <h1 className='pt-4 pb-4 text-3xl text-gold'>Comprehensive Financial Solutions</h1>
              <Link href="/contact" className="inline-block">
                <button className='px-6 py-3 rounded-lg text-white bg-brandsecondary hover:bg-blue-900 transition-colors'>
                  GET IN TOUCH
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <ServicesPage />
      </div>
    </div>
  )
}