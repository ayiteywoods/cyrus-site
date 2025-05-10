'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import JobListing from '@/components/JobListing';
import CareerBenefits from '@/components/CareerBenefits';
import ApplicationForm from '@/components/ApplicationForm';

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

const jobOpenings: Job[] = [
  {
    id: 1,
    title: 'Loan Officer',
    department: 'Credit Operations',
    location: 'Accra, Ghana',
    type: 'Full-time',
    description: 'Evaluate loan applications and guide clients through the borrowing process.',
    responsibilities: [
      'Assess creditworthiness of applicants',
      'Explain loan terms and conditions',
      'Maintain client relationships',
      'Ensure compliance with regulations'
    ],
    requirements: [
      "Bachelor's degree in Finance or related field",
      '2+ years experience in lending',
      'Strong analytical skills',
      'Excellent communication abilities'
    ]
  },
  {
    id: 2,
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop and implement digital strategies to promote our financial services.',
    responsibilities: [
      'Manage social media channels',
      'Create digital campaigns',
      'Analyze marketing metrics',
      'Optimize SEO and content strategy'
    ],
    requirements: [
      '3+ years digital marketing experience',
      'Proficiency in marketing tools',
      'Creative content creation skills',
      'Data-driven decision making'
    ]
  }
];

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState<'openings' | 'benefits' | 'process'>('openings');
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleApplyClick = (jobId: number) => {
    setSelectedJob(jobId);
    setShowApplicationForm(true);
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleCloseForm = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
  };

  return (
    <>
      {/* Hero Section */}
      <div className='bg-blue-900 relative max-w-full h-[400px]'>
        <Image src='/slider5.jpg' alt='careers-hero' fill className='object-cover' priority />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10'>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='rounded-lg bg-white p-8 opacity-90 max-w-2xl'
          >
            <p className='pt-2 text-brandsecondary font-medium'>Join Our Team</p>
            <h1 className='pt-4 pb-4 text-3xl font-bold text-gold'>Build Your Career in Microfinance</h1>
            <button 
              onClick={() => {
                setActiveTab('openings');
                setTimeout(() => {
                  document.getElementById('job-openings')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className='px-6 py-3 rounded-lg text-white bg-brandsecondary hover:bg-blue-900 transition-colors'
            >
              VIEW OPEN POSITIONS
            </button>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div id="job-openings" className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Navigation Tabs */}
        <div className='flex flex-wrap justify-center mb-8 border-b border-gray-200'>
          <button
            onClick={() => setActiveTab('openings')}
            className={`px-6 py-3 font-medium ${activeTab === 'openings' ? 'text-gold border-b-2 border-gold' : 'text-gray-500'}`}
          >
            Current Openings
          </button>
          <button
            onClick={() => setActiveTab('benefits')}
            className={`px-6 py-3 font-medium ${activeTab === 'benefits' ? 'text-gold border-b-2 border-gold' : 'text-gray-500'}`}
          >
            Our Benefits
          </button>
          <button
            onClick={() => setActiveTab('process')}
            className={`px-6 py-3 font-medium ${activeTab === 'process' ? 'text-gold border-b-2 border-gold' : 'text-gray-500'}`}
          >
            Hiring Process
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'openings' && (
          <div className='space-y-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>Available Positions</h2>
            {jobOpenings.map((job) => (
              <JobListing 
                key={job.id}
                job={job}
                isExpanded={selectedJob === job.id}
                onToggle={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                onApply={handleApplyClick}
              />
            ))}
          </div>
        )}

        {activeTab === 'benefits' && <CareerBenefits />}

        {activeTab === 'process' && (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              { step: 1, title: 'Application', description: 'Submit through our portal', icon: 'DocumentText' },
              { step: 2, title: 'Screening', description: 'HR reviews qualifications', icon: 'ClipboardDocumentCheck' },
              { step: 3, title: 'Interviews', description: 'Meet with hiring team', icon: 'UserGroup' },
              { step: 4, title: 'Assessment', description: 'Job-related tests', icon: 'PencilSquare' },
              { step: 5, title: 'Offer', description: 'Review job offer', icon: 'EnvelopeOpen' },
              { step: 6, title: 'Onboarding', description: 'Paperwork and training', icon: 'Briefcase' }
            ].map((step) => (
              <motion.div
                key={step.step}
                whileHover={{ y: -5 }}
                className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
              >
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                  <span className='text-blue-600 font-bold'>{step.step}</span>
                </div>
                <h3 className='text-xl font-semibold mb-2'>{step.title}</h3>
                <p className='text-gray-600'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Application Form Section */}
      {showApplicationForm && selectedJob && (
        <div id="application-form" className='bg-gray-50 py-12'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <ApplicationForm 
              job={jobOpenings.find(job => job.id === selectedJob)!} 
              onClose={handleCloseForm}
            />
          </div>
        </div>
      )}

      {/* Culture Section */}
      <div className='bg-blue-50 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-thin mb-6'>Our Work Culture</h2>
              <ul className='space-y-3'>
                {[
                  'Flexible work arrangements',
                  'Professional development',
                  'Competitive compensation',
                  'Inclusive workplace',
                  'Impactful work'
                ].map((item) => (
                  <li key={item} className='flex items-start'>
                    <span className='text-blue-500 mr-2'>✓</span>
                    <span className='text-gray-700'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='rounded-lg overflow-hidden shadow-lg'>
              <Image 
                src='/images/about.webp' 
                alt='Office culture' 
                width={800} 
                height={500} 
                className='w-full h-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;