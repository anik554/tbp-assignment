import React from "react";
import HeroImage from "@/images/hero_image.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <main className="relative h-screen w-full">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0 h-9/12 w-full">
        <Image
          src={HeroImage}
          alt="Travel Background"
          fill
          priority
          className="object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Page Content */}
      <div className="relative z-10 container mx-auto max-w-10/12 pt-10">
        <h2 className="text-white text-center text-4xl font-bold mt-20">Explore The World Around You</h2>
        <p className="text-white text-center">Take a break from the stress of everyday life. plan trips and explore</p>
        <p className="text-white  text-center">your favorite destinations</p>
      </div>
    </main>
  );
};

export default Hero;
