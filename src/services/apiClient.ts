import axios from "axios";

export default axios.create({
  baseURL: "https://api.openweathermap.org",
  params: {
    appid: "a67ee6c086b2911da75fa306d8556085",
  },
});