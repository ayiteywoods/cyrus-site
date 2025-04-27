'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "CMCS provided the capital we needed to expand our retail business. Their flexible repayment terms made all the difference.",
    name: "Adwoa Safo",
    role: "Owner, Adwoa's Fashion Hub",
    rating: 5
  },
  {
    quote: "As a first-time borrower, I was nervous, but the team at CMCS guided me through every step. Now my catering business is thriving!",
    name: "Kofi Ansah",
    role: "Proprietor, Kofi's Kitchen",
    rating: 5
  },
  {
    quote: "The digital loan application process was seamless, and funds were disbursed within 24 hours. Excellent service!",
    name: "Nana Yaa",
    role: "CEO, Tech Solutions GH",
    rating: 4
  }
]

const Testimonials = () => {
  return (
    <div className='py-16 bg-blue-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl font-thin text-blue-900 mb-4'>Client Testimonials</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Hear what our clients say about their experience with CMCS
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'
            >
              <div className='mb-4 flex'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
              <blockquote className='text-gray-700 mb-6 italic'>
                "{testimonial.quote}"
              </blockquote>
              <div className='flex items-center'>
                <div className='bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold'>
                  {testimonial.name.charAt(0)}
                </div>
                <div className='ml-4'>
                  <p className='font-medium text-gray-900'>{testimonial.name}</p>
                  <p className='text-gray-600 text-sm'>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='mt-12 text-center'
        >
          <button className='px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors'>
            View More Testimonials
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonials