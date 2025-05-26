"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ArcImageSlider() {
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN || "";

  const imagesData = [
    {
      image: `${domain}/images/1.png`,
      title: `2 - Message from the Captain of the Starship`,
      description1: `Led by our visionary founder, Simo Berrada, with over 25 years of cosmic experience in the UAE market...`,
      description2: `Thank you for considering SMB DigitalZone for your digital odyssey...`,
      description3: `Contact us today to learn more about our services and how we can help you reach your objectives.`,
    },
    {
      image: `${domain}/images/2.png`,
      title: `3 - Message from the Captain of the Starship`,
      description1: `Led by our visionary founder, Simo Berrada...`,
      description2: `Thank you for considering SMB DigitalZone...`,
      description3: `Contact us today to learn more...`,
    },
    {
      image: `${domain}/images/3.png`,
      title: `4 - Message from the Captain of the Starship`,
      description1: `Led by our visionary founder, Simo Berrada...`,
      description2: `Thank you for considering SMB DigitalZone...`,
      description3: `Contact us today to learn more...`,
    },
    {
      image: `${domain}/images/4.png`,
      title: `5 - Message from the Captain of the Starship`,
      description1: `Led by our visionary founder, Simo Berrada...`,
      description2: `Thank you for considering SMB DigitalZone...`,
      description3: `Contact us today to learn more...`,
    },
    {
      image: `${domain}/images/5.png`,
      title: `6 - Message from the Captain of the Starship`,
      description1: `Led by our visionary founder, Simo Berrada...`,
      description2: `Thank you for considering SMB DigitalZone...`,
      description3: `Contact us today to learn more...`,
    },
    {
      image: `${domain}/images/6.png`,
      title: `6 - Message from the Captain of the Starship`,
      description1: `Led by our visionary founder, Simo Berrada...`,
      description2: `Thank you for considering SMB DigitalZone...`,
      description3: `Contact us today to learn more...`,
    },
    {
      image: `${domain}/images/7.png`,
      title: `6 - Message from the Captain of the Starship`,
      description1: `Led by our visionary founder, Simo Berrada...`,
      description2: `Thank you for considering SMB DigitalZone...`,
      description3: `Contact us today to learn more...`,
    },
  ];

  const [images, setImages] = useState(imagesData);
  const [centerIndex] = useState(Math.floor(imagesData.length / 2));

  const imageSize = 180;
  const gap = 220;
  const arcHeight = -150;

  const handlePrev = () => {
    const first = images[0];
    setImages([...images.slice(1), first]);
  };

  const handleNext = () => {
    const last = images[images.length - 1];
    setImages([last, ...images.slice(0, images.length - 1)]);
  };

  const handleImageClick = (index) => {
    if (index === centerIndex) return;
    let newImages = [...images];
    const shiftCount = index - centerIndex;

    if (shiftCount > 0) {
      for (let i = 0; i < shiftCount; i++) {
        const last = newImages.pop();
        newImages.unshift(last);
      }
    } else {
      for (let i = 0; i < Math.abs(shiftCount); i++) {
        const first = newImages.shift();
        newImages.push(first);
      }
    }
    setImages(newImages);
  };

  return (
    <div className="relative w-full h-[650px] overflow-hidden border-red-800 border">
      {/* Arc Images Layer */}
      <div className="absolute -top-30 left-0 w-full h-full z-10 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-[300px]">
          {images.map((img, index) => {
            const offset = index - centerIndex;
            const x = offset * gap;
            const y = -Math.pow(offset, 2) * (arcHeight / Math.pow(centerIndex, 2));
            const rotate = offset * 6;
            const isCenter = index === centerIndex;

            return (
              <motion.div
                key={img.image + index}
                className={`absolute ${isCenter ? "z-50" : "z-30"} cursor-pointer pointer-events-auto`}
                onClick={() => handleImageClick(index)}
                style={{
                  left: "50%",
                  top: "50%",
                  width: imageSize,
                  height: 270,
                  borderRadius: "12px",
                  boxShadow: isCenter ? "0 10px 20px rgba(255,165,0,0.7)" : "none",
                  border: isCenter ? "3px solid #FFA500" : "2px solid transparent",
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                animate={{
                  x,
                  y,
                  rotate,
                  scale: 1,
                }}
                transition={{
                  type: "tween",
                  ease: "easeOut",
                  duration: 1.5,
                }}
              >
                <Image
                  src={img.image}
                  alt={img.title}
                  width={212}
                  height={270}
                  className="rounded-xl"
                  draggable={false}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Text + Controls */}
      <div className="relative z-20 mt-[460px] flex justify-center items-center gap-9  text-white">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="p-2 bg-[#0F172A] rounded hover:bg-gray-700 transition"
          aria-label="Previous"
        >
          <Image src={`${domain}/images/prev.png`} width={50} height={50} alt="Prev" />
        </button>

        {/* Description */}
        <div className="max-w-xl text-center">
          <h2 className="text-2xl font-semibold mb-3">{images[centerIndex].title}</h2>
          <p className="mb-2">{images[centerIndex].description1}</p>
          <p className="mb-2">{images[centerIndex].description2}</p>
          <p>{images[centerIndex].description3}</p>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-2 bg-[#0F172A] rounded hover:bg-gray-700 transition"
          aria-label="Next"
        >
          <Image src={`${domain}/images/Next.png`} width={50} height={50} alt="Next" />
        </button>
      </div>
    </div>
  );
}
