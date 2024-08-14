import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Rutas/App.jsx";
import "./App.css"
import "./index.css";
import { CartProvider } from "./components/context/CartProvider.jsx";

const token = sessionStorage.getItem("token");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
