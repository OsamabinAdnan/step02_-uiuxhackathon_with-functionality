'use client'

import { ArrowDownUp } from "lucide-react";
import React, { useState } from "react";

const PickDropDetail: React.FC = () => {
  const [pickupDetails, setPickupDetails] = useState({
    location: "",
    date: "",
    time: "",
  });
  const [dropoffDetails, setDropoffDetails] = useState({
    location: "",
    date: "",
    time: "",
  });
  const [isDropoffActive, setIsDropoffActive] = useState(false);

  const handlePickupChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedDetails = { ...pickupDetails, [name]: value };
    setPickupDetails(updatedDetails);

    // Activate drop-off tab if all pick-up details are filled
    if (updatedDetails.location && updatedDetails.date && updatedDetails.time) {
      setIsDropoffActive(true);
    } else {
      setIsDropoffActive(false);
    }
  };

  const handleDropoffChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDropoffDetails({ ...dropoffDetails, [name]: value });
  };

  return (
    <div className="flex items-center justify-center gap-4 px-2  md:flex-row flex-col max-w-[1440px] mx-auto">
      {/* Pick-Up Section */}
      <div className="border rounded-lg p-4 shadow-md bg-primary-foreground dark:bg-primary-foreground ">
        <div className="mb-4">
          <input type="radio" id="pickup" checked />
          <label htmlFor="pickup" className="ml-2 font-bold text-[16px]">Pick-Up</label>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {/* Location */}
          <div>
            <label htmlFor="pickupLocation" className="block mb-2 font-bold text-[16px]">Location</label>
            <select
              id="pickupLocation"
              name="location"
              value={pickupDetails.location}
              onChange={handlePickupChange}
              className="border rounded-lg w-full p-2"
            >
              <option value="" >Select your city</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="Houston">Houston</option>
              <option value="Phoenix">Phoenix</option>
            </select>
          </div>
          {/* Date */}
          <div>
            <label htmlFor="pickupDate" className="block mb-2 font-bold text-[16px]">Date</label>
            <input
              type="date"
              id="pickupDate"
              name="date"
              value={pickupDetails.date}
              onChange={handlePickupChange}
              className="border rounded-lg w-full p-2"
            />
          </div>
          {/* Time */}
          <div>
            <label htmlFor="pickupTime" className="block mb-2 font-bold text-[16px]">Time</label>
            <input
              type="time"
              id="pickupTime"
              name="time"
              value={pickupDetails.time}
              onChange={handlePickupChange}
              className="border rounded-lg w-full p-2"
            />
          </div>
        </div>
      </div>

      {/* Swap Icon */}
      <div  className='w-[60px] h-[60px] bg-PrimaryBlue rounded flex justify-center items-center '>
        <button className="bg-blue-500 text-white p-2 w-8 h-8 shadow-lg flex justify-center items-center rounded-sm" >
           <ArrowDownUp width={24} height={24}/>
        </button>
      </div>

      {/* Drop-Off Section */}
      <div className={`border rounded-lg p-4 shadow-md bg-primary-foreground dark:bg-primary-foreground  ${isDropoffActive ? "" : "opacity-50 pointer-events-none"}`}>
        <div className="mb-4">
          <input type="radio" id="dropoff" disabled={!isDropoffActive} checked={isDropoffActive} readOnly />
          <label htmlFor="dropoff" className="ml-2 font-bold text-[16px]">Drop-Off</label>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="dropoffLocation" className="block mb-2 font-bold text-[16px]">Location</label>
            <select
              id="dropoffLocation"
              name="location"
              value={dropoffDetails.location}
              onChange={handleDropoffChange}
              disabled={!isDropoffActive}
              className="border rounded-lg w-full p-2"
            >
              <option value="">Select your city</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="Houston">Houston</option>
              <option value="Phoenix">Phoenix</option>
            </select>
          </div>
          <div>
            <label htmlFor="dropoffDate" className="block mb-2 font-bold text-[16px]">Date</label>
            <input
              type="date"
              id="dropoffDate"
              name="date"
              value={dropoffDetails.date}
              onChange={handleDropoffChange}
              disabled={!isDropoffActive}
              className="border rounded-lg w-full p-2"
            />
          </div>
          <div>
            <label htmlFor="dropoffTime" className="block mb-2 font-bold text-[16px]">Time</label>
            <input
              type="time"
              id="dropoffTime"
              name="time"
              value={dropoffDetails.time}
              onChange={handleDropoffChange}
              disabled={!isDropoffActive}
              className="border rounded-lg w-full p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickDropDetail;
