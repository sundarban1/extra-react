import React from "react";
import TopAppBar from "../components/TopAppBar";
import { Route } from "react-router-dom";
import ProfilePage from "./ProfilePage";
function MainPage(props) {
  return (
    <div>
      <div>
        <TopAppBar history={props.history} />
        <Route path="/main" component={ProfilePage} />
      </div>
    </div>
  );
}

export default MainPage;
