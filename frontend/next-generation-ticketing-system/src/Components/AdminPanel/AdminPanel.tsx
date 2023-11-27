import React, { useContext, useEffect } from "react";
import { UserToken } from "../../Token/UserToken";
import { useNavigate } from "react-router-dom";
import "./adminPanel.css";

function AdminPanel() {
  const { authorised, userId, userType } = useContext(UserToken);
  let navigate = useNavigate();

  useEffect(() => {
    if (authorised === "false") {
      navigate("/login");
    }
    if (userType !== "admin") {
      navigate("/home");
    }
  }, [authorised, userType]);

  const handleAddNewBus = () => {
    navigate("/addBus");
  };

  return (
    <div className="flex justify-center items-center h-screen background_image_admin">
      <div
        id="base"
        className="bg-white bg-opacity-25 rounded-lg p-6 justify-center"
      >
        <button
          className="flex-grow block bg-black hover:bg-gray-900 text-white border-2 border-white text-center py-4 px-20 rounded-lg font-bold"
          onClick={handleAddNewBus}
        >
          Add new Bus
        </button>
      </div>
    </div>
  );
}

export default AdminPanel;
