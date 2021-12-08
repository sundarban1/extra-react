import axios from "axios";

export default {
  user: {
    getUser: (data) =>
      axios.get("/api/users/1", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }),
    getHistory: (data) =>
      axios.get("/api/users/1/history", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }),
  },
};
