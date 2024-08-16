import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"
import "./index.css";
import { CartProvider } from "./components/context/CartProvider.jsx";
import Routers from "./Rutas/Routers.jsx";

// const token = sessionStorage.getItem("token");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Routers />
    {/* </CartProvider> */}
  </React.StrictMode>
);
