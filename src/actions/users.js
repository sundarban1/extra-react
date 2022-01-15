import api from "../api";
import { getUserDetails, userLoggedIn, getUserHistory } from "./auth";
import axios from "axios";

export const signup = (data) => (dispatch) =>
  api.user.signup(data).then((user) => {
    localStorage.bookwormJWT = user.token;
    localStorage.id = user.id;
    dispatch(userLoggedIn(user));
  });

  export const getUser = () => {
    return (dispatch) => {
      axios.get("/api/users/" + localStorage.getItem("id"),{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(response => {
          console.log(response);
          dispatch({
              type: 'GET_USER',
              payload: response.data
          })
      })
      .catch(error => {
          console.log(error);
      });
    }
}

export const getHistory = (data) => (dispatch) => {
  alert("hello");
  api.user.getHistory(data).then((history) => {
    dispatch(getUserHistory(history));
  });
};
