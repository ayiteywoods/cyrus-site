'use client';
import { motion } from 'framer-motion';
import DynamicHeroIcon from './DynamicHeroIcon';

const benefits = [
  { title: 'Competitive Salaries', description: 'Market-competitive compensation', icon: 'Banknotes' },
  { title: 'Health Coverage', description: 'Comprehensive medical insurance', icon: 'Heart' },
  { title: 'Learning & Growth', description: 'Professional development opportunities', icon: 'AcademicCap' },
  { title: 'Retirement Plan', description: 'Secure your future', icon: 'BuildingLibrary' },
  { title: 'Flexible Work', description: 'Hybrid work options', icon: 'Clock' },
  { title: 'Team Culture', description: 'Collaborative environment', icon: 'UserGroup' }
];

const CareerBenefits = () => {
  return (
    <div>
      <h2 className='text-2xl font-thin text-gray-800 mb-8'>Why Work With Us</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.title}
            whileHover={{ y: -5 }}
            className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
          >
            <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
              <DynamicHeroIcon icon={benefit.icon} className='h-6 w-6 text-blue-600' />
            </div>
            <h3 className='text-xl font-semibold mb-2'>{benefit.title}</h3>
            <p className='text-gray-600'>{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareerBenefits;