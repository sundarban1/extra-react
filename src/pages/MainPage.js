import React from "react";
import TopAppBar from "../components/main/TopAppBar";
import LeftDrawer from "../components/main/LeftDrawer";
import { Route } from "react-router-dom";
import ProfilePage from "./ProfilePage";
// import Transactions from "./TransactionsPage";
import HistoryPage from "./HistoryPage";
import TransactionsPage from "./TransactionsPage";

function MainPage(props) {
  return (
    <div>
      <div>
        <TopAppBar history={props.history} />
        <LeftDrawer />
        <Route path="/main/transactions" component={TransactionsPage} />
        <Route path="/main/history" component={HistoryPage} />
        {/* <LeftDrawer /> */}
        {/* <Route path="/main/pg2" component={Pg2} />
        <Route path="/main/pg3" component={Pg3} /> */}
      </div>
      <div>
        <ProfilePage />
      </div>
    </div>
  );
}

export default MainPage;
