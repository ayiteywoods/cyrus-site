import FAQ from '@/components/FAQ'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
        <div className='bg-blue-900 max-w-full relative'>
        <Image src='/slider1.jpg' alt='bg' fill className='object-cover'/>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='flex justify-between items-center'>
                <div className='rounded-lg bg-white p-8 opacity-80'>
                    <p className='pt-2 text-blue-600 '>Frequently Asked Questions</p>
                    <p className='pt-2 pb-4'>Business insights enable smart moves towards wealth & security.</p>
                    <h1 className='pt-4 pb-4 text-3xl '>Got questions? We&apos;ve got you covered.</h1>
                    <button className='px-6 py-3 rounded-lg text-white bg-blue-500'>GET IN TOUCH</button>
                </div>
            </div>
            </div>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <FAQ />
        </div>
    </>
  )
}

export default page