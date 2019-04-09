import React from "react";
import { map } from "lodash";
import Box from "./Box";

const Home = ({ handleClick, activeProject, boxes }) => {
  const renderBoxes = () => {
    return map(boxes, (box, i) => {
      let collapsed =
        activeProject !== null && box.title !== activeProject.title;
      return <Box collapsed={collapsed} handleClick={handleClick} box={box} />;
    });
  };
  return (
    <>
      <div className="flex-container">{renderBoxes()}</div>
      <div className="flex-container">
        {activeProject && <p>{activeProject.content}</p>}
      </div>
    </>
  );
};

export default Home;
