import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/busSchedules";

class BusScheduleService {
  insert(busSchedule: any) {
    return axios.post(USER_API_BASE_URL + "/insert", busSchedule);
  }

  getMyRides(userId: number) {
    return axios.get(USER_API_BASE_URL + "/" + userId);
  }
}

export default new BusScheduleService();
