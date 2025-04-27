'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    name: 'Kwame Osei',
    business: 'Osei Farms',
    quote: 'The agricultural loan helped me expand my poultry farm. The process was smooth and the rates competitive.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ama Serwaa',
    business: 'Serwaa Fashion',
    quote: 'With the working capital loan, I was able to buy more materials and fulfill large orders on time.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Kofi Mensah',
    business: 'Mensah Auto Repairs',
    quote: 'The equipment financing allowed me to purchase modern tools that doubled my workshop capacity.',
    rating: 5,
  }
];

const LoanTestimonials = () => {
  return (
    <div className="space-y-6">
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-2xl font-bold text-gray-500">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-600 mb-4">
              &amp;{testimonial.quote}&amp;
              </blockquote>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.business}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LoanTestimonials;