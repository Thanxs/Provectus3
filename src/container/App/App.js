import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import axios from "../../axios";

import classes from "./App.module.css";
import Home from "../../component/Home/Home";
import Contacts from "../Contacts/Contacts";
import Navbar from "../../component/Navbar/Navbar";

class App extends Component {
  componentDidMount() {
    axios
      .get("/menu")
      .then(response => {
        this.props.onAddMenu(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className={classes.App}>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/Contacts" component={Contacts} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddMenu: data => dispatch({ type: "ADD_MENU", data })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
