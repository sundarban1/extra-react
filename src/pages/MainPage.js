import React from "react";
import TopAppBar from "../components/main/TopAppBar";
import LeftDrawer from "../components/main/LeftDrawer";
import { Route } from "react-router-dom";
import Pg2 from "./Pg2";
import Pg3 from "./Pg3";

import ProfilePage from "./ProfilePage";

function MainPage(props) {
  return (
    <div>
      <div>
        <TopAppBar history={props.history} />
        <LeftDrawer />
        <Route path="/main/pg2" component={Pg2} />
        <Route path="/main/pg3" component={Pg3} />
      </div>
      <div>
        <ProfilePage />
      </div>
    </div>
  );
}

export default MainPage;
