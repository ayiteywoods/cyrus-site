import React from 'react'
import VerticalScrollCards from './VerticalScrollCards'

const Policies = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
            <div className='border rounded-tl-2xl rounded-bl-2xl border-blue-400 p-8 shadow'>
                <h1 className='text-2xl pb-3'>Empowering Small Businesses</h1>
                <p className='pb-4'>As an MFI, CYRUS was formed with the purpose of providing social and 
                    financial solutions to the poor. To determine its vulnerability to 
                    credit risk, there is review of the policies and procedures at every 
                    stage in the lending process to determine whether they reduce delinquencies 
                    and loan losses to an acceptable level.</p>
                    <p>
                    These policies and procedures include the loan eligibility criteria, the 
                    application review process and authorization levels, collateral or security 
                    requirements, as well as the “carrots and sticks” used to motivate staff 
                    and compel borrowers to repay.
                    </p>
            </div>
            <div className=''>
                <VerticalScrollCards />
            </div>
        </div>
    </div>
  )
}

export default Policies