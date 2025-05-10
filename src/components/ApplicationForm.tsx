'use client';
import { useState } from 'react';
import { PaperClipIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface Job {
  id: number;
  title: string;
  department: string;
}

interface ApplicationFormProps {
  job: Job;
  onClose?: () => void;
}

const ApplicationForm = ({ job, onClose }: ApplicationFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', coverLetter: '' });
        setResume(null);
        setSubmitSuccess(false);
        onClose?.();
      }, 3000);
    }, 1500);
  };

  return (
    <div className='bg-white rounded-lg shadow-md p-6 relative'>
      {onClose && (
        <button 
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
        >
          <XMarkIcon className='h-6 w-6' />
        </button>
      )}
      
      <h2 className='text-2xl font-bold mb-2'>Apply for {job.title}</h2>
      <p className='text-gray-600 mb-6'>{job.department} Department</p>
      
      {submitSuccess ? (
        <div className='bg-green-50 border border-green-200 rounded-lg p-6 text-center'>
          <h3 className='text-xl font-semibold text-green-800 mb-2'>Application Submitted!</h3>
          <p className='text-green-600'>Thank you for applying. We&apos;ll review your application shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Full Name *</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Email *</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Phone *</label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Resume *</label>
              <div className='flex items-center'>
                <label className='cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                  <PaperClipIcon className='h-5 w-5 inline mr-1' />
                  {resume ? resume.name : 'Choose File'}
                  <input
                    type='file'
                    className='sr-only'
                    onChange={handleFileChange}
                    accept='.pdf,.doc,.docx'
                    required
                  />
                </label>
                {resume && (
                  <button
                    type='button'
                    onClick={() => setResume(null)}
                    className='ml-2 text-red-500 hover:text-red-700'
                  >
                    <XMarkIcon className='h-5 w-5' />
                  </button>
                )}
              </div>
            </div>
          </div>
          
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Cover Letter *</label>
            <textarea
              name='coverLetter'
              rows={5}
              value={formData.coverLetter}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
              placeholder='Why are you a good fit for this position?'
            />
          </div>
          
          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full bg-brandsecondary text-white py-3 px-4 rounded-md hover:bg-blue-900 transition-colors disabled:bg-blue-400'
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ApplicationForm;