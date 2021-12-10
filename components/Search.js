import React from "react";

export default function Search() {
  return (
    <div className="bg-gray-100 flex items-center px-2 rounded-lg">
      <div>
        <img src="/icons/bell.svg" alt="Search'icon" className="w-12 px-2" />
      </div>
      <input
        type="text"
        placeholder="Search For a Country"
        className="bg-transparent w-64 text-gray"
      />
    </div>
  );
}
