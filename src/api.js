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
      axios
        .post("/api/users", {
          first_name: user.first_name,
          last_name: user.last_name,
          phone: user.phone,
          address: user.address,
          dob: user.dob,
          email: user.email,
          password: user.password,
        })
        .then((res) => res.data),
    confirm: (token) =>
      axios
        .post("/api/auth/confirmation", { token })
        .then((res) => res.data.user),
    resetpasswordrequest: (email) =>
      axios.post("/api/auth/reset_password_request", { email }),
    validateToken: (token) => axios.post("/api/auth/validate_token", { token }),
    resetPassword: (data) => axios.post("/api/auth/reset_password", { data }),
  },
};
