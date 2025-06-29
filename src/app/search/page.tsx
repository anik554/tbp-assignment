"use client"; // Needed for useSearchParams in App Router

import React from "react";
import { useSearchParams } from "next/navigation";

const FlightList = () => {
  const searchParams = useSearchParams();
  const rawData = searchParams.getAll("data");
  console.log(rawData)

//   const searchData = useMemo(() => {
//     try {
//       return rawData ? JSON.parse(decodeURIComponent(rawData)) : null;
//     } catch (error) {
//       console.error("Invalid data format in URL", error);
//       return null;
//     }
//   }, [rawData]);

  // Now it's a usable object

  return <div>page</div>;
};

export default FlightList;
