import api from "../api";
import { getUserDetails, userLoggedIn, getUserHistory } from "./auth";

export const signup = (data) => (dispatch) =>
  api.user.signup(data).then((user) => {
    localStorage.bookwormJWT = user.token;
    localStorage.id = user.id;
    dispatch(userLoggedIn(user));
  });

export const getUser = (data) => (dispatch) => {
  api.user.getUser(data).then((user) => {
    dispatch(getUserDetails(user));
  });
};

export const getHistory = (data) => (dispatch) => {
  alert("hello");
  api.user.getHistory(data).then((history) => {
    dispatch(getUserHistory(history));
  });
};
