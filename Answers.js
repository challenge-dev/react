import React from "react";

import { GridExample } from "./Question1";
import ListVisualization from "./Question2";
import Rectangles from "./Question3";

/**
 * Just renders the answers to the questions for convenience.
 */
function Answers() {
  return (
    <div>
      <p>Question 1</p>
      <GridExample />
      <p>Question 2</p>
      <ListVisualization />
      <p>Question 3</p>
      <Rectangles />
    </div>
  );
}

export default Answers;
