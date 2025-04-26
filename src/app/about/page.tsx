'use client'

import Partners from '@/components/Partners'
import {  DatabaseBackup, Goal } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup'
import {motion} from 'motion/react'

const page = () => {
  return (
    <>
         <div className='bg-blue-900 relative max-w-full h-[400px]'>
            <Image src="/slider7.jpg " alt="bg" fill className='object-cover'/>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='flex justify-between items-center'>
                <div
                 className='rounded-lg bg-white p-8 opacity-70'>
                    <p className='pt-2 text-blue-600 '>About Us</p>
                    <p className='pt-2 pb-4'>Navigating your business growth with experience & insightful solutions.</p>
                    <h1 className='pt-4 pb-4 text-3xl '>We&apos;re a award winner business company.</h1>
                    <button className='px-6 py-3 rounded-lg text-white bg-blue-500'>GET IN TOUCH</button>
                </div>
            </div>
            </div>
        </div>

        <div className='bg-blue-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        whileHover={{ scale:1.1 }}
                                        whileTap={{ scale:1 }}
                                        whileInView={{ opacity: 1 }} 
                         className='bg-white shadow p-4 rounded-lg'>
                        <h1 className='text-3xl font-thin p-4'>Welcome to Cyrus MicroCredit Services (CMCS)!</h1>
                        <p className='p-4'>We are dedicated to empowering individuals and businesses by providing accessible and 
                            affordable microcredit solutions. Our goal is to drive financial inclusion, foster growth, 
                            and support sustainable development through innovative financial services and expert guidance.</p>
                    </motion.div>
                    <div className=' space-y-8'>
                        <motion.div 
                                            initial={{ opacity: 0 }}
                                            whileHover={{ scale:1.1 }}
                                            whileTap={{ scale:1 }}
                                            whileInView={{ opacity: 1 }}  
                        className='bg-white shadow  rounded-lg flex'>
                            <div className=' bg-blue-400  p-8 content-center'>
                                <div className='text-center text-white'>
                                <DatabaseBackup size={50} className=''/>
                                </div>
                                
                            </div>
                            <div className='p-4'>
                            <h1 className='text-xl font-thin'>Our Mission</h1>
                            <p>We aim to transform lives by delivering financial expertise, accelerating progress, and ensuring 
                                a secure future through trustworthy partnerships and innovative solutions.</p>
                            </div>
                        </motion.div>

                        <motion.div 
                                            initial={{ opacity: 0 }}
                                            whileHover={{ scale:1.1 }}
                                            whileTap={{ scale:1 }}
                                            whileInView={{ opacity: 1 }} 
                        className='bg-white shadow  rounded-lg flex'>
                            <div className=' bg-blue-400  p-8 content-center'>
                                <div className='text-center text-white'>
                                <Goal size={50} className=''/>
                                </div>
                                
                            </div>
                            <div className='p-4'>
                            <h1 className='text-xl font-thin'>Our Vision</h1>
                            <p>We envision a financially stable future for all, 
                                offering creative strategies and professional advice to enhance wealth management.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>
        <div className='bg-blue-900'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-4'>
                    <div className='border-r-1 border-blue-700 p-8 content-center'>
                        <h1 className='text-white text-center text-3xl font-thin'><CountUp end={120}/>+</h1>
                        <p className='text-white text-center font-thin'>Partner with Us</p>
                    </div>

                    <div className='border-r-1 border-blue-700 p-8 content-center'>
                        <h1 className='text-white text-center text-3xl font-thin'><CountUp end={705}/>k</h1>
                        <p className='text-white text-center font-thin'>Successful Services</p>
                    </div>

                    <div className='border-r-1 border-blue-700 p-8 content-center'>
                        <h1 className='text-white text-center text-3xl font-thin'><CountUp end={1}/>.2%</h1>
                        <p className='text-white text-center font-thin'>Lowest Interest Rate</p>
                    </div>

                    <div className=' p-8 content-center'>
                        <h1 className='text-white text-center text-3xl font-thin'>₵<CountUp end={1}/>.3b+</h1>
                        <p className='text-white text-center font-thin'>Cumulative Trading</p>
                    </div>
                </div>
            </div>
            <div className='bg-blue-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                    <h1 className='text-3xl font-thin pt-8 pb-2'>Provide Quality Services</h1>
                    <p>CMCS has the full types of potential for your startup business.</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 py-8 gap-8'>
                        <motion.div 
                                            initial={{ opacity: 0 }}
                                            whileHover={{ scale:1.1 }}
                                            whileTap={{ scale:1 }}
                                            whileInView={{ opacity: 1 }}  
                        
                        className='bg-blue-400 rounded-lg shadow flex gap-2'>
                            <Image src="/credit.webp" alt='image' width={150} height={80}/> 
                            <div className='p-4'>
                                <h1 className='text-xl font-thin text-white'>Bussiness Support</h1>
                                <p>Comprehensive analysis and insights to guide your business decisions.</p>
                            </div>
                        </motion.div>

                         <motion.div 
                                             initial={{ opacity: 0 }}
                                             whileHover={{ scale:1.1 }}
                                             whileTap={{ scale:1 }}
                                             whileInView={{ opacity: 1 }}  
                         className='bg-blue-400 rounded-lg shadow flex gap-2'>
                            <Image src="/morden.webp" alt='image' width={150} height={80}/> 
                            <div className='p-4'>
                                <h1 className='text-xl font-thin text-white'>Modern Technology Solutions</h1>
                                <p>Cutting-edge financial technology to streamline your operations.</p>
                            </div>
                        </motion.div>

                         <motion.div 
                                             initial={{ opacity: 0 }}
                                             whileHover={{ scale:1.1 }}
                                             whileTap={{ scale:1 }}
                                             whileInView={{ opacity: 1 }} 
                                              className='bg-blue-400 rounded-lg shadow flex gap-2'>
                            <Image src="/quality.webp" alt='image' width={150} height={80}/> 
                            <div className='p-4'>
                                <h1 className='text-xl font-thin text-white'>Quality support</h1>
                                <p>Dedicated assistance to ensure your success and satisfaction.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className='py-8 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                    <Partners />
                </div>
            </div>
        </div>
    </>
  )
}

export default page