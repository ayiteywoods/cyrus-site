import { Infinity, Logs, ShieldPlus } from 'lucide-react'
import React from 'react'
import {motion} from 'motion/react'

const Support = () => {
  return (
    <div>
        <div className='text-white text-3xl font-thin items-center p-8'>
                <h1 className='text-center'>
                Building a Brighter Financial Future & Good Support.
                </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pb-15 pt-4'>
            <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ scale:1.1 }}
        whileTap={{ scale:1 }}
        whileInView={{ opacity: 1 }}
            
            className='bg-white rounded-lg p-8 items-center'>
                <div className='items-center flex gap-2'>
                    <Logs size={40} color='gold'/>
                    <h1 className='text-lg font-bold text-center'>Transparent Operations</h1>
                    </div>
                <p className='text-center p-2'>We maintain full transparency in all our dealings 
                    to ensure you always know what to expect.</p>
            </motion.div>

            <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ scale:1.1 }}
                    whileTap={{ scale:1 }}
                    whileInView={{ opacity: 1 }} 
            className='bg-white rounded-lg p-8 items-center'>
                <div className='items-center flex gap-2'>
                    <ShieldPlus size={40} color='gold'/>
                    <h1 className='text-lg font-bold text-center'>Secure Transactions</h1>
                    </div>
                <p className='text-center p-2'>Our advanced encryption technology keeps your 
                    financial information safe and secure.</p>
            </motion.div>
            
            <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ scale:1.1 }}
                    whileTap={{ scale:1 }}
                    whileInView={{ opacity: 1 }} 
            className='bg-white rounded-lg p-8 items-center'>
                <div className='items-center flex gap-2'>
                    <Infinity size={40} color='gold'/>
                    <h1 className='text-lg font-bold text-center'>Proven Track Record</h1>
                    </div>
                <p className='text-center p-2'>With a decade of experience, our successful 
                    history speaks volumes about our reliability and commitment.</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Support