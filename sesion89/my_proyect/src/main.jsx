import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Rutas/App.jsx";
import "./index.css";

const token = sessionStorage.getItem("token");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
