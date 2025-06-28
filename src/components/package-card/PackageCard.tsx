"use client";
import Image from "next/image";
import React from "react";
import BaliImage from "@/images/bali-indonesia.jpg";
const PackageCard = () => {
  return (
    <div className="my-10">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="rounded-2xl">
          <Image src={BaliImage} alt="Shoes" className="w-full h-full text-white" />
        </figure>
        <div className="-mt-20 text-white">
            <h2 className="text-3xl">Bali, Indonesia</h2>
            <p className="text-xl">3 Days 2 Night</p>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
