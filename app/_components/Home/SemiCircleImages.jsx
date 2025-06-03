"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function LightArcImages() {
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  const NextUrl = domain + "/images/Next.png";
  const PrevUrl = domain + "/images/prev.png";
  const image1 = domain + "/images/1.png";
  const image2 = domain + "/images/2.png";
  const image3 = domain + "/images/3.png";
  const image4 = domain + "/images/4.png";
  const image5 = domain + "/images/5.png";

  const initialImages = [
    {
      image: image1,
      title: `2 - Message from the Captain of the Starship`,
      description1: `Led by our visionary founder, Simo Berrada, with over 25 years of cosmic experience in the UAE market, we're fueled by a passion for innovation and driven by a singular mission: to help businesses like yours ascend to cosmic greatness.`,
      description2: `Thank you for considering SMB DigitalZone for your digital odyssey. We're thrilled to embark on this cosmic journey with you and guide your business toward the stars.`,
      description3: `Contact us today to learn more about our services and how we can help you reach your objectives. Unlock the full potential of your online presence with SMB DigitalZone, your cosmic companion in the digital universe.`,
    },
    {
      image: image2,
      title: `3 - Message from the Captain of the Starship`,
      description1: `Led by our visionary founder, Simo Berrada...`,
      description2: `Thank you for considering SMB DigitalZone...`,
      description3: `Contact us today to learn more...`,
    },
    {
      image: image3,
      title: `4 - Message from the Captain of the Starship`,
      description1: `Led by our visionary founder, Simo Berrada...`,
      description2: `Thank you for considering SMB DigitalZone...`,
      description3: `Contact us today to learn more...`,
    },
    {
      image: image4,
      title: `5 - Message from the Captain of the Starship`,
      description1: `Led by our visionary founder, Simo Berrada...`,
      description2: `Thank you for considering SMB DigitalZone...`,
      description3: `Contact us today to learn more...`,
    },
    {
      image: image5,
      title: `6 - Message from the Captain of the Starship`,
      description1: `Led by our visionary founder, Simo Berrada...`,
      description2: `Thank you for considering SMB DigitalZone...`,
      description3: `Contact us today to learn more...`,
    },
  ];

  const imageSize = 180;
  const gap = 200;
  const arcHeight = -150;

  const [imageList, setImageList] = useState(initialImages);
  const [animate, setAnimate] = useState(false);

  const centerIndex = Math.floor(initialImages.length / 2);

  const handlePrev = () => {
    setAnimate(false);
    setTimeout(() => {
      const first = imageList[0];
      const newList = [...imageList.slice(1), first];
      setImageList(newList);
      setAnimate(true);
    }, 200);
  };

  const handleNext = () => {
    setAnimate(false);
    setTimeout(() => {
      const last = imageList[imageList.length - 1];
      const newList = [last, ...imageList.slice(0, imageList.length - 1)];
      setImageList(newList);
      setAnimate(true);
    }, 200);
  };

  const handleImageClick = (index) => {
    if (index === centerIndex) return;
    const shift = index - centerIndex;
    setAnimate(false);
    setTimeout(() => {
      let rotated = [...imageList];
      if (shift > 0) {
        for (let i = 0; i < shift; i++) {
          const last = rotated.pop();
          rotated = [last, ...rotated];
        }
      } else {
        for (let i = 0; i < Math.abs(shift); i++) {
          const first = rotated.shift();
          rotated.push(first);
        }
      }
      setImageList(rotated);
      setAnimate(true);
    }, 200);
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <div className="relative w-full h-[300px] flex items-center justify-center bg-[#0F172A]">
        <div className="relative" style={{ height: `${imageSize}px` }}>
          {imageList.map((src, index) => {
            const offset = index - centerIndex;
            const x = offset * gap;
            const y =
              -Math.pow(offset, 2) *
              (arcHeight / Math.pow(centerIndex, 2));
            const rotate = offset * 8;
            const isActive = index === centerIndex;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-300 cursor-pointer z-50 ${
                  isActive ? "z-50 scale-[1]" : "scale-100"
                }`}
                style={{
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rotate}deg)`,
                  zIndex: 100 - Math.abs(offset) + (isActive ? 10 : 0),
                  width: `${imageSize}px`,
                  height: `200px`,
                }}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={src.image}
                  alt={`Image ${index}`}
                  width={212}
                  height={270}
                  className={`rounded-xl border-2 shadow-md transition-all duration-300 ${
                    isActive ? "border-[#FFA500]" : "border-none"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Content Area with slide up transition */}
      <div className="relative -top-2 w-full mt-16">
        <div className="flex justify-center w-full items-center gap-10 text-white">
          <button
            onClick={handlePrev}
            className="py-2 bg-[#0F172A] w-[15%] text-black rounded cursor-pointer flex justify-end"
          >
            <Image src={PrevUrl} width={60} height={60} alt="Prev" />
          </button>

          <div
            className={`text-center w-[50%] transition-all duration-300 ease-in-out ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-[27px] font-semibold mb-5">
              {imageList[centerIndex].title}
            </h3>
            <div className="text-[16px] flex flex-col gap-4">
              <p>{imageList[centerIndex].description1}</p>
              <p>{imageList[centerIndex].description2}</p>
              <p>{imageList[centerIndex].description3}</p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="py-2 bg-[#0F172A] text-black rounded cursor-pointer w-[15%] flex justify-start"
          >
            <Image src={NextUrl} width={60} height={60} alt="Next" />
          </button>
        </div>
      </div>
    </>
  );
}
