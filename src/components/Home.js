import React from "react";
import Search from "./Search";
import "../style/Home.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"


import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Home() {
  return (
    <div className="home">
      <nav className="home__header">
        <div className="home__headerLeft">
          <Link to="about">About</Link>
          <Link to="store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="gmail">Gmail</Link>
          <Link to="images">Images</Link>
          <Link to="applications">
            <AppsIcon />
          </Link>
          <Link to="account">
            <AccountCircleIcon />
          </Link>
        </div>
      </nav>

      <div className="home__body">
        <Link to="/">
          <img src={logo} alt="logo" className="home__logo" />
        </Link>
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
