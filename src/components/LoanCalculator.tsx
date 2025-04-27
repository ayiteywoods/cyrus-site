'use client';

import { useState, useEffect } from 'react';
import { 
  CalculatorIcon,
  CurrencyDollarIcon,
  ScaleIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface LoanType {
  id: number;
  name: string;
  description: string;
  amountRange: string;
  interestRate: string;
  term: string;
  icon: string;
}

interface LoanCalculatorProps {
  selectedLoan?: LoanType | null;
}

const LoanCalculator = ({ selectedLoan }: LoanCalculatorProps) => {
  const [amount, setAmount] = useState<number>(selectedLoan?.amountRange ? parseInt(selectedLoan.amountRange.split(' - ')[0].replace('₵', '').replace(',', '')) : 5000);
  const [term, setTerm] = useState<number>(selectedLoan?.term ? parseInt(selectedLoan.term.split(' - ')[0]) : 12);
  const [interestRate, setInterestRate] = useState<number>(selectedLoan?.interestRate ? parseFloat(selectedLoan.interestRate.split('%')[0]) : 12);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  useEffect(() => {
    if (selectedLoan) {
      const minAmount = parseInt(selectedLoan.amountRange.split(' - ')[0].replace('₵', '').replace(',', ''));
      const minTerm = parseInt(selectedLoan.term.split(' - ')[0]);
      const minRate = parseFloat(selectedLoan.interestRate.split('%')[0]);
      
      setAmount(minAmount);
      setTerm(minTerm);
      setInterestRate(minRate);
    }
  }, [selectedLoan]);

  useEffect(() => {
    const monthlyRate = interestRate / 100 / 12;
    const payments = term;
    const x = Math.pow(1 + monthlyRate, payments);
    const monthly = (amount * monthlyRate * x) / (x - 1);
    
    if (!isNaN(monthly) && isFinite(monthly)) {
      setMonthlyPayment(parseFloat(monthly.toFixed(2)));
      setTotalInterest(parseFloat((monthly * payments - amount).toFixed(2)));
    }
  }, [amount, term, interestRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <CalculatorIcon className="h-6 w-6 text-blue-600" />
        Loan Calculator
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Loan Amount (₵)
          </label>
          <div className="flex items-center">
            <input
              type="range"
              min="1000"
              max="1000000"
              step="1000"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
            />
            <span className="ml-4 w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-right">
              ₵{amount.toLocaleString()}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Loan Term (months)
          </label>
          <div className="flex items-center">
            <input
              type="range"
              min="3"
              max="60"
              step="1"
              value={term}
              onChange={(e) => setTerm(parseInt(e.target.value))}
              className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
            />
            <span className="ml-4 w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-right">
              {term}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Interest Rate (% p.a.)
          </label>
          <div className="flex items-center">
            <input
              type="range"
              min="5"
              max="30"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
            />
            <span className="ml-4 w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-right">
              {interestRate}%
            </span>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <CurrencyDollarIcon className="h-4 w-4" />
                Monthly Payment
              </p>
              <p className="text-xl font-semibold">{formatCurrency(monthlyPayment)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <ScaleIcon className="h-4 w-4" />
                Total Interest
              </p>
              <p className="text-xl font-semibold">{formatCurrency(totalInterest)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <CurrencyDollarIcon className="h-4 w-4" />
                Total Payment
              </p>
              <p className="text-xl font-semibold">{formatCurrency(monthlyPayment * term)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <ClockIcon className="h-4 w-4" />
                Loan Term
              </p>
              <p className="text-xl font-semibold">{term} months</p>
            </div>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          APPLY FOR THIS LOAN
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default LoanCalculator;