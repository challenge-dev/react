import React from "react";
import PropTypes from "prop-types";
import "./grid.css";

/**
 * A 4x4 flex grid component. It does not explicitly prevent you from providing
 * fewer than 4 children. Supports arbitrary-depth nesting.
 */
export default function Grid({ children, item }) {
  return (
    <div className={Boolean(item) ? "grid-4x4-item" : "grid-4x4"}>
      {children}
    </div>
  );
}

// type checking module
Grid.propTypes = {
  /**
   * Children the grid should render.
   * @type {React<Node>}
   */
  children: PropTypes.node,
  /**
   * Indicates whether the component is an item or container. If true, the
   * component has a flex-basis of 25%. Otherwise, the component is a flex
   * container with a 1px black border.
   * @type {Boolean}
   */
  item: PropTypes.bool
};

// An example usage of the grid with nesting demonstrated.
export function GridExample() {
  return (
    <Grid>
      <Grid item>item 1</Grid>
      <Grid item>
        <Grid>
          <Grid item>item 2a</Grid>
          <Grid item>item 2b</Grid>
          <Grid item>
            <Grid>
              <Grid item>item 2c.1</Grid>
              <Grid item>item 2c.2</Grid>
              <Grid item>item 2c.3</Grid>
              <Grid item>item 2c.4</Grid>
            </Grid>
          </Grid>
          <Grid item>item 2d</Grid>
        </Grid>
      </Grid>
      <Grid item>item 3</Grid>
      <Grid item>item 4</Grid>
    </Grid>
  );
}
