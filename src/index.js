import React from "react";
import Navbar from "./Navbar";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/lexend-deca";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <App />
  </>
);
