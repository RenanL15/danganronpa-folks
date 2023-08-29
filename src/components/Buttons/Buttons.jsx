import React from "react";

export default function Buttons({showSpoilers, spoilers, sort, sortByName }) {
  return (
    <div className="flex gap-6">
      <button
        onClick={showSpoilers}
        className={`mt-5 p-3 font-['Open_Sans'] rounded-lg text-white font-bold transition ease-in-out ${
          spoilers
            ? "bg-yellow-800 hover:bg-yellow-700"
            : "bg-red-900 hover:bg-red-950"
        }`}>
        {spoilers ? "Hide spoilers" : "Show spoilers"}
      </button>
      <button
        onClick={sortByName}
        className={`mt-5 p-3 font-['Open_Sans'] rounded-lg text-white font-bold transition ease-in-out ${"bg-gray-600 hover:bg-gray-700"}`}>
        {"Sort by name"}
        {sort === "AZ" ? (
          <i className="ml-2 fa-solid fa-arrow-down"></i>
        ) : sort === "ZA" ? (
          <i className="ml-2 fa-solid fa-arrow-up"></i>
        ) : null}
      </button>
    </div>
  );
}
