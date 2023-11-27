import React, { useContext, useEffect, useState } from "react";
import { UserToken } from "../../Token/UserToken";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
import DistrictService from "../../Service/DistrictService";
import District from "../../Entity/District";

function Homepage() {
  const [districts, setDistricts] = useState<District[]>([]);

  const { authorised, userId, userType } = useContext(UserToken);
  let navigate = useNavigate();
  useEffect(() => {
    if (authorised === "false") {
      navigate("/login");
    }
  }, [authorised]);

  useEffect(() => {
    DistrictService.getAllDistricts().then((res) => {
      let districts = res.data._embedded.districts;
      let tempDistricts: District[] = [];
      for (let i = 0; i < districts.length; i++) {
        tempDistricts.push(new District(i+1, districts[i].distName));
      }
      setDistricts(tempDistricts);
    });
  }, []);


  return (
      <div className="background_image_homepage">
    <div className="flex justify-center pt-4">
      <div className="flex space-x-4">
        <select
          aria-label="source"
          className="p-2 border border-gray-300 rounded"
        >
          <option className="selected">Select Source</option>
          {districts.map((district) => (
              <option key={district.distId} value={district.distName}>
                {district.distName}
              </option>
          ))}
        </select>
        <select
          aria-label="dest"
          className="p-2 border border-gray-300 rounded"
        >
          <option className="selected">Select Destination</option>
          {districts.map((district) => (
              <option key={district.distId} value={district.distName}>
                {district.distName}
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
