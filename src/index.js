import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./App2";
const stem = ReactDOM.createRoot(document.getElementById("stem"));
const root = ReactDOM.createRoot(document.getElementById("root"));
// value
  // ? root.render(
  //     <React.StrictMode>
  //       <App />
  //     </React.StrictMode>
  //   )
  // : stem.render(
  //     <React.StrictMode>
  //       <App2 />
  //     </React.StrictMode>
  //   );

     root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
    stem.render(
      <React.StrictMode>
        <App2 />
      </React.StrictMode>
    );