import React from "react";

/**
 * Visualizes list insertion. Prevents insertion of the empty string, but
 * it does not prevent insertion of a string consisting only of whitespace.
 */
export default function ListVisualization() {
  const [state, setState] = React.useState({ list: [], item: "" });

  function handleItemChange({ target }) {
    setState(prev => ({ ...prev, item: target.value }));
  }

  function handleInsertClick() {
    setState({ list: [...state.list, state.item], item: "" });
  }

  return (
    <div style={{ padding: "16px" }}>
      <div>
        <input type="text" value={state.item} onChange={handleItemChange} />
        <button onClick={handleInsertClick} disabled={!Boolean(state.item)}>
          Insert
        </button>
        <p>List display</p>
        <ul>
          {state.list.map((e, i) => (
            // safely using index as the key - the order cannot be changed
            <li key={i} style={{ color: getItemColor(i + 1) }}>
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * Sets the color of an element in the list based on it's index.
 * Expects indexing to start from 1 not 0. Every third item is red
 * and all other items are black.
 * @param  {Number} index Element position in list
 * @return {String}       Color
 */
function getItemColor(index) {
  return index % 3 === 0 ? "red" : "black";
}
