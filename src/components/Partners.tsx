import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <div>
        <div className='justify-center items-center'>
            <h1 className='text-3xl font-thin text-center p-4'>Our Partners</h1>
            <p className='text-center px-20 pb-5'>
            We're proud to collaborate with industry leaders and innovators who share our commitment to excellence. 
      These strategic partnerships amplify our impact, drive innovation, and deliver exceptional value to our 
      clients. Together, we're shaping the future of [your industry] through shared expertise and vision.</p>
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