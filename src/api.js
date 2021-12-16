import axios from "axios";

export default {
  user: {
    login: (credentials) =>
      axios
        .post("/api/auths/login", {
          email: credentials.email,
          password: credentials.password,
        })
        .then((res) => res.data),
    signup: (user) =>
      axios.post("/api/users", { user }).then((res) => res.data),
    confirm: (token) =>
      axios
        .post("/api/auth/confirmation", { token })
        .then((res) => res.data.user),
    resetpasswordrequest: (email) =>
      axios.post("/api/auth/reset_password_request", { email }),
    validateToken: (token) => axios.post("/api/auth/validate_token", { token }),
    resetPassword: (data) => axios.post("/api/auth/reset_password", { data }),
    getHistory: (data) =>
      axios.get("/api/users/1/history", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }),
  },
};
