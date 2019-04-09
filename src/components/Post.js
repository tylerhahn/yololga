import React, { Component } from "react";
import _ from "lodash";
import Box from "./Box";

export default class Post extends Component {
  render() {
    const { handleClick, boxes } = this.props,
      { id } = this.props.match.params,
      box = _.filter(boxes, { link: id });

    return (
      <div className="post">
        <Box
          active={true}
          handleClick={handleClick}
          link={box[0].link}
          title={box[0].title}
          image={box[0].image}
        />

        <p>{box[0].content}</p>
      </div>
    );
  }
}
