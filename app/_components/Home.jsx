'use client'
import React from "react";



export default function HomeCustom() {
  const radius = 260; // radius of the arc

  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  const images = [
  "http://localhost:3000/images/1.png",
  "http://localhost:3000/images/2.png",
  "http://localhost:3000/images/3.png",
  "http://localhost:3000/images/4.png",
  "http://localhost:3000/images/5.png",
];

  return (
   <div className="relative w-[300px] h-[180px] mx-auto mt-10">
      {images.map((src, index) => {
        const angle = (index - 2) * 25; // center at index 2, spread left/right
        const radius = 120;
        const x = radius * Math.cos((angle * Math.PI) / 90);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="absolute w-16 h-16 rounded-full object-cover transition-transform hover:scale-110 shadow-lg"
            style={{
              left: `calc(50% + ${x}px - 32px)`,
              top: `calc(50% - ${y}px - 32px)`,
            }}
          />
        );
      })}
    </div>

  );
}
