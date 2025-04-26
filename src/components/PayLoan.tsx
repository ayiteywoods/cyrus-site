import { Goal } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const PayLoan = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <div className='shadow-lg p-10 bg-blue-50 rounded-2xl'>
                <h1 className='text-3xl text-blue-400'>We Promise Sustainable
                Future For You..</h1>
                <p className='text-lg flex gap-2 p-2'>
                    <Goal className='text-orange-300'/>
                Loans are very small, short-term, and unsecured, with more frequent repayments.</p>

                <p className='text-lg flex gap-2 p-2'> 
                <Goal className='text-orange-300'/>The screening process ensures that the applicants are micro borrowers. </p>

                <p className='text-lg flex gap-2 p-2'> 
                <Goal className='text-orange-300'/>The applicants are then registered after they pass the screening stage.</p>

                <p className='text-lg flex gap-2 p-2'>
                <Goal size={25} className='text-orange-300'/>Loan documentation is generated largely by the Loans and Operations managers <br></br>through visits to the borrower’s 
                business and home.</p>
                
                <div className='px-7 py-3'>
                <button className=' text-white rounded-xl bg-blue-400 hover:bg-blue-500 px-6 py-3'>
                    More About Us
                    </button></div>
            </div>
                <div className='md:-ml-60'>
                    <Image src='/settle.png' alt='settle' width={500} height={400}/>
                </div>
        </div>
    </div>
  )
}

export default PayLoan