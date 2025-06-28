"use client";
import React from "react";
import PageTitle from "../title/PageTitle";
import PackageCard from "../package-card/PackageCard";

const PopularPackage = () => {
  return (
    <div className="text-center mt-10 mb-20">
      <div>
        <PageTitle
          title={"Popular Package"}
          description={"The most popular tour package presented to you"}
        />
      </div>
      <div className="mb-10">
        <PackageCard />
      </div>
      <div>
        <button className="btn btn-primary rounded-2xl bg-red-500 border-none">
          Explore more
        </button>
      </div>
    </div>
  );
};

export default PopularPackage;
