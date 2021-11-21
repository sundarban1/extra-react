import initialState from "../reducers/initialState";
import ih from "immutability-helper";

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case "AddCurrentUser": {
      let nstate = ih(state, { $set: action.payload });
      return nstate;
    }
    case "RemoveCurrentUser": {
      let nstate = ih(state, { $set: initialState.user });
      localStorage.removeItem("userremember");
      return nstate;
    }
    default: {
      return initialState.user;
    }
  }
};

export default userReducer;
