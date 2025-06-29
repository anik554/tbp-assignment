"use client";
import { ISearchData } from "@/interfaces/home-page-types";
import { searchFlights } from "@/lib/services/searchFlightService";
import { touristLocations } from "@/utils/data-utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import moment from "moment";
import { useSearch } from "@/context/SearchContext";
import toast from "react-hot-toast";

const SearchBar = () => {
  const router = useRouter();
  const { setSearchResult } = useSearch();
  const [searchData, setSearchData] = useState<ISearchData>({
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    passenger: {
      adult: 1,
      children: 0,
      infant: 0,
    },
  });

  console.log(searchData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDecement = (params: string, actionType: string) => {
    setSearchData((prev) => {
      let updatedAdult = prev.passenger.adult;
      let updatedChildren = prev.passenger.children;
      let updatedInfant = prev.passenger.infant;
      if (params === "adults") {
        if (actionType === "decrement" && updatedAdult > 1) {
          updatedAdult -= 1;
        } else if (actionType === "increment") {
          updatedAdult += 1;
        }
      }
      if (params === "children") {
        if (actionType === "decrement" && updatedChildren > 0) {
          updatedChildren -= 1;
        } else if (actionType === "increment") {
          updatedChildren += 1;
        }
      }
      if (params === "infant") {
        if (actionType === "decrement" && updatedInfant > 0) {
          updatedInfant -= 1;
        } else if (actionType === "increment") {
          updatedInfant += 1;
        }
      }
      return {
        ...prev,
        passenger: {
          ...prev.passenger,
          adult: updatedAdult,
          children: updatedChildren,
          infant: updatedInfant,
        },
      };
    });
  };

  const handleSearch = async () => {
    try {
      const payload: ISearchData = {
        origin: searchData.origin,
        destination: searchData.destination,
        departureDate: moment(searchData.departureDate).format("DD MMM YYYY"),
        returnDate: moment(searchData.returnDate).format("DD MMM YYYY"),
        passenger: {
          adult: searchData.passenger.adult,
          children: searchData.passenger.children,
          infant: searchData.passenger.infant,
        },
      };

      const query = new URLSearchParams({
        origin: payload.origin,
        destination: payload.destination,
        departureDate: payload.departureDate,
        returnDate: payload.returnDate,
        adult: String(payload.passenger.adult),
        children: String(payload.passenger.children),
        infant: String(payload.passenger.infant),
      }).toString();

      const response = await searchFlights(payload);
      
      if (response?.data.length > 0 && response.status_code === 200) {
        setSearchResult(response.data);
        toast.success(response.message);
        router.push(`/search?${query}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <div className="card w-9/12 mx-auto bg-base-100 card-lg shadow-sm -mt-20 z-20 relative">
        <div className="card-body">
          <h2 className="card-title text-gray-400">Your Location</h2>

          <div className="form-control relative pb-2">
            <div className="relative">
              <input
                type="search"
                onChange={handleInputChange}
                name="origin"
                value={searchData.origin}
                placeholder="Search Destinations, Hotels, Activities.."
                className="input  w-full px-1 !ring-0 border-t-0 border-r-0 border-l-0 border-b-2 focus:border-indigo-200 focus:outline-hidden rounded-none text-lg grow"
              />
              <kbd className="kbd kbd-sm absolute right-1 bottom-2 focus:outline-accent">
                ➡️
              </kbd>
            </div>
          </div>
          <section className="grid grid-cols-5 gap-2">
            <div className="w-full">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Location</legend>
                <select
                  defaultValue="Select Location"
                  className="select w-full"
                  name="destination"
                  onChange={handleInputChange}
                >
                  <option disabled value="Select Location">
                    Select Location
                  </option>
                  {touristLocations.map((location) => (
                    <option key={location.id} value={location.value}>
                      {location.value}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>
            <div className="w-full">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Check-In</legend>
                <input
                  type="date"
                  className="input"
                  name="departureDate"
                  onChange={handleInputChange}
                  value={searchData.departureDate}
                />
              </fieldset>
            </div>
            <div className="w-full">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Check-Out</legend>
                <input
                  type="date"
                  className="input"
                  name="returnDate"
                  onChange={handleInputChange}
                  value={searchData.returnDate}
                />
              </fieldset>
            </div>
            <div className="w-full">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Passengers</legend>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-md text-xs"
                  >
                    Choose Passengers
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 list rounded-box shadow-md z-1 w-96 p-2"
                  >
                    {/* Adults */}
                    <li className="list-row items-center">
                      <div className="flex-1 !bg-transparent hover:!bg-transparent">
                        <div className="font-semibold">Adults</div>
                        <div className="text-xs opacity-60">
                          12 years and above
                        </div>
                      </div>
                      <div className="flex items-center gap-2 justify-end !bg-transparent hover:!bg-transparent">
                        <button
                          className="btn btn-circle btn-sm"
                          onClick={() => handleDecement("adults", "decrement")}
                        >
                          <svg
                            className="size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path fill="currentColor" d="M19 13H5v-2h14v2z" />
                          </svg>
                        </button>
                        <span className="w-6 text-center">
                          {searchData.passenger.adult}
                        </span>
                        <button
                          className="btn btn-circle btn-sm"
                          onClick={() => handleDecement("adults", "increment")}
                        >
                          <svg
                            className="size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>

                    {/* Children */}
                    <li className="list-row items-center">
                      <div className="flex-1 !bg-transparent hover:!bg-transparent">
                        <div className="font-semibold">Children</div>
                        <div className="text-xs opacity-60">2-11 years</div>
                      </div>
                      <div className="flex items-center gap-2 justify-end !bg-transparent hover:!bg-transparent">
                        <button
                          className="btn btn-circle btn-sm"
                          onClick={() =>
                            handleDecement("children", "decrement")
                          }
                        >
                          <svg
                            className="size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path fill="currentColor" d="M19 13H5v-2h14v2z" />
                          </svg>
                        </button>
                        <span className="w-6 text-center">
                          {searchData.passenger.children}
                        </span>
                        <button
                          className="btn btn-circle btn-sm"
                          onClick={() =>
                            handleDecement("children", "increment")
                          }
                        >
                          <svg
                            className="size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>

                    {/* Infant */}
                    <li className="list-row items-center">
                      <div className="flex-1 !bg-transparent hover:!bg-transparent">
                        <div className="font-semibold">Infant</div>
                        <div className="text-xs opacity-60">Below 2 years</div>
                      </div>
                      <div className="flex items-center gap-2 justify-end !bg-transparent hover:!bg-transparent">
                        <button
                          className="btn btn-circle btn-sm"
                          onClick={() => handleDecement("infant", "decrement")}
                        >
                          <svg
                            className="size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path fill="currentColor" d="M19 13H5v-2h14v2z" />
                          </svg>
                        </button>
                        <span className="w-6 text-center">
                          {searchData.passenger.infant}
                        </span>
                        <button
                          className="btn btn-circle btn-sm"
                          onClick={() => handleDecement("infant", "increment")}
                        >
                          <svg
                            className="size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>

                    {/* Class */}
                    {/* <li className="list-row items-center">
                      <div className="flex-1">
                        <div className="font-semibold">Class</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-2">
                          <button className="btn btn-sm btn-active">
                            Economy
                          </button>
                          <button className="btn btn-sm btn-ghost">
                            Business
                          </button>
                        </div>
                      </div>
                    </li> */}

                    {/* Done button */}
                    <li className="list-row justify-end mt-2">
                      <button className="btn btn-primary btn-sm">Done</button>
                    </li>
                  </ul>
                </div>
              </fieldset>
            </div>
            <div className="justify-end card-actions mt-8 w-full">
              <button
                className="btn btn-primary w-full rounded-2xl bg-red-500 border-none text-white"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </section>
          {/* <div className="justify-end card-actions">
            <button className="btn btn-primary rounded-2xl bg-red-500 border-none text-white">
              Search
            </button>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default SearchBar;
