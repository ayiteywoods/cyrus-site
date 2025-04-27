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
    icon: <Search className="w-8 h-8 md:w-12 md:h-12" />,
    bgColor: 'bg-blue-100 hover:bg-blue-300',
    textColor: 'text-blue-800 hover:text-white',
  },
  {
    id: 2,
    header: 'Registration of Applicants',
    content:
      'The applicants are then registered after they pass the screening stage. The details taken include names, gender, business location, residential address, occupation type, phone number, and name of spouse or next of kin.',
    icon: <ClipboardEdit className="w-8 h-8 md:w-12 md:h-12" />,
    bgColor: 'bg-green-100 hover:bg-blue-300',
    textColor: 'text-green-800 hover:text-white',
  },
  {
    id: 3,
    header: 'Credit Risk Analysis',
    content:
      'Loan documentation is generated largely by the Loans and Operations managers through visits to the borrowers business and home. Directions to the residences are also drawn up for verification.',
    icon: <FileSearch className="w-8 h-8 md:w-12 md:h-12" />,
    bgColor: 'bg-purple-100 hover:bg-blue-300',
    textColor: 'text-purple-800 hover:text-white',
  },
  {
    id: 4,
    header: 'Credit Approval',
    content:
      'CYRUS has a highly decentralized process; hence credit approval by the field-level staff depends heavily on the skill and integrity of loan officers and managers for accurate and timely information.',
    icon: <CheckCircle className="w-8 h-8 md:w-12 md:h-12" />,
    bgColor: 'bg-amber-100 hover:bg-blue-300',
    textColor: 'text-amber-800 hover:text-white',
  },
  {
    id: 5,
    header: 'Training',
    content:
      'Applicants whose loans have been approved are then trained in Basic Financial Management. They are trained to distinguish between working capital and profit, in basic customer service, and to inculcate in them the habit of savings.',
    icon: <GraduationCap className="w-8 h-8 md:w-12 md:h-12" />,
    bgColor: 'bg-red-100 hover:bg-blue-300',
    textColor: 'text-red-800 hover:text-white',
  },

];

export default function VerticalSwiper() {
  const [index, setIndex] = useState(0);
  const startY = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use dynamic card height based on screen size
  const [cardHeight, setCardHeight] = useState(384);

  useEffect(() => {
    const updateCardHeight = () => {
      if (window.innerWidth < 768) {
        setCardHeight(420); // Taller cards on mobile to accommodate text
      } else {
        setCardHeight(384); // Original height on desktop
      }
    };

    updateCardHeight();
    window.addEventListener('resize', updateCardHeight);
    return () => window.removeEventListener('resize', updateCardHeight);
  }, []);

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
    <div className="w-full px-4 md:max-w-2xl md:mx-auto">
      <div
        ref={containerRef}
        className="relative w-full h-[420px] md:h-96 overflow-hidden rounded-xl md:rounded-tr-2xl md:rounded-br-2xl shadow-xl"
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
              className={`h-[420px] md:h-96 flex flex-col items-center justify-center p-6 md:p-8 ${card.bgColor} ${card.textColor}`}
            >
              <div
                className={`p-3 md:p-4 rounded-full ${card.textColor.replace(
                  'text',
                  'bg'
                )} bg-opacity-20 mb-4`}
              >
                {card.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-thin mb-4 text-center">
                {card.header}
              </h3>
              <p className="text-sm md:text-lg text-center max-w-md">
                {card.content}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mobile indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 md:hidden">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}