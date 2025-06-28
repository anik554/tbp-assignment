'use client';
import React from "react";
import HeroImage from "@/images/hero_image1.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <main className="relative h-[75vh] w-full">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={HeroImage}
          alt="Travel Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Page Content */}
      <div className="relative z-10 container mx-auto max-w-10/12 pt-10">
        <h2 className="text-white text-center text-7xl font-bold mt-20 mb-5">
          Explore The World Around You
        </h2>
        <p className="text-white text-center text-3xl mb-5">
          Take a break from the stress of everyday life. plan trips and explore
        </p>
        <p className="text-white  text-center text-3xl">your favorite destinations</p>
      </div>
    </main>
  );
};

export default Hero;
