import axios from "axios";

export default {
  user: {
    getUser: (data) =>
      axios.get("/api/users/1", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }),
  },
};
