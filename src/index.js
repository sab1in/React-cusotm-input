import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* BrowserRouter is used to configure all the features from react-router within app component */}

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
