"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function LightArcImages() {
  const image1 = process.env.NEXT_PUBLIC_FRONT_DOMAIN + "/images/1.png";

  const images = [
    {
      image: image1,
      title: "Message from the Captain of the Starship",
      description:
        "Led by our visionary founder Simo Berrada with over 25 years of cosmic experience in",
    },
    {
      image: image1,
      title: "Message 2",
      description: "Message 2 Description",
    },
    {
      image: image1,
      title: "Message 3",
      description: "Message 3 Description",
    },
    {
      image: image1,
      title: "Message 4",
      description: "Message 4 Description",
    },
    {
      image: image1,
      title: "Message 5",
      description: "Message 5 Description",
    },
    {
      image: image1,
      title: "Message 6",
      description: "Message 6 Description",
    },
    {
      image: image1,
      title: "Message 7",
      description: "Message 7 Description",
    },
  ];

  const imageSize = 150;
  const gap = 250;
  const arcHeight = -80;
  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 2));
  const [animate, setAnimate] = useState(false);

  const handlePrev = () => {
    setAnimate(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      setAnimate(true);
    }, 200);
  };

  const handleNext = () => {
    setAnimate(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      setAnimate(true);
    }, 200);
  };

  // Naya function for image click with animation
  const handleImageClick = (index) => {
    if (index === activeIndex) return; // Agar already active hai, kuch na karein
    setAnimate(false);
    setTimeout(() => {
      setActiveIndex(index);
      setAnimate(true);
    }, 200);
  };

  // Initial animate on mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <div className="relative w-full h-[400px] flex items-center justify-center bg-[#0b1c3f] overflow-hidden">
        <div className="relative" style={{ height: `${imageSize}px` }}>
          {images.map((src, index) => {
            const centerIndex = (images.length - 1) / 2;

            const offset = index - centerIndex;
            const x = offset * gap;
            const y =
              -Math.pow(offset, 2) * (arcHeight / Math.pow(centerIndex, 2));
            const rotate = offset * 10;

            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-300 cursor-pointer ${
                  isActive ? "z-50 scale-[1.15]" : "scale-100"
                }`}
                style={{
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rotate}deg)`,
                  zIndex: 100 - Math.abs(offset) + (isActive ? 10 : 0),
                  width: `${imageSize}px`,
                  height: `200px`,
                }}
                onClick={() => handleImageClick(index)}  // Yahan change kiya hai
              >
                <Image
                  src={src.image}
                  alt={`Image ${index}`}
                  width={212}
                  height={270}
                  className={`rounded-lg border-4 shadow-xl transition-all duration-300 ${
                    isActive ? "border-yellow-400" : "border-white"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Content Area with slide up transition */}
      <div className=" relative -top-20 w-full mt-4">
        <div className="flex justify-center items-center gap-10 text-white">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-white text-black rounded"
          >
            ←
          </button>
          <div
            className={`text-center max-w-xl transition-all duration-300 ease-in-out ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-xl font-bold mb-2">{images[activeIndex].title}</h3>
            <p>{images[activeIndex].description}</p>
          </div>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-white text-black rounded"
          >
            →
          </button>
        </div>
      </div>
    </>
  );
}
