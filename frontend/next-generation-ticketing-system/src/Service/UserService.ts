import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8080/api/users";

class UserService{
    signup(user: any){
        return axios.post(USER_API_BASE_URL + "/signup", user);
    }

    login(user: any){
        return axios.post(USER_API_BASE_URL + "/login", user);
    }

    findUserByEmail(email: string){
        return axios.get(USER_API_BASE_URL + "/search/findUserByEmail?email=" + email);
    }

    findByUser(user_id: any){
        return axios.get(`http://localhost:8080/api/users/${user_id}/auths`);
    }
}

export default new UserService();