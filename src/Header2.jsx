import React, { Component } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { Tabs, Tab } from "material-ui/Tabs";
import FontIcon from "material-ui/FontIcon";
import MapsPersonPin from "material-ui/svg-icons/maps/person-pin";

// need routes!

const muiTheme = getMuiTheme({
  tabs: {
    fontFamily: "'Lato', sans-serif",
    backgroundColor: "#fff",
    textColor: "#d0b181",
    selectedTextColor: "#d0b181"
  }
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: "one"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = tabSelected => {
    this.setState({
      tabSelected: tabSelected
    });
    this.props.history.push(tabSelected);
  };

  render() {
    return (
      <div className="header-container">
        <MuiThemeProvider muiTheme={muiTheme}>
          <Tabs
            inkBarStyle={{ backgroundColor: "#d0b181" }}
            value={this.state.tabSelected}
            onChange={this.handleChange}
          >
            <Tab
              style={{
                margin: "auto"
              }}
              value="/"
              path="/"
              icon={<FontIcon className="material-icons">home</FontIcon>}
              label="HOME"
            />
            <Tab
              style={{
                margin: "auto"
              }}
              value="gallery"
              icon={<FontIcon className="material-icons">brush</FontIcon>}
              label="GALLERY"
            />
            <img
              className="material-icons header-logo"
              src={`../images/logo4.png`}
            />
            <Tab
              style={{
                margin: "auto"
              }}
              value="contact"
              icon={<FontIcon className="material-icons">email</FontIcon>}
              label="CONTACT"
            />
            <Tab
              style={{
                margin: "auto"
              }}
              value="about"
              icon={<FontIcon className="material-icons">person</FontIcon>}
              label="ABOUT"
            />
          </Tabs>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(Header);
