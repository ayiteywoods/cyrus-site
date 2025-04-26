import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <div>
        <div className='justify-center items-center'>
            <h1 className='text-3xl font-thin text-center p-4'>Our Partners</h1>
            <p className='text-center px-20 pb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos exercitationem, possimus placeat assumenda minima veritatis odio ea tenetur quibusdam officia porro? Sapiente, impedit similique ex sunt accusamus suscipit eveniet omnis.</p>
        </div>
        <div className="flex items-center justify-center gap-4">
  <div className="flex items-center justify-center">
    <Image src="/partner1.webp" alt="partner1" width={200} height={80} />
  </div>
  <div className="flex items-center justify-center">
    <Image src="/partner2.webp" alt="partner2" width={200} height={80} />
  </div>
  <div className="flex items-center justify-center">
    <Image src="/partner3.webp" alt="partner3" width={200} height={80} />
  </div>
</div>
    </div>
  )
}

export default Partners