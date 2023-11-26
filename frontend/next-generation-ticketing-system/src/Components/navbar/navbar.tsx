import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-950">
      <div className="flex items-center">
        <Link to="/home" className="font-bold text-white text-3xl p-1">
          Next Generation Ticketing System
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
