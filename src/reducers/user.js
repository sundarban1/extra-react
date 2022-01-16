import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  GET_USER,
  GET_HISTORY,
} from "../types";

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;  
    case GET_USER:
        return {...state, users: action.payload.data};
    case GET_HISTORY:
      return action.user;
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
}
