import React, { Component } from "react";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      from: "",
      name: "",
      text: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  handleSubmit = e => {
    axios
      .post("https://datart-server.herokuapp.com/api/send", {
        from: this.state.from,
        name: this.state.name,
        user: this.state.from,
        text: this.state.text
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="form-container">
        <MuiThemeProvider>
          <br />
          <br />
          <br />
          <TextField
            name="from"
            hintText="Your email address"
            floatingLabelText="email"
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name="name"
            hintText="Your full name"
            floatingLabelText="full name"
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name="text"
            hintText="Body of email"
            floatingLabelText="message"
            multiLine={true}
            rows={1}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <div className="contact-submit-container">
            <RaisedButton label="Submit" onClick={this.handleSubmit} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Form;
