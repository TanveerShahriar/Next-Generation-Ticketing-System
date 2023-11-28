import "./adminPanel.css";
import React, { useContext, useEffect, useState } from "react";
import District from "../../Entity/District";
import { UserToken } from "../../Token/UserToken";
import { useNavigate } from "react-router-dom";
import Bus from "../../Entity/Bus";
import BusService from "../../Service/BusService";
import RouteDistrictService from "../../Service/RouteDistrictService";
import RouteDistrict from "../../Entity/RouteDistrict";
import route from "../../Entity/Route";
import RouteShower from "../../Entity/CustomEntity/RouteShower";
import NameService from "../../Service/NameService";
import Name from "../../Entity/Name";
import User from "../../Entity/User";

function AddSchedule() {
  const [districts, setDistricts] = useState<District[]>([]);
  const [buses, setBuses] = useState<Bus[]>([]);
  const [departureTimeObj, setDepartureTimeObj] = useState<Date>();
  const [arrivalTimeObj, setArrivalTimeObj] = useState<Date>();
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [routeShowerList, setRouteShowerList] = useState<RouteShower[]>([]);
  const [freeDrivers, setFreeDrivers] = useState<Name[]>([]);

  const { authorised, userId, userType } = useContext(UserToken);
  let navigate = useNavigate();
  useEffect(() => {
    if (authorised === "false") {
      navigate("/login");
    }
  }, [authorised]);

  useEffect(() => {
    if(departureTimeObj && arrivalTimeObj) {
      let tempBusSchedule = {
        departureTime: departureTimeObj,
        arrivalTime: arrivalTimeObj,
      };
      BusService.getFreeBuses(tempBusSchedule).then((res) => {
        let tempBuses: Bus[] = [];
        for (let i = 0; i < res.data.length; i++) {
          tempBuses.push(
            new Bus(
              res.data[i].busId,
              res.data[i].busNo,
              res.data[i].busType,
              res.data[i].busCapacity
            )
          );
        }
        setBuses(tempBuses);
      });
    }
  }, [departureTimeObj, arrivalTimeObj]);

  useEffect(() => {
    RouteDistrictService.getAll().then((res) => {
      let tempRouteDistrictList: RouteDistrict[] = [];
      for (let i = 0; i < res.data.length; i++) {
        tempRouteDistrictList.push(new RouteDistrict(
            res.data[i].routeDistrictId,
            new route(res.data[i].route.routeId),
            new District(res.data[i].district.distId, res.data[i].district.distName),
            res.data[i].distOrder)
        );
      }

      let tempRouteShowers: RouteShower[] = [];
        for (let i = 0; i < tempRouteDistrictList.length; i++) {
            let routeAvailable = false;
            for(let j = 0 ; j<tempRouteShowers.length; j++) {
              if (tempRouteDistrictList[i].route.routeId === tempRouteShowers[j].routeId){
                tempRouteShowers[j].districts.splice(tempRouteDistrictList[i].distOrder,0,tempRouteDistrictList[i].district.distName);
                routeAvailable = true;
                break;
              }
            }
            if (!routeAvailable){
              let tempList: string[] = [];
              tempList.splice(tempRouteDistrictList[i].distOrder, 0, tempRouteDistrictList[i].district.distName)
              tempRouteShowers.push(
                  new RouteShower(tempRouteDistrictList[i].route.routeId, tempList)
              );
            }
        }
        setRouteShowerList(tempRouteShowers);
    });
  }, []);

  useEffect(() => {
    if(departureTimeObj && arrivalTimeObj) {
      let tempBusSchedule = {
        departureTime: departureTimeObj,
        arrivalTime: arrivalTimeObj,
      };
      NameService.getFreeDriver(tempBusSchedule).then((res) => {
        let tempFreeDrivers: Name[] = [];
        for (let i = 0; i < res.data.length; i++) {
          tempFreeDrivers.push(
              new Name(res.data[i].nameId, res.data[i].firstName, res.data[i].lastName, new User(res.data[i].user.userId, res.data[i].user.email, res.data[i].user.address, res.data[i].user.password))
          );
        }
        setFreeDrivers(tempFreeDrivers);
      });
    }
  }, [departureTimeObj, arrivalTimeObj]);

  const handleDepartureTimeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDepartureTime(e.target.value);
    setDepartureTimeObj(new Date(e.target.value));
  };

  const handleArrivalTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalTime(e.target.value);
    setArrivalTimeObj(new Date(e.target.value));
  };

  const submitClickHandler = () => {
    let tempBusSchedule = {
      // bus:
      departureTime: departureTimeObj,
      arrivalTime: arrivalTimeObj,
    };
  };

  return (
    <div className="flex justify-center items-center h-screen background_image_admin">
      <div className="bg-black bg-opacity-75 rounded-lg p-6">
        <input
          type="datetime-local"
          aria-label="departureTime"
          placeholder={"Departure Time"}
          className="mt-2 w-full block bg-white hover:bg-gray-200 text-black border-2 border-black text-center py-4 px-20 rounded-lg font-bold"
          value={departureTime}
          onChange={handleDepartureTimeChange}
        />
        <input
          type="datetime-local"
          aria-label="arrivalTime"
          className="mt-2 w-full block bg-white hover:bg-gray-200 text-black border-2 border-black text-center py-4 px-20 rounded-lg font-bold"
          value={arrivalTime}
          onChange={handleArrivalTimeChange}
        />
        <select
          aria-label="source"
          className="mt-2 w-full block bg-white hover:bg-gray-200 text-black border-2 border-black text-center py-4 px-20 rounded-lg font-bold"
        >
          <option className="selected">Select Bus</option>
          {buses.map((bus) => (
            <option key={bus.busId} value={bus.busId}>
              {bus.busNo} - [{bus.busType}] - {bus.busCapacity}
            </option>
          ))}
        </select>
        <select
          aria-label="dest"
          className="mt-2 w-96 block bg-white hover:bg-gray-200 text-black border-2 border-black text-center py-4 px-20 rounded-lg font-bold"
        >
          <option className="selected">Select Route</option>
          {routeShowerList.map((specificRoute, index) => (
              <option key={index} value={specificRoute.routeId}>
                {specificRoute.districts.join(' -> ')}
              </option>
          ))}

        </select>
        <select
          aria-label="bus"
          className="mt-2 w-full block bg-white hover:bg-gray-200 text-black border-2 border-black text-center py-4 px-20 rounded-lg font-bold"
        >
          <option className="selected">Select Driver</option>
          {freeDrivers.map((freeDriver, index) => (
            <option key={index} value={freeDriver.user.userId}>
              {freeDriver.firstName} {freeDriver.lastName}
            </option>
          ))}
        </select>
        <button className="mt-2 w-full block bg-white hover:bg-green-100 text-black border-2 border-black text-center py-4 px-20 rounded-lg font-bold" onClick={submitClickHandler}>
          Add Schedule
        </button>
      </div>
    </div>
  );
}

export default AddSchedule;
