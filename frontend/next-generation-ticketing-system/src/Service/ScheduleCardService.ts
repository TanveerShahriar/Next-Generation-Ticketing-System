import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8080/api/scheduleCard";

class ScheduleCardService{
    getScheduleCard(scheduleCard: any){
        return axios.post(USER_API_BASE_URL, scheduleCard);
    }
}

export default new ScheduleCardService();