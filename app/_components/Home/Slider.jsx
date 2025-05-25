'use client';
import { useState } from 'react';
import Image from 'next/image';


const CustomSlider = () => {
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  const cards = [
    { id: 1, title: 'Smart SEO', image: domain+'/images/1.png' },
    { id: 2, title: 'Target Traffic', image: domain+'/images/1.png' },
    { id: 3, title: 'Keyword Power', image: domain+'/images/1.png' },
    { id: 4, title: 'Content Boost', image: domain+'/images/1.png' },
    { id: 5, title: 'Analytics', image: domain+'/images/1.png' },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // center index

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#0b1c3c] py-10 text-white">
    <div className="relative w-full h-[400px] flex items-center justify-center">
  {cards.map((card, index) => {
    const total = cards.length;
    const radius = 250; // distance from center (adjust as needed)
    const angle = (index - activeIndex) * (180 / (total - 1)); // spread over a semicircle

    const x = radius * Math.sin((angle * Math.PI) / 180);
    const y = radius * Math.cos((angle * Math.PI) / 180);

    const isActive = index === activeIndex;
    const scale = isActive ? 'scale-100' : 'scale-75 opacity-70';

    return (
      <div
        key={card.id}
        className={`absolute transition-all duration-500 ease-in-out ${scale}`}
        style={{
          transform: `translate(${x}px, ${-y}px) rotate(${angle}deg)`,
          zIndex: isActive ? 50 : 30,
        }}
      >
        <div className="bg-white rounded-xl shadow-lg w-64 h-80 text-black overflow-hidden">
          <Image src={card.image} alt={card.title} width={256} height={160} />
          <div className="p-4 font-bold text-center">{card.title}</div>
        </div>
      </div>
    );
  })}
</div>


      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6 space-x-6">
        <button
          onClick={prevSlide}
          className="px-4 py-2 rounded-full bg-white text-black font-bold"
        >
          ‹ Prev
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 rounded-full bg-white text-black font-bold"
        >
          Next ›
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
