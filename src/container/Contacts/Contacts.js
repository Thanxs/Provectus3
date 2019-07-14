import React, { Component } from "react";
import classes from "./Contacts.module.css";
import axios from "../../axios";

class Contacts extends Component {
  state = {
    name: null,
    email: null,
    commit: null
  };

  handleChange = event => {
    if (event.target.name === "name") {
      this.setState({ name: event.target.value });
    } else if (event.target.name === "email") {
      this.setState({ email: event.target.value });
    } else if (event.target.name === "commit") {
      this.setState({ commit: event.target.value });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    const contacts = {
      name: this.state.name,
      email: this.state.email,
      commit: this.state.commit,
      id: (Math.random() * 101).toFixed(0)
    };

    if (
      contacts.name.length > 0 &&
      contacts.email.length > 0 &&
      contacts.commit.length > 0
    ) {
      axios.post("contact", { contacts }).then(response => {
        console.log(response);
      });
    } else {
      alert("Fill all the data!");
    }
  };

  render() {
    return (
      <div className={classes.Contacts}>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              placeholder="Name*"
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              placeholder="Email*"
            />
          </label>
          <label>
            Commit:
            <textarea name="commit" cols="50" rows="5" placeholder="Commit*" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contacts;
