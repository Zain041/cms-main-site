import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';
import {Provider, provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Home from "./components/Home"
import Blog from "./components/Blog"
import Job from "./components/Job"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
       <Route exact path="/" component={Home}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/job" component={Job}/>
   
    </Switch>
  </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
