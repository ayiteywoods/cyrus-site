import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'

const ClientCentric = () => {
  return (
    <>
    <div className='pb-4'>
        <h1 className='text-3xl '>
        Our Client-Centric Approach
        </h1>
        
    </div>
    
    <div className='grid md:grid-cols-3 grid-cols-1 justify-between gap-8'>
        <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ scale:1.1 }}
        whileTap={{ scale:1 }}
        whileInView={{ opacity: 1 }}
        className='shadow bg-white'>
        <Image src='/c1.webp' alt="c1" width={400} height={50}/>
        <div className='p-6 text-center'>
                <h1 className='text-xl font-semibold '>Optimize Template</h1>
                <p>We offer tailored microcredit services to help you grow financially.</p>
            </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ scale:1.1 }}
        whileTap={{ scale:1 }}
        whileInView={{ opacity: 1 }} 
        className='shadow bg-white'>
        <Image src='/c2.webp' alt="c1" width={400} height={50}/>
        <div className='p-6 text-center'>
        <h1 className='text-xl font-semibold '>Convenience</h1>
        <p>Our experienced team provides actionable plans and insights to ensure your success.</p>
            </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ scale:1.1 }}
        whileTap={{ scale:1 }}
        whileInView={{ opacity: 1 }}
        className='shadow bg-white'>
        <Image src='/c3.webp' alt="c1" width={400} height={50}/>
        <div className='p-6 text-center'>
        <h1 className='text-xl font-semibold '>Services targeted for the Poor</h1>
        <p>Easy and efficient loan applications with no hidden fees.</p>
            </div>
        </motion.div>
    </div>
    </>
  )
}

export default ClientCentric