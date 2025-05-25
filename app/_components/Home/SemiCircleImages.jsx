"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function LightArcImages() {
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  const NextUrl = domain + "/images/Next.png";
  const PrevUrl = domain + "/images/prev.png";
  const image0 = domain + "/images/0.png";
  const image1 = domain + "/images/1.png";
  const image2 = domain + "/images/2.png";
  const image3 = domain + "/images/3.png";
   const image4 = domain + "/images/4.png";
    const image5 = domain + "/images/5.png";
    const image6 = domain + "/images/6.png";


 const images = [
//     {
//       image: image0,
//       title: `1 - Message from the Captain of the Starship`,
//       description1:
//       `Led by our visionary founder, Simo Berrada, with over 25 years of cosmic experience in the UAE market, we're fueled by a 
// 	  passion for innovation and driven by a singular mission: to help businesses like yours ascend to cosmic greatness.`,
//       description2:
//       `Thank you for considering SMB DigitalZone for your digital odyssey.
// We're thrilled to embark on this cosmic journey with you and guide your business toward the stars.`,
//       description3:
//       `Contact us today to learn more about our services and how we can help you reach your objectives.
// Unlock the full potential of your online presence with SMB DigitalZone, your cosmic companion in the digital universe.`,
//     },
    
   {
      image: image1,
      title: `2 - Message from the Captain of the Starship`,
      description1:
      `Led by our visionary founder, Simo Berrada, with over 25 years of cosmic experience in the UAE market, we're fueled by a 
	  passion for innovation and driven by a singular mission: to help businesses like yours ascend to cosmic greatness.`,
      description2:
      `Thank you for considering SMB DigitalZone for your digital odyssey.
We're thrilled to embark on this cosmic journey with you and guide your business toward the stars.`,
      description3:
      `Contact us today to learn more about our services and how we can help you reach your objectives.
Unlock the full potential of your online presence with SMB DigitalZone, your cosmic companion in the digital universe.`,
    },
 {
      image: image2,
      title: `3 - Message from the Captain of the Starship`,
      description1:
      `Led by our visionary founder, Simo Berrada, with over 25 years of cosmic experience in the UAE market, we're fueled by a 
	  passion for innovation and driven by a singular mission: to help businesses like yours ascend to cosmic greatness.`,
      description2:
      `Thank you for considering SMB DigitalZone for your digital odyssey.
We're thrilled to embark on this cosmic journey with you and guide your business toward the stars.`,
      description3:
      `Contact us today to learn more about our services and how we can help you reach your objectives.
Unlock the full potential of your online presence with SMB DigitalZone, your cosmic companion in the digital universe.`,
    },
 {
      image: image3,
      title: `4 - Message from the Captain of the Starship`,
      description1:
      `Led by our visionary founder, Simo Berrada, with over 25 years of cosmic experience in the UAE market, we're fueled by a 
	  passion for innovation and driven by a singular mission: to help businesses like yours ascend to cosmic greatness.`,
      description2:
      `Thank you for considering SMB DigitalZone for your digital odyssey.
We're thrilled to embark on this cosmic journey with you and guide your business toward the stars.`,
      description3:
      `Contact us today to learn more about our services and how we can help you reach your objectives.
Unlock the full potential of your online presence with SMB DigitalZone, your cosmic companion in the digital universe.`,
    },
     {
      image: image4,
      title: `5 - Message from the Captain of the Starship`,
      description1:
      `Led by our visionary founder, Simo Berrada, with over 25 years of cosmic experience in the UAE market, we're fueled by a 
	  passion for innovation and driven by a singular mission: to help businesses like yours ascend to cosmic greatness.`,
      description2:
      `Thank you for considering SMB DigitalZone for your digital odyssey.
We're thrilled to embark on this cosmic journey with you and guide your business toward the stars.`,
      description3:
      `Contact us today to learn more about our services and how we can help you reach your objectives.
Unlock the full potential of your online presence with SMB DigitalZone, your cosmic companion in the digital universe.`,
    },
     {
      image: image5,
      title: `Message from the Captain of the Starship`,
      description1:
      `Led by our visionary founder, Simo Berrada, with over 25 years of cosmic experience in the UAE market, we're fueled by a 
	  passion for innovation and driven by a singular mission: to help businesses like yours ascend to cosmic greatness.`,
      description2:
      `Thank you for considering SMB DigitalZone for your digital odyssey.
We're thrilled to embark on this cosmic journey with you and guide your business toward the stars.`,
      description3:
      `Contact us today to learn more about our services and how we can help you reach your objectives.
Unlock the full potential of your online presence with SMB DigitalZone, your cosmic companion in the digital universe.`,
    },
//          {
//       image: image6,
//       title: `Message from the Captain of the Starship`,
//       description1:
//       `Led by our visionary founder, Simo Berrada, with over 25 years of cosmic experience in the UAE market, we're fueled by a 
// 	  passion for innovation and driven by a singular mission: to help businesses like yours ascend to cosmic greatness.`,
//       description2:
//       `Thank you for considering SMB DigitalZone for your digital odyssey.
// We're thrilled to embark on this cosmic journey with you and guide your business toward the stars.`,
//       description3:
//       `Contact us today to learn more about our services and how we can help you reach your objectives.
// Unlock the full potential of your online presence with SMB DigitalZone, your cosmic companion in the digital universe.`,
//     },
 
  ];



  const imageSize = 180
  const gap = 200;
  const arcHeight = -150;
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
      <div className="relative w-full h-[300px] flex items-center justify-center bg-[#0F172A]">  <div className="relative" style={{ height: `${imageSize}px` }}>
          {images.map((src, index) => {
            const centerIndex = (images.length - 1) / 2;

            const offset = index - centerIndex;
            const x = offset * gap;
            const y =
              -Math.pow(offset, 2) * (arcHeight / Math.pow(centerIndex, 2));
            const rotate = offset * 8;

            const isActive = index === activeIndex;

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
                onClick={() => handleImageClick(index)}  // Yahan change kiya hai
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
      <div className=" relative -top-2 w-full mt-16 ">
        <div className="flex justify-center w-[100%] items-center gap-10 text-white">
          <button
            onClick={handlePrev}
            className="py-2 bg-[#0F172A] w-[15%]  text-black rounded cursor-pointer flex justify-end "
          >
          <Image src={`${PrevUrl}`} width={60} height={60} alt="image" className="" />
          </button>
          <div
            className={`text-center   w-[50%] transition-all duration-300 ease-in-out ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-[27px] w-[100%] mx-auto font-semibold mb-5 ">{images[activeIndex].title}</h3>
           <div className="text-[16px] flex flex-col gap-4"> <p>{images[activeIndex].description1}</p>
            <p>{images[activeIndex].description2}</p>
            <p>{images[activeIndex].description3}</p>
            </div>
          </div>
          <button
            onClick={handleNext}
            className=" py-2 bg-[#0F172A] text-black rounded cursor-pointer w-[15%] flex justify-start "
          >
          <Image src={`${NextUrl}`} width={60} height={60} alt="image" />
          </button>
        </div>
      </div>
    </>
  );
}
