"use client";

import React from "react";
import { useSearch } from "@/context/SearchContext";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const FlightList = () => {
  const searchParams = useSearchParams();
  const adult = Number(searchParams?.get("adult"))
  const children = Number(searchParams?.get("children"))
  const infant = Number(searchParams?.get("infant"))
  console.log({adult,children,infant})
  const { searchResult } = useSearch();
  const firstFiveResults = Array.isArray(searchResult)
    ? searchResult.slice(0, 5)
    : [];

  return (
    <div className="container mx-auto max-w-9/12 mt-12 pt-28 mb-12">
      <h2 className="text-2xl font-bold mb-4">Available Flights</h2>
      {firstFiveResults.map((result) => {
        const firstSegment = result.itin_details?.[0]?.flight_data?.[0];
        return (
          <div
            key={result.resultid}
            className="card w-full bg-base-100 card-sm shadow-sm mb-4"
          >
            <div className="card-body flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-4">
                {firstSegment?.air_logo && (
                  <Image
                    src={firstSegment.air_logo}
                    alt={firstSegment.airline_name}
                    width={50}
                    height={50}
                  />
                )}
                <div>
                  <p className="font-semibold text-lg">
                    {firstSegment?.airline_name} ({firstSegment?.flight_name})
                  </p>
                  <p className="text-sm text-gray-500">
                    {firstSegment?.origincode} → {firstSegment?.destinationcode}
                  </p>
                  <p className="text-sm text-gray-500">
                    Departure:{" "}
                    {new Date(firstSegment?.departuredate).toLocaleString()}
                    <br />
                    Arrival:{" "}
                    {new Date(firstSegment?.arrivaldate).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className="text-lg font-bold text-primary">
                  ৳ {result.price_info?.total}
                </p>
                <button className="btn btn-primary mt-2">Book Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FlightList;
