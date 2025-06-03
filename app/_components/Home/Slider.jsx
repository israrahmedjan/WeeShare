'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Ali Khan',
    role: 'CEO, ABC Ltd.',
    message: 'Israr did an amazing job with our website. Highly recommended!',
  },
  {
    name: 'Sara Ahmed',
    role: 'Manager, XYZ Corp.',
    message: 'The design and speed are top-notch. Great work!',
  },
  {
    name: 'John Doe',
    role: 'Freelancer',
    message: 'Very professional and easy to work with. Will hire again!',
  },
  {
    name: 'Ayesha Malik',
    role: 'CTO, FutureTech',
    message: 'Clean code and fast delivery. Loved working with him.',
  },
  {
    name: 'Bilal Khan',
    role: 'Founder, StartupX',
    message: 'Exceptional attention to detail and great design sense.',
  },
  {
    name: 'Mehwish Rehman',
    role: 'Marketing Head, Brandify',
    message: 'Superb communication and output. Highly impressed!',
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // for animation direction

  const ITEMS_PER_PAGE = 3;
  const totalSlides = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? (totalSlides - 1) * ITEMS_PER_PAGE : prev - ITEMS_PER_PAGE));
  };

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + ITEMS_PER_PAGE) % testimonials.length);
  };

  const visibleTestimonials = testimonials.slice(index, index + ITEMS_PER_PAGE);

  return (
    <div className="max-w-6xl mx-auto py-10 text-center rightMove">
      <h2 className="text-3xl font-bold mb-10 text-white">What Our Clients Say</h2>

      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 absolute w-full"
          >
            {visibleTestimonials.map((testimonial, i) => (
              <div key={i} className="bg-white shadow-xl rounded-xl p-6">
                <p className="text-gray-700 italic mb-4">&quot;{testimonial.message}&quot;</p>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows Below */}
      <div className="flex justify-center items-center mt-0 gap-4">
        <button
          onClick={prevSlide}
          className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
