import api from "../api";

export const getUser = (data) => (dispatch) =>
  api.user.getUser(data).then((user) => {
    // localStorage.bookwormJWT = user.token;
    dispatch(getUser(user));
  });
