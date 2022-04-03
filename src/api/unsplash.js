import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID fkk8UB4BlMQS4mUxXsrj7y3cyVqJMIWQYEzCtuKPw2k",
  },
});
