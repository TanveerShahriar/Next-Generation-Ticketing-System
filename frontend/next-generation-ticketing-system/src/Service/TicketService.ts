import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8080/api/tickets";

class TicketService{
    insert(ticket: any){
        return axios.post(USER_API_BASE_URL + "/insert", ticket);
    }
}

export default new TicketService();