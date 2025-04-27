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
    name: 'Jane Doe',
    role: 'Entrepreneur',
    message: 'CYRUS transformed my business with their support!',
    image: '/mariam.avif',
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Farmer',
    message: 'Thanks to CYRUS, I expanded my farm operations.',
    image: '/roberta.avif',
  },
  {
    id: 3,
    name: 'Sarah Lee',
    role: 'Petty Trader',
    message: 'With CYRUS, I got the loan I needed to grow my stall.',
    image: '/mia.avif',
  },
  {
    id: 4,
    name: 'Ahmed Musa',
    role: 'Fisherman',
    message: 'The training helped me better manage my income.',
    image: '/person.avif',
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
