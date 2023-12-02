import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/drivers";

class DriverService {
  insert(driver: any) {
    return axios.post(USER_API_BASE_URL + "/insert", driver);
  }

  updateExp(driver: any) {
    return axios.post(USER_API_BASE_URL + "/updateExp", driver);
  }
}

export default new DriverService();
