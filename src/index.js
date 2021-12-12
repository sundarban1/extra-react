import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import SignUpPage from "./pages/SignUpPage";
import UpdatePage from "./pages/UpdatePage";
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, applyMiddleware} from "redux"; // createstore create redux store, applyMiddleware allows us to use thunk
import {Provider} from 'react-redux';  //to connect react and redux // HOC where we wrap our application
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';


const store = createStore(  //createStore takes two args
  rootReducer, // the whole tree
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LoginPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/update" component={UpdatePage} />
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

registerServiceWorker();
