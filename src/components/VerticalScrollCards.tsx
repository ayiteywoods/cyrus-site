'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  ClipboardEdit,
  FileSearch,
  CheckCircle,
  GraduationCap,
} from 'lucide-react';

type CardItem = {
  id: number;
  header: string;
  content: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
};

const cards: CardItem[] = [
  {
    id: 1,
    header: 'Screening Processing',
    content:
      'The screening process ensures that the applicants are micro borrowers. CYRUS caters for low-income clients, both the underemployed and the entrepreneurs with an often informal family business (e.g., petty traders, vegetable farmers, etc.).',
    icon: <Search className="w-12 h-12" />,
    bgColor: 'bg-blue-100 hover:bg-blue-300',
    textColor: 'text-blue-800 hover:text-white',
  },
  {
    id: 2,
    header: 'Registration of Applicants',
    content:
      'The applicants are then registered after they pass the screening stage. The details taken include names, gender, business location, residential address, occupation type, phone number, and name of spouse or next of kin.',
    icon: <ClipboardEdit className="w-12 h-12" />,
    bgColor: 'bg-green-100 hover:bg-blue-300',
    textColor: 'text-green-800 hover:text-white',
  },
  {
    id: 3,
    header: 'Credit Risk Analysis',
    content:
      'Loan documentation is generated largely by the Loans and Operations managers through visits to the borrower’s business and home. Directions to the residences are also drawn up for verification.',
    icon: <FileSearch className="w-12 h-12" />,
    bgColor: 'bg-purple-100 hover:bg-blue-300',
    textColor: 'text-purple-800 hover:text-white',
  },
  {
    id: 4,
    header: 'Credit Approval',
    content:
      'CYRUS has a highly decentralized process; hence credit approval by the field-level staff depends heavily on the skill and integrity of loan officers and managers for accurate and timely information.',
    icon: <CheckCircle className="w-12 h-12" />,
    bgColor: 'bg-amber-100 hover:bg-blue-300',
    textColor: 'text-amber-800 hover:text-white',
  },
  {
    id: 5,
    header: 'Training',
    content:
      'Applicants whose loans have been approved are then trained in Basic Financial Management. They are trained to distinguish between working capital and profit, in basic customer service, and to inculcate in them the habit of savings.',
    icon: <GraduationCap className="w-12 h-12" />,
    bgColor: 'bg-red-100 hover:bg-blue-300',
    textColor: 'text-red-800 hover:text-white',
  },
];

export default function VerticalSwiper() {
  const [index, setIndex] = useState(0);
  const startY = useRef<number | null>(null);
  const cardHeight = 384;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startY.current === null) return;
    const deltaY = startY.current - e.changedTouches[0].clientY;

    if (Math.abs(deltaY) > 50) {
      if (deltaY > 0) {
        setIndex((prev) => (prev + 1) % cards.length);
      } else {
        setIndex((prev) => (prev - 1 + cards.length) % cards.length);
      }
    }

    startY.current = null;
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div
        className="relative h-85 overflow-hidden rounded-tr-2xl rounded-br-2xl shadow-xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="transition-transform duration-700 ease-in-out"
          style={{
            height: `${cards.length * cardHeight}px`,
            transform: `translateY(-${index * cardHeight}px)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`h-96 flex flex-col items-center justify-center p-8 ${card.bgColor} ${card.textColor}`}
            >
              <div
                className={`p-4 rounded-full ${card.textColor.replace(
                  'text',
                  'bg'
                )} bg-opacity-20 mb-6`}
              >
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                {card.header}
              </h3>
              <p className="text-lg text-center max-w-md">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
