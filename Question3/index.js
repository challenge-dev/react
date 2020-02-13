import React from "react";
import PropTypes from "prop-types";

import "./rectangles.css";

/**
 * Creates the rectangles according to question spec.
 */
export default function Rectangles() {
  return (
    <div style={{ padding: "64px" }}>
      <Rectangle
        name="Div 1"
        style={{ backgroundColor: "lightblue", border: "solid 2px lightblue" }}
      >
        <Rectangle
          name="Div 2"
          style={{ backgroundColor: "orange", border: "solid 2px orange" }}
        >
          <Rectangle name="Div 3" style={{ border: "solid 2px lightblue" }} />
        </Rectangle>
      </Rectangle>
    </div>
  );
}

/**
 * Renders a styled rectangle with click alert.
 */
function Rectangle({ name, children, ...props }) {
  function handleClick(e) {
    e.stopPropagation();
    window.alert(name);
  }

  // if there are additional children, render the name with its class
  // so that it ignores the padding on the rectangle css class
  return (
    <div {...props} className="rectangle" onClick={handleClick}>
      <div className={children ? "rect-name" : "rect-children"}>{name}</div>
      {children && <div className="rect-children">{children}</div>}
    </div>
  );
}

/**
 * Any other provided props are passed to the parent div.
 */
Rectangle.propTypes = {
  /** @type {String} rectangle name */
  name: PropTypes.string.isRequired,
  /** @type {React<Node>} Children to render */
  children: PropTypes.node
};
