import { ISearchData } from "@/interfaces/home-page-types";

const BASE_URL = "https://api.tbp.travel/flights";

export const searchFlights = async (payload:ISearchData) => {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response) {
      console.log("Failed to search flights");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
