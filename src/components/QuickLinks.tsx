import { Activity, BadgeCent, Landmark, UserRoundSearch, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const QuickLinks = () => {
  return (
    <div className='grid md:grid-cols-5 grid-cols-2 gap-4 '>
        <div className='border-r-1 border-blue-100 px-10 flex flex-col items-center justify-center'>
            <div className='font-light text-center'>
               <Link href='/loans'> <UserRoundSearch  size={50} strokeWidth={1} className="text-blue-400 hover:text-orange-200  font-thin mx-auto"/>
                <p>Personal Loans</p>
                </Link>
            </div>
        </div>
        <div className='border-r-1 border-blue-100 px-10 flex flex-col items-center justify-center'>
            <div className='font-light text-center'>
            <Link href='/loans'><Landmark  size={50} strokeWidth={1} className="text-blue-400 hover:text-orange-200  font-thin mx-auto"/>
                <p>Accounts</p>
                </Link>
            </div>
        </div>
        <div className='border-r-1 border-blue-100 px-10 flex flex-col items-center justify-center'>
            <div className='font-light text-center'>
            <Link href='/loans'>  <Activity  size={50} strokeWidth={1} className="text-blue-400 hover:text-orange-200 font-thin mx-auto"/>
                <p>Join & Apply</p>
                </Link>
            </div>
        </div>
        <div className='border-r-1 border-blue-100 px-10 flex flex-col items-center justify-center'>
            <div className='font-light text-center'>
            <Link href='/loans'>  <BadgeCent  size={50} strokeWidth={1} className="text-blue-400 hover:text-orange-200  font-thin mx-auto"/>
                <p>Wealth</p>
                </Link>
            </div>
        </div>
        <div className=' px-10 flex flex-col items-center justify-center'>
            <div className='font-light text-center'>
            <Link href='/clients'>   <Users  size={50} strokeWidth={1} className="text-blue-400 hover:text-orange-200  font-thin mx-auto"/>
                <p>Clients Portal</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default QuickLinks