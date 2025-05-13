'use client';

import LoanFAQ from '@/components/LoanFAQ';
import Partners from '@/components/Partners';
import LoanCalculator from '@/components/LoanCalculator';
import LoanTestimonials from '@/components/LoanTestimonials';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ✅ Lucide icons
import {
  Banknote,
  CheckCheck,
  ClipboardCheck,
  FileText,
  ChartBar,
  Cog,
  DollarSign,
  Truck,
  Ratio,
} from 'lucide-react';

// 🔁 Icon mapping
const lucideIconMap: { [key: string]: React.ElementType } = {
  Banknotes: Banknote,
  CheckBadge: CheckCheck,
  ClipboardDocumentCheck: ClipboardCheck,
  DocumentText: FileText,
  ChartBar: ChartBar,
  Cog: Cog,
  CurrencyDollar: DollarSign,
  Truck: Truck,
};

interface LoanType {
  id: number;
  name: string;
  description: string;
  amountRange: string;
  interestRate: string;
  term: string;
  icon: string;
}

const loanTypes: LoanType[] = [
  {
    id: 1,
    name: 'Business Expansion Loan',
    description: 'Grow your business with flexible financing options',
    amountRange: '₵5,000 - ₵500,000',
    interestRate: '12% - 18% p.a.',
    term: '6 - 60 months',
    icon: 'ChartBar',
  },
  {
    id: 2,
    name: 'Equipment Financing',
    description: 'Acquire new equipment without upfront costs',
    amountRange: '₵10,000 - ₵1,000,000',
    interestRate: '10% - 15% p.a.',
    term: '12 - 48 months',
    icon: 'Cog',
  },
  {
    id: 3,
    name: 'Working Capital Loan',
    description: 'Manage cash flow and operational expenses',
    amountRange: '₵2,000 - ₵200,000',
    interestRate: '15% - 20% p.a.',
    term: '3 - 24 months',
    icon: 'CurrencyDollar',
  },
  {
    id: 4,
    name: 'Agricultural Loan',
    description: 'Special financing for farmers and agribusinesses',
    amountRange: '₵1,000 - ₵300,000',
    interestRate: '8% - 12% p.a.',
    term: '6 - 36 months',
    icon: 'Truck',
  },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState<'types' | 'calculator' | 'faq'>('types');
  const [selectedLoan, setSelectedLoan] = useState<LoanType | null>(null);

  const processSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete our simple online form in minutes',
      icon: 'DocumentText',
    },
    {
      step: 2,
      title: 'Document Review',
      description: 'We verify your documents quickly',
      icon: 'ClipboardDocumentCheck',
    },
    {
      step: 3,
      title: 'Approval Decision',
      description: 'Get a decision within 24-48 hours',
      icon: 'CheckBadge',
    },
    {
      step: 4,
      title: 'Receive Funds',
      description: 'Money disbursed to your account',
      icon: 'Banknotes',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className='bg-blue-900 relative max-w-full h-[400px]'>
        <Image src='/slider3.jpg' alt='bg' fill className='object-cover' priority />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10'>
          <div className='flex justify-between items-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='rounded-lg bg-white p-8 opacity-90'
            >
              <p className='pt-2 text-blue-600 font-medium'>Apply for Loans</p>
              <p className='pt-2 pb-4 text-gray-700'>
                Choose your ideal plan. No obligation, cancel anytime.
              </p>
              <h1 className='pt-4 pb-4 text-3xl font-thin text-gold'>
                Financial Solutions Tailored for You
              </h1>
              <Link href='/loans' passHref>
                <button className='px-6 py-3 rounded-lg text-white bg-brandsecondary hover:bg-blue-900 transition-colors'>
                  APPLY NOW
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Loan Products Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-thin text-brandsecondary'>Our Loan Products</h2>
          <p className='text-gray-600 mt-4 max-w-2xl mx-auto'>
            Flexible financing options designed to meet your business needs
          </p>
        </div>

        {/* Loan Type Tabs */}
        <div className='flex justify-center mb-8 border-b border-gray-200'>
          {['types', 'calculator', 'faq'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-3 font-medium ${
                activeTab === tab ? 'text-gold border-b-2 border-gold' : 'text-gray-500'
              }`}
            >
              {tab === 'types' ? 'Loan Types' : tab === 'calculator' ? 'Loan Calculator' : 'FAQs'}
            </button>
          ))}
        </div>

        {/* Loan Types */}
        {activeTab === 'types' && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {loanTypes.map((loan) => {
              const Icon = lucideIconMap[loan.icon];
              return (
                <motion.div
                  key={loan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className='bg-white rounded-lg shadow-md overflow-hidden border border-gray-100'
                  onClick={() => setSelectedLoan(loan)}
                >
                  <div className='p-6'>
                    <div className='flex justify-center mb-4'>
                      {Icon && <Icon className='h-12 w-12 text-gold' />}
                    </div>
                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>{loan.name}</h3>
                    <p className='text-gray-600 mb-4'>{loan.description}</p>
                    <div className='space-y-2 text-sm'>
                      <p>
                        <span className='font-medium'>Amount:</span> {loan.amountRange}
                      </p>
                      <p>
                        <span className='font-medium'>Interest:</span> {loan.interestRate}
                      </p>
                      <p>
                        <span className='font-medium'>Term:</span> {loan.term}
                      </p>
                    </div>
                  </div>
                  <div className='bg-gold px-6 py-3 text-center'>
                    <button className='text-white font-medium hover:text-white'>
                      Learn More →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {activeTab === 'calculator' && <LoanCalculator selectedLoan={selectedLoan} />}
        {activeTab === 'faq' && (
          <div className='bg-white rounded-lg shadow-sm p-6'>
            <LoanFAQ />
          </div>
        )}
      </div>

      {/* Custom Loan CTA */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 py-8 gap-8'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            className='bg-brandsecondary rounded-lg p-10 flex flex-col items-center justify-center gap-6 text-white'
          >
            <Ratio className='h-16 w-16 text-gold' />
            <h1 className='text-3xl md:text-4xl font-bold text-center'>
              Need a Custom Loan Solution?
            </h1>
            <p className='text-center text-blue-100'>
              Our financial experts will create a personalized plan for your unique needs
            </p>
            <Link href='/contact' passHref>
              <button className='w-full max-w-xs rounded-lg bg-white px-6 py-3 text-brandsecondary font-medium hover:bg-gray-100 transition-colors'>
                SPEAK WITH AN ADVISOR
              </button>
            </Link>
          </motion.div>

          <div className='border border-gray-200 rounded-lg p-6 shadow-sm'>
            <h1 className='text-3xl font-thin p-2 mb-6'>Client Success Stories</h1>
            <LoanTestimonials />
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className='bg-gray-50 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-thin text-center mb-12 text-brandsecondary'>
            Simple Application Process
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {processSteps.map((step) => {
              const Icon = lucideIconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  whileHover={{ y: -5 }}
                  className='bg-white p-6 rounded-lg shadow-sm text-center'
                >
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    {Icon && <Icon className='h-8 w-8 text-gold' />}
                  </div>
                  <h3 className='text-xl font-semibold mb-2'>{step.title}</h3>
                  <p className='text-gray-600'>{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className='bg-blue-50 p-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <Partners />
        </div>
      </div>
    </>
  );
};

export default Page;
