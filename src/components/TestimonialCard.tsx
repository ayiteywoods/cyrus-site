// components/TestimonialCard.tsx
import Link from 'next/link';
import React from 'react';

type Testimonial = {
  name: string;
  role: string;
  message: string;
  image: string;
  link: string;
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center max-w-sm mx-auto h-full flex flex-col justify-between">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
        <p className="text-gray-700 text-sm">{testimonial.message}</p>
        <Link href={testimonial.link} className="text-gray-700 text-sm" />
      </div>
    </div>
  );
};

export default TestimonialCard;
