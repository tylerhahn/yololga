import React, { Component } from "react";

export default class Box extends Component {
  render() {
    const { box, handleClick, collapsed } = this.props;
    return (
      <div
        onClick={() => handleClick(box)}
        className={collapsed ? "box collapsed" : "box small"}
        style={{ backgroundImage: "url(" + box.image + ")" }}
      />
    );
  }
}
