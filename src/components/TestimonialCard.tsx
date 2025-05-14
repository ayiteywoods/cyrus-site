// components/TestimonialCard.tsx
'use client'; // Needed if used in Next.js App Router

import React, { useState } from 'react';

type Testimonial = {
  name: string;
  role: string;
  message: string;
  image: string;
  link: string; // YouTube video link
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [isOpen, setIsOpen] = useState(false);

  const extractYouTubeID = (url: string) => {
    const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  };

  const videoId = extractYouTubeID(testimonial.link);

  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-6 text-center max-w-sm mx-auto h-full flex flex-col justify-between">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
          <p className="text-gray-700 text-sm mb-4">{testimonial.message}</p>
          <button
            onClick={() => setIsOpen(true)}
            className="text-gold hover:underline text-sm font-medium"
          >
            View Testimonial
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-4 w-full max-w-xl relative">
            <button
              className="absolute top-2 right-3 text-xl font-bold text-black"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialCard;
