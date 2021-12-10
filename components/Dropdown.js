import { useState } from "react";
export default function Dropdown({ label, options }) {
  const [isDroped, setIsDroped] = useState(false);
  return (
    <div className="flex flex-col relative  ">
      <div
        className="label bg-gray-100 p-2  cursor-pointer rounded-md"
        onClick={(e) => {
          setIsDroped(!isDroped);
        }}
      >
        {label}
      </div>
      {isDroped && (
        <div className="options absolute top-12 bg-gray-100 p-2 w-full rounded-md right-0">
          {options.map((option) => (
            <div>{option}</div>
          ))}
        </div>
      )}
    </div>
  );
}
