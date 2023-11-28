import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/buses";

class BusService{
    insert(bus: any){
        return axios.post(USER_API_BASE_URL + "/insert", bus);
    }
    findByBusNo(busNo: any){
        return axios.get(USER_API_BASE_URL + "/search/findByBusNo?busNo=" + busNo);
    }
    getFreeBuses(busSchedule: any){
        return axios.post(USER_API_BASE_URL + "/getFreeBuses", busSchedule);
    }
}

export default new BusService();