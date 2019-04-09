import React, { Component } from "react";
import _ from "lodash";
import Box from "./Box";

export default class Home extends Component {
  renderBoxes() {
    const { handleClick, activeProject, boxes } = this.props;

    return _.map(boxes, (box, i) => {
      let collapsed = box.title !== activeProject && activeProject !== null;
      return (
        <Box
          collapsed={collapsed}
          handleClick={handleClick}
          link={box.link}
          title={box.title}
          image={box.image}
        />
      );
    });
  }
  render() {
    return <div className="flex-container">{this.renderBoxes()}</div>;
  }
}
