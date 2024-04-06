import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./stylesheet.css";


const root = createRoot(document.querySelector("#app"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
