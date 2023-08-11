import React from "react";
import "./list.css";

const List = ({ layout, items }) => {
  return (
    <div>
      {layout === "bullet" ? (
        <ul>
          <li>{items.one}</li>
          <li>{items.two}</li>
          <li>{items.three}</li>
        </ul>
      ) : layout === "alpha" ? (
        <ol type="A">
          <li>{items.one}</li>
          <li>{items.two}</li>
          <li>{items.three}</li>
        </ol>
      ) : (
        <ol type="1">
          <li>{items.one}</li>
          <li>{items.two}</li>
          <li>{items.three}</li>
        </ol>
      )}
    </div>
  );
};

export default List;
