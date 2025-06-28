"use client";
import { touristLocations } from "@/utils/data-utils";
import React from "react";

const SearchBar = () => {
  return (
    <main>
      <div className="card w-9/12 mx-auto bg-base-100 card-lg shadow-sm -mt-20 z-20 relative">
        <div className="card-body">
          <h2 className="card-title text-gray-400">Your Location</h2>

          <div className="form-control relative pb-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Destinations, Hotels, Activities.."
                className="input  w-full px-1 !ring-0 border-t-0 border-r-0 border-l-0 border-b-2 focus:border-indigo-200 focus:outline-hidden rounded-none text-lg grow"
              />
              <kbd className="kbd kbd-sm absolute right-1 bottom-2 focus:outline-accent">
                ➡️
              </kbd>
            </div>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
            <div className="w-full">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Location</legend>
                <select
                  defaultValue="Select Location"
                  className="select w-full"
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
                <input type="date" className="input" />
              </fieldset>
            </div>
            <div className="w-full">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Check-Out</legend>
                <input type="date" className="input" />
              </fieldset>
            </div>
            <div className="w-full">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Person</legend>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn w-54">
                    Choose Person ⬇️
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </fieldset>
            </div>
            <div className="justify-end card-actions mt-8 w-full">
              <button className="btn btn-primary w-full rounded-2xl bg-red-500 border-none text-white">
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
