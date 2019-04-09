import React, { Component } from "react";

export default class Box extends Component {
  render() {
    const { image, title, link, handleClick, collapsed } = this.props;
    return (
      <div
        onClick={handleClick(title, link)}
        className={collapsed ? "box collapsed" : "box small"}
        style={{ backgroundImage: "url(" + image + ")" }}
      />
    );
  }
}
