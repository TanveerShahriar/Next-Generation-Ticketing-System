import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/names";

class NameService {
  insert(name: any) {
    return axios.post(USER_API_BASE_URL + "/insert", name);
  }

  getFreeDriver(busSchedule: any) {
    return axios.post(USER_API_BASE_URL + "/getFreeDriver", busSchedule);
  }
}

export default new NameService();
