import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/routeDistricts";

class RouteDistrictService {
  insert(routeDistrict: any) {
    return axios.post(USER_API_BASE_URL + "/insert", routeDistrict);
  }
}

export default new RouteDistrictService();