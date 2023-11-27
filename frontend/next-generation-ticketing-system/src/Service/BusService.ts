import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/buses";

class BusService{
    insert(bus: any){
        return axios.post(USER_API_BASE_URL + "/insert", bus);
    }
    // http://localhost:8080/api/buses/search/findByBusNo{?busNo}
    findByBusNo(busNo: any){
        return axios.get(USER_API_BASE_URL + "/search/findByBusNo?busNo=" + busNo);
    }
}

export default new BusService();