import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import SignUpPage from "./pages/SignUpPage";
import UpdatePage from "./pages/UpdatePage";

import HistoryPage from "./pages/HistoryPage";
import TransactionsPage from "./pages/TransactionsPage";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LoginPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/update" component={UpdatePage} />
        <Route path="/main/transactions" component={TransactionsPage} />
        <Route path="/main/history" component={HistoryPage} />
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

registerServiceWorker();
