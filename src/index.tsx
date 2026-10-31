import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { startAnalytics } from "./analytics";

startAnalytics();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
