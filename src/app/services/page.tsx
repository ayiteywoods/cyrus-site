import ServicesPage from '@/components/Services'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-blue-900 relative max-w-full h-[400px]'>
                <Image src="/slider4.jpg " alt="bg" fill className='object-cover'/>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='flex justify-between items-center'>
            <div className='rounded-lg bg-white p-8 opacity-70'>
                <p className='pt-2 text-blue-600 '>Our Services</p>
                <p className='pt-2 pb-4'>Tailored solutions to help your business thrive in today's competitive landscape.</p>
                <h1 className='pt-4 pb-4 text-3xl '>Comprehensive Financial Solutions</h1>
                <button className='px-6 py-3 rounded-lg text-white bg-blue-500'>GET IN TOUCH</button>
            </div>
        </div>
        </div>
    </div>

    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <ServicesPage />
    </div>
</>
  )
}

export default page