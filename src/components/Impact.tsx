'use client'

import Image from 'next/image'
import CountUp from 'react-countup';
import React from 'react'
import {motion} from 'motion/react'

const Impact = () => {
  return (
    <>
    <div className='pb-4'>
        <h1 className='text-3xl '>
            Impact
        </h1>
        <p className='pr-20'>
        Join the community of businesses and individuals who trust us to meet their financial needs.
        </p>
    </div>
  {/*  <div className='flex justify-between items-center gap-7'>

        <div className='rounded-xl shadow-md bg-white flex justify-between'>
            <div className='p-4'>
                <h1 className='text-3xl font-semibold '>30K+</h1>
                <p>We've experienced more than 10+ years with success.</p>
            </div>
            <div className='place-content-center bg-white p-4' >
            <Trophy size={60} />
            </div>
        </div>
        <div className='rounded-xl shadow-md bg-white flex justify-between'>
            <div className='p-4'>
                <h1 className='text-3xl font-semibold '>95%+</h1>
                <p>We achieve a lot for our work from top certified agencies.</p>
            </div>
            <div className='place-content-center bg-white p-4' >
            <LucideAward size={60} />
            </div>
        </div>

        <div className='rounded-xl shadow-md bg-white flex justify-between'>
            <div className='p-4'>
                <h1 className='text-3xl font-semibold '>100+</h1>
                <p>We've made clients happy all over the world.</p>
            </div>
            <div className='place-content-center bg-white p-4' >
            <Globe size={60} />
            </div>
        </div>
    </div> */}
     <div className='grid md:grid-cols-3 grid-cols-1 justify-between items-center gap-7'>

        <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ scale:1.1 }}
                    whileTap={{ scale:1 }}
                    whileInView={{ opacity: 1 }} 
         className='rounded-xl shadow-md bg-white flex justify-between'>
           <div className='p-4'>
               <h1 className='text-3xl font-semibold '><CountUp end={30}/>K+</h1>
               <p>We've experienced more than 10+ years with success.</p>
          </div>
         <div className='place-content-center bg-white' >
             <Image src='/c1.webp' alt='c1' width={300} height={150}/>
         </div>
        </motion.div>
        <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ scale:1.1 }}
                    whileTap={{ scale:1 }}
                    whileInView={{ opacity: 1 }}  
className='rounded-xl shadow-md bg-white flex justify-between'>
    <div className='p-4'>
        <h1 className='text-3xl font-semibold '><CountUp end={95}/>%+</h1>
        <p>We achieve a lot for our work from top certified agencies.</p>
    </div>
    <div className='place-content-center bg-white' >
    <Image src='/c2.webp' alt='c2' width={300} height={150}/>
    </div>
</motion.div>

<motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ scale:1.1 }}
                    whileTap={{ scale:1 }}
                    whileInView={{ opacity: 1 }}  className='rounded-xl shadow-md bg-white flex justify-between'>
    <div className='p-4'>
        <h1 className='text-3xl font-semibold '><CountUp end={100}/>+</h1>
        <p>We've made clients happy all over the world.</p>
    </div>
    <div className='place-content-center bg-white' >
    <Image src='/c3.webp' alt='c3' width={300} height={150}/>
    </div>
</motion.div>
</div>
    </>

  )
}

export default Impact