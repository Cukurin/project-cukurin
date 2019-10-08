import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Login from './components/login'
import './index.css';
import App from './App';
import Register from './components/register'
import Search from './components/Search'
import Navbar from './components/navbar'
import Footer from './components/footer'
import * as serviceWorker from './serviceWorker';

const Main = withRouter(({location}) => {
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/register" && <Navbar/>}
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/search" component={Search} />
      <Route path="/register" component={Register}/>
      {location.pathname !== "/login" && location.pathname !== "/register" && <Footer/>}
    </div>
  )
})

ReactDOM.render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>, 
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
