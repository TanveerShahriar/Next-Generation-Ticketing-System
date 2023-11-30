import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/busSchedules";

class BusScheduleService {
  insert(busSchedule: any) {
    return axios.post(USER_API_BASE_URL + "/insert", busSchedule);
  }
}

export default new BusScheduleService();
