"use client";
import React, { useState } from "react";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Link from "next/link";

const Searchbar = ({placeholder}:{placeholder?: string}) => {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };
  return (
    <>
      <div className="border border-gray-300 rounded-md py-1 px-2">
        <input
          type="text"
          placeholder={placeholder || "Start your Search"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {input && (
        <div
          className="absolute top-[100%]  left-[20%] md:left-[50%]
        flex flex-col col-span-3 mx-auto  translate-x-[-280%] md:translate-x-[-50%]  w-8 md:w-fit"
        >
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#FD5B61"]}
            minDate={new Date()}
          />
          <div className="flex  items-center border-b bg-white p-4 gap-x-4 md:gap-x-0">
            <h2 className="md:text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={numOfGuests}
              min={1}
              onChange={(e) => setNumOfGuests(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center bg-white p-5 gap-x-8">
            <button
              type="button"
              className="flex-grow text-gray-500"
              onClick={() => setInput("")}
            >
              Cancel
            </button>
            <Link href={{pathname:'search',search:`?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`}}
                  onClick={() => setInput('')}
                  className="flex-grow text-red-400">
              Search
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Searchbar;
