// components/HeroSlider.tsx
'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Slide = {
  id: number
  image: string
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slides: Slide[] = [
    {
      id: 1,
      image: '/Sl1.png',
      title: 'Simplified Lending',
      subtitle: 'Access your accounts anytime, anywhere with our secure platform',
      ctaText: 'Get Started',
      ctaLink: '/loans'
    },
    {
      id: 2,
      image: '/Sl2.png',
      title: 'Personal Loans',
      subtitle: 'Competitive rates for all your financial needs',
      ctaText: 'Apply Now',
      ctaLink: '/loans'
    },
    {
      id: 3,
      image: '/Sl3.png',
      title: 'Business Loan Solution',
      subtitle: 'Tailored Loans for your business growth',
      ctaText: 'Explore',
      ctaLink: '/services'
    },
    {
        id: 4,
        image: '/Sl4.png',
        title: 'Convenience, Product Affordability, Ease of Service',
        subtitle: 'Finance solutions designed with you in mind',
        ctaText: 'Explore',
        ctaLink: '/services'
      }
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentSlide, isPaused, nextSlide])

  return (
    <div 
      className="relative h-[80vh] max-h-[600px] w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center text-white">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-fadeIn delay-100">
                  {slide.subtitle}
                </p>
                <a
                  href={slide.ctaLink}
                  className="inline-block bg-brandsecondary hover:bg-blue-900 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 animate-fadeIn delay-200"
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-3 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-3 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
        <div className="flex space-x-2 p-1.5 bg-black opacity-50 rounded-lg">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}