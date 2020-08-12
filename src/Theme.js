import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

class A extends React.Component {
  componentWillMount() {
    document.getElementById("body").className = "darktheme";
  }
  componentWillUnmount() {
    document.getElementById("body").className = "";
  }
  render() {
    return <div></div>;
  }
}

export default class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitch: false,
    };
  }
  handleToggle() {
    this.setState({
      isSwitch: !this.state.isSwitch,
    });
  }
  render() {
    return (
      <div>
        {this.state.isSwitch ? (
          <FontAwesomeIcon
            icon={faMoon}
            className="moon"
            onClick={() => this.handleToggle()}
          />
        ) : (
          <FontAwesomeIcon
            icon={faSun}
            className="sun"
            onClick={() => this.handleToggle()}
          />
        )}
        {this.state.isSwitch && <A />}
      </div>
    );
  }
}
