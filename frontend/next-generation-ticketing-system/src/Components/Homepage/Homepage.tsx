import React, { useContext, useEffect, useState } from "react";
import { UserToken } from "../../Token/UserToken";
import { useNavigate } from "react-router-dom";
import "./homepage.css";

function Homepage() {
  const { authorised, userId, userType } = useContext(UserToken);
  const [districts, setDistricts] = useState([
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    "Khulna",
    "Barisal",
    "Sylhet",
    "Rangpur",
    "Mymensingh",
  ]);

  let navigate = useNavigate();
  useEffect(() => {
    if (authorised === "false") {
      navigate("/login");
    }
  }, [authorised]);

  return (
      <div className="background_image_homepage">
    <div className="flex justify-center pt-4">
      <div className="flex space-x-4">
        <select
          aria-label="source"
          className="p-2 border border-gray-300 rounded"
        >
          <option className="selected">Select Source</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
        <select
          aria-label="dest"
          className="p-2 border border-gray-300 rounded"
        >
          <option className="selected">Select Destination</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
        <button className=" ps-6 pe-6 bg-blue-500 text-white rounded">
          Find
        </button>
      </div>
    </div>
      </div>
  );
}

export default Homepage;
