'use client';
import { motion } from 'framer-motion';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

interface JobListingProps {
  job: Job;
  isExpanded: boolean;
  onToggle: () => void;
  onApply: (jobId: number) => void;
}

const JobListing = ({ job, isExpanded, onToggle, onApply }: JobListingProps) => {
  return (
    <motion.div 
      layout
      className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'
    >
      <button
        onClick={onToggle}
        className='w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors'
      >
        <div>
          <h3 className='text-xl font-semibold text-gray-800'>{job.title}</h3>
          <div className='flex flex-wrap gap-4 mt-2'>
            <span className='text-gray-600'>{job.department}</span>
            <span className='text-gray-600'>{job.location}</span>
            <span className='text-gray-600'>{job.type}</span>
          </div>
        </div>
        {isExpanded ? (
          <ArrowUpIcon className='h-5 w-5 text-gray-500' />
        ) : (
          <ArrowDownIcon className='h-5 w-5 text-gray-500' />
        )}
      </button>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='px-6 pb-6'
        >
          <p className='text-gray-700 mb-4'>{job.description}</p>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <h4 className='font-medium text-gray-800 mb-2'>Responsibilities:</h4>
              <ul className='list-disc pl-5 space-y-1 text-gray-600'>
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className='font-medium text-gray-800 mb-2'>Requirements:</h4>
              <ul className='list-disc pl-5 space-y-1 text-gray-600'>
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <button 
            onClick={() => onApply(job.id)}
            className='mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
          >
            Apply for This Position
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default JobListing;