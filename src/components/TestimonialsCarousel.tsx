'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: 'Janet Ansah',
    role: 'Entrepreneur',
    message: 'CYRUS transformed my business with their support!',
    image: '/mariam.avif',
    link: 'https://www.youtube.com/watch?v=jirqlGnx9EM',
  },
  {
    id: 2,
    name: 'Joanah  Amoah',
    role: 'Farmer',
    message: 'Thanks to CYRUS, I expanded my farm operations.',
    image: '/roberta.avif',
    link: 'https://www.youtube.com/watch?v=jirqlGnx9EM',
  },
  {
    id: 3,
    name: 'Sarah Aryee',
    role: 'Petty Trader',
    message: 'With CYRUS, I got the loan I needed to grow my stall.',
    image: '/mia.avif',
    link: 'https://www.youtube.com/watch?v=jirqlGnx9EM',
  },
  {
    id: 4,
    name: 'Beauty Adjetey',
    role: 'Trader',
    message: 'Been in business with Cyrus for over fiftyeen years.',
    image: '/beauty.png',
    link: 'https://www.youtube.com/watch?v=47gHpOp03Fo',
  },
  {
    id: 5,
    name: 'Beatrice Abbey',
    role: 'Trader',
    message: 'Enjoyed Loans from Cyrus for over six years.',
    image: '/maab.png',
    link: 'https://www.youtube.com/watch?v=XpZ_hG1wI_c',
  },
];

export default function TestimonialsCarousel() {
  return (
    <div className="w-full px-4 py-4 relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 bg-gray-50 p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition">
        <ChevronLeft className="w-4 h-4 text-gray-700" />
      </button>
      <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 bg-gray-50 p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition">
        <ChevronRight className="w-4 h-4 text-gray-700" />
      </button>
    </div>
  );
}
