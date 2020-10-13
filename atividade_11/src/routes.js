import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Create from "./components/Create";
import Edit from "./components/Edit";
import Home from "./components/Home";
import List from "./components/List";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function Routes(props) {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            Projeto CRUD
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/signup"} className="nav-link">
                  Sign-Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/signin"} className="nav-link">
                  Sign-In
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/create"} className="nav-link">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/list"} className="nav-link">
                  List
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <h2
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontFamily: "Merriweather",
            fontSize: "45px",
          }}
        >
          Projeto CRUD
        </h2>
        <h5>{props.user}</h5>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/create" component={Create} />
          <Route path="/edit/:id" component={Edit} children={<Edit />} />
          <Route path="/list" component={List} />
        </Switch>
      </div>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    user: state.authReducer.user,
  };
}

export default connect(mapStateToProps)(Routes);
