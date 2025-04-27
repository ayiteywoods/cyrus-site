'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Keisha Asante',
    role: 'Founder & CEO',
    bio: 'With over 15 years in financial services, Keisha founded CMCS to bridge the credit gap for small businesses.',
    image: '/mariam.avif'
  },
  {
    name: 'Ama Mensah',
    role: 'Chief Operations Officer',
    bio: 'Ama brings operational excellence from her decade of experience in microfinance institutions.',
    image: '/roberta.avif'
  },
  {
    name: 'Yawa Boateng',
    role: 'Head of Credit',
    bio: 'Yawa oversees our lending portfolio with a focus on risk management and financial inclusion.',
    image: '/mia.avif'
  },
  {
    name: 'Esi Nyarko',
    role: 'Customer Relations',
    bio: 'Esi ensures our clients receive exceptional service throughout their journey with CMCS.',
    image: '/mariam.avif'
  }
]

const TeamSection = () => {
  return (
    <div className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl font-thin text-blue-900 mb-4'>Meet Our Team</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Our dedicated team of financial experts is committed to your success
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all'
            >
              <div className='relative h-64'>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-blue-900'>{member.name}</h3>
                <p className='text-blue-600 mb-3'>{member.role}</p>
                <p className='text-gray-700'>{member.bio}</p>
                <div className='mt-4 flex space-x-4'>
                  <a href="#" className='text-blue-500 hover:text-blue-700'>
                    <span className='sr-only'>LinkedIn</span>
                    <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                    </svg>
                  </a>
                  <a href="#" className='text-blue-500 hover:text-blue-700'>
                    <span className='sr-only'>Twitter</span>
                    <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamSection