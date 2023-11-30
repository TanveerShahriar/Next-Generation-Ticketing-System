import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/auths";

class AuthService {
  insert(auth: any) {
    return axios.post(USER_API_BASE_URL + "/insert", auth);
  }
}

export default new AuthService();
