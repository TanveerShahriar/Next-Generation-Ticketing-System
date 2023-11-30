import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8080/api/seats";

class SeatService{
    updateTicket(ticket: any){
        return axios.put(USER_API_BASE_URL + "/updateTicket", ticket);
    }
}

export default new SeatService();