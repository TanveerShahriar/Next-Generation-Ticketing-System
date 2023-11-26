import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {UserToken} from "../../Token/UserToken";

function Navbar() {
  const {authorised, setAuthorised, userId, setUserId, userType, setUserType} = useContext(UserToken);
  const handleLogout = () => {
    setAuthorised("false");
    setUserType("");
    setUserId("");
  };

  return (
    <nav className="bg-blue-950">
      <div className="flex items-center justify-between">
        <Link to="/home" className="font-bold text-white text-3xl p-1">
          Next Generation Ticketing System
        </Link>
        {authorised==='true' &&
          <div className="flex items-center">
            <button className="text-white p-1 bg-blue-500 hover:bg-blue-700 rounded-md me-1">
              Tickets
            </button>
            <button className="text-white p-1 bg-blue-500 hover:bg-blue-700 rounded-md me-1">
              Profile
            </button>
            <button
              className="text-white p-1 bg-blue-500 hover:bg-blue-700 rounded-md me-1"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        }
      </div>
    </nav>
  );
}

export default Navbar;
