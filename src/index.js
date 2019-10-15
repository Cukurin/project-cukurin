import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Login from "./components/login";
import "./index.css";
import App from "./App";
import Register from "./components/register";
import Search from "./components/Search";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Profile from './components/profile'
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./store/reducer";
import thunk from "redux-thunk";
import barbershopDetail from "./components/barbershopDetail";


const Main = withRouter(({ location }) => {
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/search" component={Search} />
      <Route path="/profile" component={Profile}/>
      <Route path="/register" component={Register} />
      <Route path="/barbershop/:id" component={barbershopDetail}/>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </div>
  );
});

const myStore = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
