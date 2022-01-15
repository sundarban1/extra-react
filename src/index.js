import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import SignUpPage from "./pages/SignUpPage";
import UpdatePage from "./pages/UpdatePage";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux"; // createstore create redux store, applyMiddleware allows us to use thunk
import { Provider } from "react-redux"; //to connect react and redux // HOC where we wrap our application
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import HistoryPage from "./pages/HistoryPage";
import TransactionsPage from "./pages/TransactionsPage";
import TopUpPage from "./pages/TopUpPage";
import Request from "./components/Request";
import HandleRequest from "./components/HandleRequest";
import AddBank from "./components/AddBank";

const store = createStore(
  //createStore takes two args
  rootReducer, // the whole tree
  composeWithDevTools(applyMiddleware(thunk))
);

// //WHEN USING REDUX WE NEED TO MAKE A FUNCTTION TO STORE ALL THE DATAS. NOW CREATE A STORE WHICH WILL TAKE TWO ARGUMENTS.
// // CONST store  = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// )

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LoginPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/update" component={UpdatePage} />
        <Route path="/transactions" component={TransactionsPage} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/topUP" component={TopUpPage}></Route>
        <Route path="/request" component={Request}></Route>
        <Route path="/handleRequest" component={HandleRequest}></Route>
        <Route path="/addBank" component={AddBank}></Route>
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

registerServiceWorker();
