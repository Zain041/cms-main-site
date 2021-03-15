import React, { Component } from "react";
import head from "./../aessts/head/logo.png";
import "../aessts/CSS/head.css";
import {Link} from "react-router-dom"
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar pb-md-19 navbar-default navbar-fixed-top">
          <div>
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div>
                <a class="navbar-brand" href="/myPage">
                  <img src={head} width="50%" />
                </a>
              </div>
            </div>
            <div class="collapse navbar-collapse ml-5" id="myNavbar">
              <ul class="nav navbar-nav navbar-right">
                <li>
            <Link to="/">     <a href="#about">Home</a></Link> 
                </li>
                <li>
                  <a href="#about">Remote Hiring</a>
                </li>
                <li>
                  <a href="#portfolio">SERVICE</a>
                </li>
                <li>
                  <a href="#pricing">About</a>
                </li>
                <li>
                <Link to="/blog"> <a>Blog</a></Link> 
                </li>
                <li>
               <Link to="/job"> <a>Job</a></Link>  
                </li>
                <li>
                  <a href="#about">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
